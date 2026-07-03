
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import chart from "../../../assets/chart.png.jpg"

import diagnosis from "../../../assets/diagonosis.png.jpg"
import doctor from "../../../assets/doctormanagement.png.jpg"
import expenses from "../../../assets/expenses.png.jpg"
import patient from "../../../assets/patienapointment.png.jpg"
import satisfaction from "../../../assets/patient_satisfaction.jpg"
import treatment from "../../../assets/treatment.png.jpg"
import profile from "../../../assets/apolohos.png"


const Receptionist = () => {

  const {role} = useParams();

  const[open, setopen] = useState("StaffAttendence");

  const toggle = (name) => {
    if(open === name){
      setopen("")
    }else{
      setopen(name)
    }
  }

  return (


<div className="flex min-h-screen">

{/* Sidebar */}

<div className="w-64  bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] shadow p-1">

{/* Staff Attendance */}
<div
onClick={() => toggle("StaffAttendence")}
className="font-semibold text-lg bg-white p-3 px-8  mb-2"
>

Staff Attendance

{open === "StaffAttendence" && (

<div className="flex gap-2 mt-2">

<Link to="/dashboard/receptionist/staffattendance">
<button className="bg-blue-300 px-3 py-1 rounded-full">
Update
</button>
</Link>

<Link to="/dashboard/receptionist/viewattendance">
<button className="bg-green-300 px-3 py-1 rounded-full">
View
</button>
</Link>

</div>

)}

</div>



{/* Bed Availibility */}
<div
onClick={() => toggle("BedAvailibility")}
className="font-semibold text-lg bg-white p-3 px-8 mb-2"
>

Bed Availibility

{open === "BedAvailibility" && (

<div className="flex gap-2 mt-2">

<button className="bg-blue-300 px-3 py-1 rounded-full">
Update
</button>

<button className="bg-green-300 px-3 py-1 rounded-full">
View
</button>

</div>

)}

</div>


{/* Staff Schedule */}
<div
onClick={() => toggle("StaffSchedule")}
className="font-semibold text-lg bg-white p-3 px-8  mb-2"
>

 Staff Schedule

{open === "StaffSchedule" && (

<div className="flex gap-2 mt-2">

<button className="bg-blue-300 px-3 py-1 rounded-full">
Update
</button>

<button className="bg-green-300 px-3 py-1 rounded-full">
View
</button>

</div>

)}

</div>





{/* Billing Records */}
<div
onClick={() => toggle("BillingRecords")}
className="font-semibold text-lg bg-white p-3 px-8  mb-2"
>

 Billing Records 

{open === "BillingRecords" && (

<div className="flex gap-2 mt-2">

<button className="bg-blue-300 px-3 py-1 rounded-full">
Update
</button>

<button className="bg-green-300 px-3 py-1 rounded-full">
View
</button>

</div>

)}

</div>


{/* Payment Records */}
<div
onClick={() => toggle("PaymentRecords")}
className="font-semibold text-lg bg-white p-3 px-8  mb-2"
>

 Payment Records 

{open === "PaymentRecords" && (

<div className="flex gap-2 mt-2">

<button className="bg-blue-300 px-3 py-1 rounded-full">
Update
</button>

<button className="bg-green-300 px-3 py-1 rounded-full">
View
</button>

</div>

)}

</div>




</div>

{/* Main Section */}

<div className="flex-2 p-2">

{/* Header */}

<div className="flex justify-end items-center gap-7 mb-2">

  {/* Text Section */}
  <div className="text-right">
    <h1 className="text-xl font-bold">
      Apollo Hospital
    </h1>

    <p>Bhopal M.P</p>
    <p>Pin code - 462026</p>
  </div>

  {/* Image */}
  <img 
    src={profile} 
    alt="profile" 
    className="w-16 h-16 object-contain border "
  />

</div>

{/* Graph + Satisfaction */}

<div className="grid grid-cols-4 gap-4 mb-2">

{/* Graph */}

<div className="col-span-3 bg-white p-1 rounded-xl shadow">

<h3 className="font-semibold mb-2">
Patient Trends
</h3>

<img
src={chart}
className="w-100% h -60"
/>

</div>

{/* Satisfaction */}

<div className="bg-white  rounded-xl shadow">

<h3 className="font-semibold mb-3">
Patient Satisfaction
</h3>

<img
src={satisfaction}
className="w-80 h-90"
/>

</div>

</div>

{/* Stats Row */}

<div className="grid grid-cols-4 gap-4 mb-4">

<div className="bg-white p-2 rounded-xl shadow text-center">

<h2 className="text-xl font-bold">
405
</h2>

<p>Total Patients</p>

</div>

<div className="bg-white p-2 rounded-xl shadow text-center">

<h2 className="text-xl font-bold">
₹15.5L
</h2>

<p>Operational Costs</p>

</div>

<div className="bg-white p-5 rounded-xl shadow text-center">

<h2 className="text-2xl font-bold">
18
</h2>

<p>Doctors Available</p>

</div>

<div className="bg-white p-5 rounded-xl shadow text-center">

<h2 className="text-2xl font-bold">
87/112
</h2>

<p>Beds Available</p>

</div>

</div>

{/* Management Cards */}

<div className="grid grid-cols-3 gap-4">

{/* Patient */}

<div className="bg-white p-4 rounded-xl shadow text-center">

<img
src={patient}
className="w-24 mx-auto"
/>

<h3 className="font-semibold">
Patient Management
</h3>

            <div className="flex justify-center gap-2 mt-2">
              
<Link to="/addpatient">
<button className="bg-blue-300 px-3 rounded-full">
Update
</button>
</Link>

<Link to="/viewpatients">
<button className="bg-green-300 px-3 rounded-full">
View
</button>
</Link>

  <Link to="/dashboard/receptionist/bookappointment">
    <button className="w-full bg-[#1A5F48] hover:bg-[#14503D] text-white py-2 rounded-lg">
      Book Appointment
    </button>
  </Link>
</div>

</div>

{/* Doctor */}

<div className="bg-white p-4 rounded-xl shadow text-center">

<img
src={doctor}
className="w-24 mx-auto"
/>

<h3 className="font-semibold">
Doctor Management
</h3>

<div className="flex justify-center gap-2 mt-2">

<button className="bg-blue-300 px-3 rounded-full">
Update
</button>

<button className="bg-green-300 px-3 rounded-full">
View
</button>

</div>

</div>

{/* Diagnosis */}

<div className="bg-white p-4 rounded-xl shadow text-center">

<img
src={diagnosis}
className="w-24 mx-auto"
/>

<h3 className="font-semibold">
Diagnosis Management
</h3>

<div className="flex justify-center gap-2 mt-2">

<button className="bg-blue-300 px-3 rounded-full">
Update
</button>

<button className="bg-green-300 px-3 rounded-full">
View
</button>

</div>

</div>





</div>

</div>
</div>

)
}

 export default Receptionist;
