import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import LoginPage from "./pages/Common/LoginPage";
import LoginOptions from "./pages/Common/LoginOption";
import AmbulanceLoginoption from "./pages/AmbulanceSignup/AmbulanceOption";

import Clinic_details from "./pages/ClinicSignup/ClinicSignup";
import ClinicAdminDetails from "./pages/ClinicSignup/ClininAdminDetails";
import Clinic_doc_Details from "./pages/ClinicSignup/Addmembers/Doctor/DoctorDetails";
import Clinic_Manager_Details from "./pages/ClinicSignup/Addmembers/Manager/ManagerDetails";
import Clinic_Receptionist_Details from "./pages/ClinicSignup/Addmembers/Reception/ReceptionDetails";
import Success_Doc_Page from "./pages/ClinicSignup/Addmembers/Doctor/SuccessPage"
import Success_manager_Page from "./pages/ClinicSignup/Addmembers/Manager/SuccessPage"
import Success_receptionist_Page from "./pages/ClinicSignup/Addmembers/Reception/SuccessPage"
import Clinic_TermsCondition from "./pages/ClinicSignup/TermAndConditionPage";
import Clinic_thankupage from "./pages/ClinicSignup/ThankuPage";
import ClinicDocSignup from "./pages/ClinicSignup/ClinicDoctorSignup";
import DocClinic_TermsCondition from "./pages/ClinicSignup/DocTermAndConditionPage"; 
import OnlineDocSignup from "./pages/OnlineDoctor/OnlineDocSignup";
import OnlineDocVerificationDetails from "./pages/OnlineDoctor/VerificationDetails";
import OnlineDoc_TermsCondition from "./pages/OnlineDoctor/TermAndCondition";
import OnlineDoc_thankupage from "./pages/OnlineDoctor/ThankuPage";
import HospitalAmbulaceSignup from "./pages/AmbulanceSignup/HospitalAmbulance/AmbulanceSignup";

import HospitalAmbulance_TermsCondition from "./pages/AmbulanceSignup/HospitalAmbulance/TermAndCondition";
import HospitalAmbulance_thankupage from "./pages/AmbulanceSignup/HospitalAmbulance/ThankuPage";
import PrivateAmbulaceSignup from "./pages/AmbulanceSignup/PrivateAmbulance/AmbulanceSignup";

import PrivateAmbulance_TermsCondition from "./pages/AmbulanceSignup/PrivateAmbulance/TermAndcondition";
import PrivateAmbulance_thankupage from "./pages/AmbulanceSignup/PrivateAmbulance/ThankuPage";
import OnlineDoctorForm from "./pages/OnlineDoctor/OnlineDocSignup";
import ClinicDoc_Receptionist_Details from "./pages/ClinicSignup/Addmembers/Docreception/receptionDetails";
import Success_ClinicDocreceptionist_Page from "./pages/ClinicSignup/Addmembers/Docreception/successPage";
import AdminDas from "./Modules/clinic/admin/AdminDas";
import ManagerDas from "./Modules/clinic/manager/ManagerDas";
import Doctordas from "./Modules/clinic/doctor/DoctorDas";

import AdminRoutes from "./Modules/AidlyAdmin/routes/AdminRoutes";
import MyPatients from "./Modules/clinic/doctor/MyPatient";
import Myapointment from "./Modules/clinic/doctor/MyAppointment";
import ReceptionDash from "./Modules/clinic/reception/ReceptionDas";
import DashboardLayout from "./Dashboardlayout";
import AddPatientRecord from "./Modules/common/AddPatient";
import StaffAttendence from "./Modules/common/StaffAttendence";
import AttendenceRecord from "./Modules/common/AttendenceRecord";
import AttendenceSuccessPage from "./Modules/common/AttendenceSuccessPage";

import PatientRecord from "./Modules/common/PatientRecord";
import PatientSuccessPage from "./Modules/common/PatientSuccessPage";
import AmbulanceDas from "./Modules/Ambulance/AmbulanceDas";
import BookAppointment from "./Modules/clinic/reception/BookAppointment";
import Hero from "./pages/LandingPage/Hero";
import AboutAidly from "./pages/LandingPage/About";
import AidlyServices from "./pages/LandingPage/Service";
import AidlyContact from "./pages/LandingPage/Contact";
const ErrorPage = () => <h1 className="text-center mt-20 text-3xl">Page Not Found</h1>;

const router = createBrowserRouter([
  {
    path: "/",
  element: <App />,
  errorElement: <ErrorPage />,

   children: [
   {
      index: true,
      element: <Hero />,
    },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/loginoption",
    element: <LoginOptions />,
  },

      {
        path: "/Ambulancelogintype",
        element: <AmbulanceLoginoption />
      },
     
  {
    path: "about",
    element: <AboutAidly />,
  },

  {
    path: "services",
    element: <AidlyServices />,
  },

  {
    path: "contact",
    element: <AidlyContact />,
  },

    ],

    
  },

   // clinic
      {
        path: "/clinic_form",
        element: <Clinic_details/>,
        errorElement: <ErrorPage />
      }, 
 
      {
        path: "/clinic_Admin_Details",
        element: <ClinicAdminDetails/>,
         errorElement: <ErrorPage />
      }, 
      {
        path: "/add-doctor",
        element: <Clinic_doc_Details />,
         errorElement: <ErrorPage />
      }, 
      {
        path: "/add-manager",
        element: <Clinic_Manager_Details/>,
         errorElement: <ErrorPage />
      }, 
      {
        path: "/add-receptionist",
        element: <Clinic_Receptionist_Details/>,
         errorElement: <ErrorPage />
      }, 

      {
        path: "/succesful-add-doctor",
        element: <Success_Doc_Page/>,
         errorElement: <ErrorPage />
      }, 
      {
        path: "/succesful-add-manager",
        element: <Success_manager_Page />,
         errorElement: <ErrorPage />
      }, 
      {
        path: "/succesful-add-Receptionist",
        element: <Success_receptionist_Page/>,
         errorElement: <ErrorPage />
      }, 
      {
        path: "/Clinic_termAndCondition",
        element: <Clinic_TermsCondition />,
         errorElement: <ErrorPage />
      }, 
      {
        path: "/Clinic_thankupage",
        element: <Clinic_thankupage/>,
         errorElement: <ErrorPage />
      }, 

      // ClinicDocsingup
   
      {
        path:"/Clinic-Doctor-Signup",
        element: <ClinicDocSignup/>,
        errorElement: <ErrorPage/>
      },


      {
        path:"/Clinic-Doctor-TermAndCondition",
        element: <DocClinic_TermsCondition/>,
        errorElement: <ErrorPage/>
      },

      {
        path:"/ClinicDoc-add-receptionist",
        element: <ClinicDoc_Receptionist_Details/>,
        errorElement: <ErrorPage/>
      },
      {
        path:"/ClinicDoc-success-add-receptionist",
        element: <Success_ClinicDocreceptionist_Page/>,
        errorElement: <ErrorPage/>
      },

   // Online Doc signup
        {
        path:"/Doctor-Signup",
        element: <OnlineDoctorForm/>,
        errorElement: <ErrorPage/>
      },
      {
        path:"/Doctor-TermAndCondition",
        element: <OnlineDoc_TermsCondition/>,
        errorElement: <ErrorPage/>
      },

        {
        path:"/Doctor-ThankuPage",
        element: <OnlineDoc_thankupage/>,
        errorElement: <ErrorPage/>
      },

      // Ambulance

      // -> hosptal Ambulance

        {
        path:"/Hospital-Ambulance-Signup",
        element: <HospitalAmbulaceSignup/>,
        errorElement: <ErrorPage/>
      },

      

        {
        path:"/Hospital-Ambulance-TermAndCondition",
        element: <HospitalAmbulance_TermsCondition/>,
        errorElement: <ErrorPage/>
      },

        {
        path:"/Hospital-Ambulance-ThankuPage",
        element: <HospitalAmbulance_thankupage/>,
        errorElement: <ErrorPage/>
      },

      // -> private

         {
        path:"/Private-Ambulance-Signup",
        element: <PrivateAmbulaceSignup/>,
        errorElement: <ErrorPage/>
      },

    

        {
        path:"/Private-Ambulance-TermAndCondition",
        element: <PrivateAmbulance_TermsCondition/>,
        errorElement: <ErrorPage/>
      },

        {
        path:"/Private-Ambulance-ThankuPage",
        element: <PrivateAmbulance_thankupage/>,
        errorElement: <ErrorPage/>
      },

      // dastboard
      {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: "admin",
      element: <AdminDas />,
    },
    {
      path: "manager",
      element: <ManagerDas />,
    },
    {
      path: "doctor",
      element: <Doctordas />,
    },
    {
  path: "receptionist",
  element: <ReceptionDash />,
      },
    ],
  },
     {
      path: "/dashboard/receptionist/staffattendance",
      element: <StaffAttendence />,
  },
{
      path: "/dashboard/receptionist/viewattendance",
      element: <AttendenceRecord />,
  },
{
  path: "/staffsuccessful",
  element: <AttendenceSuccessPage />,
},
   
{
  path: "/dashboard/manager/staffattendance",
  element: <StaffAttendence />,
},

{
  path: "/dashboard/manager/viewattendance",
  element: <AttendenceRecord />,
},

{
  path: "/dashboard/manager/addpatient",
  element: <AddPatientRecord />,
},

{
  path: "/dashboard/manager/viewpatient",
  element: <PatientRecord />,
  },
{
  path: "/dashboard/admin/staffattendance",
  element: <StaffAttendence />,
},

{
  path: "/dashboard/admin/viewattendance",
  element: <AttendenceRecord />,
},
{
  path: "/dashboard/receptionist/bookappointment",
  element: <BookAppointment />,
},
{
  path: "/dashboard/admin/addpatient",
  element: <AddPatientRecord />,
},

{
  path: "/dashboard/admin/viewpatient",
  element: <PatientRecord />,
  }, 

       {
        path:"/HospitalAmbulance-Dashboard",
        element: <AmbulanceDas/>,
        errorElement: <ErrorPage/>
      },
       {
        path:"/PrivateAmbulance-Dashboard",
        element: <AmbulanceDas/>,
        errorElement: <ErrorPage/>
      },

       {
  path:"/viewpatients",
  element: <PatientRecord />,
  errorElement: <ErrorPage/>
},
{
  path: "/addpatient",
  element: <AddPatientRecord />,
  errorElement: <ErrorPage/>
},
{
  path:"/patientsuccess",
  element: <PatientSuccessPage />,
  errorElement: <ErrorPage/>
  },
{
  path:"/dashboard/doctor/mypatient",
  element: <MyPatients />,
  errorElement: <ErrorPage/>
},
       {
        path:"/dashboard/doctor/today'sappointmment",
        element: <Myapointment/>,
        errorElement: <ErrorPage/>
  },
  
       
       {
  path: "/admin/*",
  element: <AdminRoutes />,
  errorElement: <ErrorPage />
},

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

