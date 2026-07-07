const client = require("../config/twilio");

// const sendOtp = async (req, res) => {
//   try {
//     const { phone } = req.body;

//     if (!phone) {
//       return res.status(400).json({
//         success: false,
//         message: "Phone number required",
//       });
//     }

//     await client.verify.v2
//       .services(process.env.TWILIO_VERIFY_SERVICE_SID)
//       .verifications.create({
//         to: phone,
//         channel: "sms",
//       });

//     res.status(200).json({
//       success: true,
//       message: "OTP sent successfully",
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// const verifyOtp = async (req, res) => {
//   try {
//     const { phone, otp } = req.body;

//     const verificationCheck = await client.verify.v2
//       .services(process.env.TWILIO_VERIFY_SERVICE_SID)
//       .verificationChecks.create({
//         to: phone,
//         code: otp,
//       });

//     if (verificationCheck.status === "approved") {
//       return res.status(200).json({
//         success: true,
//         message: "OTP verified successfully",
//       });
//     }

//     res.status(400).json({
//       success: false,
//       message: "Invalid OTP",
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   sendOtp,
//   verifyOtp,
// };



// ====================== SEND OTP ======================
const sendOtp = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Phone number required",
      });
    }

    try {
      // Try sending OTP through Twilio
      await client.verify.v2
        .services(process.env.TWILIO_VERIFY_SERVICE_SID)
        .verifications.create({
          to: phone,
          channel: "sms",
        });

      return res.status(200).json({
        success: true,
        message: "OTP sent successfully",
        mode: "twilio",
      });

    } catch (twilioError) {

      console.log("Twilio Send OTP Error:", twilioError.message);

      // If bypass is enabled, don't fail the request.
      if (process.env.OTP_BYPASS === "true") {
        return res.status(200).json({
          success: true,
          message: "Demo mode enabled. Use OTP 942506.",
          mode: "bypass",
        });
      }

      return res.status(500).json({
        success: false,
        message: twilioError.message,
      });
    }

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================== VERIFY OTP ======================
const verifyOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    // Demo OTP
    if (
      process.env.OTP_BYPASS === "true" &&
      otp === process.env.BYPASS_OTP
    ) {
      return res.status(200).json({
        success: true,
        message: "OTP verified successfully",
      });
    }

    try {

      const verificationCheck = await client.verify.v2
        .services(process.env.TWILIO_VERIFY_SERVICE_SID)
        .verificationChecks.create({
          to: phone,
          code: otp,
        });

      if (verificationCheck.status === "approved") {
        return res.status(200).json({
          success: true,
          message: "OTP verified successfully",
        });
      }

      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });

    } catch (twilioError) {

      console.log("Twilio Verify Error:", twilioError.message);

      // If bypass is enabled and Twilio verification fails,
      // tell user to use demo OTP.
      if (process.env.OTP_BYPASS === "true") {
        return res.status(400).json({
          success: false,
          message: "Invalid OTP. Use 123456 in demo mode.",
        });
      }

      return res.status(500).json({
        success: false,
        message: twilioError.message,
      });
    }

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
};