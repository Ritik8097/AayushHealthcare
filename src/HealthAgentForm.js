// import { useState } from "react"
// import { useLocation } from "react-router-dom"
// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import Header from './Header';

// import HNewFooter from "./HNewfooter";

// const FranchiseOnBoardForm = () => {
//   const [loading, setLoading] = useState(false)
//   const [downloadLoading, setDownloadLoading] = useState(false)
//   const [fileErrors, setFileErrors] = useState({
//     panCard: "",
//     certificates: "",
//   })
//   const [doctorData, setDoctorData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     occupation: "",
//     workexp: "",
//     Organizations: "",
//     qualification: "",
//     yearOfCompletion: "",
//     collegeInstitute: "",
//     yearsOfExperience: "",    
//     additionalNotes: "",
    
//   })

//   const location = useLocation()
//   const searchParams = new URLSearchParams(location.search)
//   const isAdmin = searchParams.get("admin") === "true"

//   const handleChange = (e) => {
//     setDoctorData({ ...doctorData, [e.target.name]: e.target.value })
//   }

//   const validateFileSize = (file, maxSize = 5 * 1024 * 1024) => {
//     return file.size <= maxSize
//   }

//   const handleFileChange = (e) => {
//     const { name, files } = e.target

//     if (name === "certificates") {
//       // Check each certificate file size
//       const validFiles = []
//       let hasError = false

//       for (let i = 0; i < files.length; i++) {
//         if (!validateFileSize(files[i])) {
//           setFileErrors((prev) => ({
//             ...prev,
//             certificates: `File "${files[i].name}" exceeds 5MB limit`,
//           }))
//           hasError = true
//           break
//         }
//         validFiles.push(files[i])
//       }

//       if (!hasError) {
//         setFileErrors((prev) => ({ ...prev, certificates: "" }))
//         setDoctorData((prev) => ({
//           ...prev,
//           certificates: [...prev.certificates, ...validFiles],
//         }))
//       }
//     } else if (name === "panCard") {
//       const file = files[0]

//       if (file && !validateFileSize(file)) {
//         setFileErrors((prev) => ({
//           ...prev,
//           panCard: "PAN Card file exceeds 5MB limit",
//         }))
//         e.target.value = "" // Reset the input
//       } else {
//         setFileErrors((prev) => ({ ...prev, panCard: "" }))
//         setDoctorData({ ...doctorData, [name]: file })
//       }
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     // Prevent multiple submissions
//     if (loading) return

//     // Final validation check
//     if (fileErrors.panCard || fileErrors.certificates) {
//       toast.error("Please fix file size issues before submitting")
//       return
//     }

//     setLoading(true)

//     const formData = new FormData()

//     Object.keys(doctorData).forEach((key) => {
//       if (key === "certificates") {
//         doctorData.certificates.forEach((file) => formData.append("certificates", file))
//       } else {
//         formData.append(key, doctorData[key])
//       }
//     })

//     try {
//       // Set timeout for the request
//       const controller = new AbortController()
//       const timeoutId = setTimeout(() => controller.abort(), 60000) // 60 second timeout

//       const response = await fetch("https://formbackend-n4tm.onrender.com/api/healthagent/add", {
//         method: "POST",
//         body: formData,
     
//       })

//       clearTimeout(timeoutId)

//       if (response.ok) {
//         toast.success("Form submitted successfully!")
//         // Reset form
//         setDoctorData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           address: "",
//           city: "",
//           state: "",
//           postalCode: "",
//           occupation: "",
//           workexp: "",
//           Organizations: "",
//           qualification: "",
//           yearOfCompletion: "",
//           collegeInstitute: "",
//           yearsOfExperience: "",          
//           additionalNotes: "",                
//         })

//         // Reset file input fields
//         if (document.getElementById("panUpload")) {
//           document.getElementById("panUpload").value = ""
//         }
//         if (document.getElementById("certificatesUpload")) {
//           document.getElementById("certificatesUpload").value = ""
//         }
//       } else {
//         const errorData = await response.json().catch(() => ({}))
//         toast.error(errorData.message || "Error adding Please try again.")
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error)
//       if (error.name === "AbortError") {
//         toast.error("Request timed out. Please check your internet connection and try again.")
//       } else {
//         toast.error("Error submitting form. Please try again.")
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleDownload = async () => {
//     if (downloadLoading) return

//     setDownloadLoading(true)

//     try {
//       // Set timeout for the request
//       const controller = new AbortController()
//       const timeoutId = setTimeout(() => controller.abort(), 60000) // 60 second timeout

//       const response = await fetch("https://formbackend-n4tm.onrender.com/api/healthagent/download", {
//         signal: controller.signal,
//       })

//       clearTimeout(timeoutId)

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}))
//         throw new Error(errorData.message || "Failed to download file")
//       }

//       const blob = await response.blob()
//       const link = document.createElement("a")
//       link.href = URL.createObjectURL(blob)
//       link.download = "HealthAgent.xlsx"
//       document.body.appendChild(link)
//       link.click()
//       document.body.removeChild(link)

//       toast.success("File downloaded successfully")
//     } catch (error) {
//       console.error("Error downloading file:", error)
//       if (error.name === "AbortError") {
//         toast.error("Download timed out. Please check your internet connection and try again.")
//       } else {
//         toast.error(`Error downloading file: ${error.message}`)
//       }
//     } finally {
//       setDownloadLoading(false)
//     }
//   }

//   // Function to remove a certificate file
//   const removeCertificate = (index) => {
//     setDoctorData((prev) => ({
//       ...prev,
//       certificates: prev.certificates.filter((_, i) => i !== index),
//     }))
//   }

//   // Function to remove PAN card
//   const removePanCard = () => {
//     setDoctorData((prev) => ({
//       ...prev,
//       panCard: null,
//     }))
//     if (document.getElementById("panUpload")) {
//       document.getElementById("panUpload").value = ""
//     }
//   }

//   return (
//     <>
//    <Header />
//    <div className="bg-white rounded-xl shadow-md overflow-hidden pt-16 flex justify-center">
//    <div className="p-8 max-w-[1400px]">
//         {/* Company Logo */}
//         <div className="flex justify-center mb-6">
//           <img
//             src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/png_footer_aw_1.png?v=1739967055"
//             alt="Company Logo"
//             className="h-20 object-contain"
//           />
//         </div>

//         {/* Form Title */}
//         <h1 className="font-bold text-center text-[#233f8f] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] mb-2">
//         Healthcare Health Agent Form
//         </h1>

//         {/* Notes */}
//         <p className="text-center text-gray-600 mb-1">
//         Become a trusted health representative in your community and start your journey with us.
//         </p>
//         <p className="text-center text-gray-600 mb-6">We're excited to have you on board</p>

//         {/* Divider */}
//         <div className="relative my-6">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">Personal Information</span>
//           </div>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
//           {/* Full Name Section */}
//           <div>
//             <label className="block text-bold font-medium text-gray-700 mb-1">
//               Full Name <span className="text-red-500">*</span>
//             </label>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   value={doctorData.firstName}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   value={doctorData.lastName}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={doctorData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 Phone <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={doctorData.phone}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block text-bold font-medium text-gray-700 mb-1">
//              Residential Address <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="address"
//               placeholder="Street Address"
//               value={doctorData.address}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//             />
//           </div>

//           {/* City, State, Postal Code */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 City <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 value={doctorData.city}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 State <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="state"
//                 placeholder="State"
//                 value={doctorData.state}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 Postal/ zip Code <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="postalCode"
//                 placeholder="Postal Code"
//                 value={doctorData.postalCode}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//           </div>

//           {/* Divider for Professional Information */}
//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 text-xl bg-white text-red text-bold text-gray-900"> Professional Details</span>
//             </div>
//           </div>

//           {/* Registration Information */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//               Current Occupation: <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="occupation"
//                 placeholder="Enter your occupation"
//                 value={doctorData.occupation}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//               Work Experience in Healthcare (if any): <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="workexp"
//                 placeholder="mention here"
//                 value={doctorData.workexp}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//               Previous/Current Affiliation with Healthcare Organizations <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="Organizations"
//                 placeholder="organization"
//                 value={doctorData.Organizations}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//           </div>

//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">Education Details</span>
//             </div>
//           </div>

//           {/* Education */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 Qualification <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="qualification"
//                 placeholder="Qualification"
//                 value={doctorData.qualification}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 Year of Completion <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="yearOfCompletion"
//                 placeholder="Year of Completion"
//                 value={doctorData.yearOfCompletion}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 College/Institute <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="collegeInstitute"
//                 placeholder="College/Institute"
//                 value={doctorData.collegeInstitute}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//           </div>

//           {/* Professional Details */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 Years of Experience <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="yearsOfExperience"
//                 placeholder="Years of Experience"
//                 value={doctorData.yearsOfExperience}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//             {/* <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 Speciality <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="specialty"
//                 placeholder="Specialty"
//                 value={doctorData.specialty}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div> */}
//           </div>

//           {/* <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">
//                 Establishment Basic Details
//               </span>
//             </div>
//           </div> */}

//           {/* Establishment Radio Buttons */}
//           {/* <div>
//             <label className="block font-medium text-gray-700 mb-2">
//               Establishment: <span className="text-red-500">*</span>
//             </label>
//             <div className="space-y-2 flex flex-col">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="establishment"
//                   value="I own an establishment"
//                   checked={doctorData.establishment === "I own an establishment"}
//                   required
//                   onChange={handleChange}
//                   className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 appearance-none rounded-full border-2 checked:bg-blue-600 checked:border-transparent"
//                 />
//                 <span className="ml-2">I own an establishment</span>
//               </label>

//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="establishment"
//                   value="I visit an establishment"
//                   checked={doctorData.establishment === "I visit an establishment"}
//                   onChange={handleChange}
//                   required
//                   className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 appearance-none rounded-full border-2 checked:bg-blue-600 checked:border-transparent"
//                 />
//                 <span className="ml-2">I visit an establishment</span>
//               </label>
//             </div> */}

//             {/* City and State Fields */}
//             {/* <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block font-medium text-gray-700 mb-1">
//                   City <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="city1"
//                   placeholder="Enter City"
//                   value={doctorData.city1}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                 />
//               </div>

//               <div>
//                 <label className="block font-medium text-gray-700 mb-1">
//                   State <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="state1"
//                   placeholder="Enter State"
//                   value={doctorData.state1}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                 />
//               </div>
//             </div>
//           </div> */}

//           {/* Additional Notes */}
//           <div className="mt-4">
//             <label className="block font-medium text-gray-700 mb-1">Additional Notes </label>
//             <textarea
//               name="additionalNotes"
//               placeholder="Additional Notes"
//               value={doctorData.additionalNotes}
//               onChange={handleChange}
//               rows={3}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//             />
//           </div>

//           {/* Document Uploads */}
//           {/* <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">Document Upload</span>
//             </div>
//           </div> */}

//           <div className="space-y-4">
//             {/* PAN Card & Dr. License in one row */}
//             <div className="flex flex-col md:flex-row justify-between gap-4">
//               {/* PAN Card Upload */}
//               {/* <div className="w-full md:w-2/5">
//                 <label className="block font-medium text-gray-700 mb-2">
//                   PAN Card: <span className="text-red-500">*</span>
//                 </label>
//                 {fileErrors.panCard && <p className="text-sm text-red-500 mb-1">{fileErrors.panCard}</p>}
//                 <div
//                   className="h-52 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer"
//                   onClick={() => document.getElementById("panUpload").click()}
//                 >
//                   <input
//                     type="file"
//                     name="panCard"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                     required={!doctorData.panCard}
//                     className="hidden"
//                     id="panUpload"
//                   />
//                   <span className="text-sm text-gray-600 text-center">
//                     <span className="font-semibold text-primary-600">Browse File</span>
//                   </span>
//                 </div>
//                 {doctorData.panCard && (
//                   <div className="mt-2 flex items-center justify-between">
//                     <p className="text-sm text-gray-500">{doctorData.panCard.name}</p>
//                     <button type="button" onClick={removePanCard} className="text-red-500 text-sm hover:text-red-700">
//                       Remove
//                     </button>
//                   </div>
//                 )}
//               </div> */}

//               {/* Dr. License Upload */}
//               {/* <div className="w-full md:w-2/5">
//                 <label className="block font-medium text-gray-700 mb-2">
//                   Doctor's Licence <span className="text-red-500">*</span>
//                 </label>
//                 {fileErrors.certificates && <p className="text-sm text-red-500 mb-1">{fileErrors.certificates}</p>}
//                 <div
//                   className="h-52 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer"
//                   onClick={() => document.getElementById("certificatesUpload").click()}
//                 >
//                   <input
//                     type="file"
//                     name="certificates"
//                     accept=".pdf,.jpg,.png"
//                     multiple
//                     onChange={handleFileChange}
//                     required={doctorData.certificates.length === 0}
//                     className="hidden"
//                     id="certificatesUpload"
//                   />
//                   <span className="text-sm text-gray-600 text-center">
//                     <span className="font-semibold text-primary-600">Browse Files</span>
//                   </span>
//                 </div>
//                 {doctorData.certificates && doctorData.certificates.length > 0 && (
//                   <ul className="mt-2 text-sm text-gray-500">
//                     {Array.from(doctorData.certificates).map((file, index) => (
//                       <li key={index} className="flex items-center justify-between">
//                         <span>{file.name}</span>
//                         <button
//                           type="button"
//                           onClick={() => removeCertificate(index)}
//                           className="text-red-500 text-sm hover:text-red-700"
//                         >
//                           Remove
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div> */}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center pt-4">
//             <ToastContainer />
//             <button
//               type="submit"
//               disabled={loading} // Disable button while loading
//               className={`px-6 py-3 font-medium rounded-md shadow-sm transition-colors ${
//                 loading
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               }`}
//             >
//               {loading ? (
//                 <div className="flex items-center">
//                   <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                       fill="none"
//                     />
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0" />
//                   </svg>
//                   Submitting...
//                 </div>
//               ) : (
//                 "Submit"
//               )}
//             </button>
//           </div>
//           {isAdmin && (
//             <div className="mt-6 flex justify-center">
//               <button
//                 type="button"
//                 onClick={handleDownload}
//                 disabled={downloadLoading}
//                 className={`px-6 py-3 font-medium rounded-md shadow-sm transition-colors ${
//                   downloadLoading
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                 }`}
//               >
//                 {downloadLoading ? (
//                   <div className="flex items-center">
//                     <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                         fill="none"
//                       />
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0" />
//                     </svg>
//                     Downloading...
//                   </div>
//                 ) : (
//                   "Download Excel"
//                 )}
//               </button>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//     <HNewFooter />
//     </>
//   )
// }

// export default FranchiseOnBoardForm;



import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Check,
  ChevronRight,
  Building,
  Calendar,
  Award,
  BookOpen,
  Briefcase,
} from "lucide-react"
import Header from './Header';
import HNewFooter from "./HNewfooter";

export default function HealthAgentForm() {
  const [loading, setLoading] = useState(false)
  const [downloadLoading, setDownloadLoading] = useState(false)
  const [fileErrors, setFileErrors] = useState({
    panCard: "",
    certificates: "",
  })
  const [activeSection, setActiveSection] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [doctorData, setDoctorData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    occupation: "",
    workexp: "",
    Organizations: "",
    qualification: "",
    yearOfCompletion: "",
    collegeInstitute: "",
    yearsOfExperience: "",
    additionalNotes: "",
    panCard: null,
    certificates: [],
  })

  // For admin access via URL parameter
  const isAdmin = false // In a real app, you'd get this from URL params or auth state

  const formSections = [
    { title: "Personal Information", icon: "user" },
    { title: "Professional Details", icon: "briefcase" },
    { title: "Education Details", icon: "book" },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setDoctorData((prev) => ({ ...prev, [name]: value }))

    // Add subtle animation to the input field
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      e.target.classList.add("scale-input")
      setTimeout(() => {
        e.target.classList.remove("scale-input")
      }, 200)
    }
  }

  const validateFileSize = (file, maxSize = 5 * 1024 * 1024) => {
    return file.size <= maxSize
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target

    if (name === "certificates") {
      // Check each certificate file size
      const validFiles = []
      let hasError = false

      for (let i = 0; i < files.length; i++) {
        if (!validateFileSize(files[i])) {
          setFileErrors((prev) => ({
            ...prev,
            certificates: `File "${files[i].name}" exceeds 5MB limit`,
          }))
          hasError = true
          break
        }
        validFiles.push(files[i])
      }

      if (!hasError) {
        setFileErrors((prev) => ({ ...prev, certificates: "" }))
        setDoctorData((prev) => ({
          ...prev,
          certificates: [...prev.certificates, ...validFiles],
        }))
      }
    } else if (name === "panCard") {
      const file = files[0]

      if (file && !validateFileSize(file)) {
        setFileErrors((prev) => ({
          ...prev,
          panCard: "PAN Card file exceeds 5MB limit",
        }))
        e.target.value = "" // Reset the input
      } else {
        setFileErrors((prev) => ({ ...prev, panCard: "" }))
        setDoctorData({ ...doctorData, [name]: file })
      }
    }
  }

  const nextSection = () => {
    if (activeSection < formSections.length - 1) {
      setActiveSection((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevSection = () => {
    if (activeSection > 0) {
      setActiveSection((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Prevent multiple submissions
    if (loading) return

    // Final validation check
    if (fileErrors.panCard || fileErrors.certificates) {
      toast.error("Please fix file size issues before submitting")
      return
    }

    setLoading(true)

    const formData = new FormData()

    Object.keys(doctorData).forEach((key) => {
      if (key === "certificates") {
        doctorData.certificates.forEach((file) => formData.append("certificates", file))
      } else if (doctorData[key] !== undefined && doctorData[key] !== null) {
        formData.append(key, doctorData[key])
      }
    })

    try {
      // Set timeout for the request
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 60000) // 60 second timeout

      const response = await fetch("https://formbackend-n4tm.onrender.com/api/healthagent/add", {
        method: "POST",
        body: formData,
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        setFormSubmitted(true)
        toast.success("Form submitted successfully!")
        // Reset form
        setDoctorData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          postalCode: "",
          occupation: "",
          workexp: "",
          Organizations: "",
          qualification: "",
          yearOfCompletion: "",
          collegeInstitute: "",
          yearsOfExperience: "",
          additionalNotes: "",
          panCard: null,
          certificates: [],
        })

        // Reset file input fields
        if (document.getElementById("panUpload")) {
          document.getElementById("panUpload").value = ""
        }
        if (document.getElementById("certificatesUpload")) {
          document.getElementById("certificatesUpload").value = ""
        }
      } else {
        const errorData = await response.json().catch(() => ({}))
        toast.error(errorData.message || "Error submitting form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      if (error.name === "AbortError") {
        toast.error("Request timed out. Please check your internet connection and try again.")
      } else {
        toast.error("Error submitting form. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    if (downloadLoading) return

    setDownloadLoading(true)

    try {
      // Set timeout for the request
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 60000) // 60 second timeout

      const response = await fetch("https://formbackend-n4tm.onrender.com/api/healthagent/download", {
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || "Failed to download file")
      }

      const blob = await response.blob()
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = "HealthAgent.xlsx"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast.success("File downloaded successfully")
    } catch (error) {
      console.error("Error downloading file:", error)
      if (error.name === "AbortError") {
        toast.error("Download timed out. Please check your internet connection and try again.")
      } else {
        toast.error(`Error downloading file: ${error.message}`)
      }
    } finally {
      setDownloadLoading(false)
    }
  }

  // Function to remove a certificate file
  const removeCertificate = (index) => {
    setDoctorData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter((_, i) => i !== index),
    }))
  }

  // Function to remove PAN card
  const removePanCard = () => {
    setDoctorData((prev) => ({
      ...prev,
      panCard: null,
    }))
    if (document.getElementById("panUpload")) {
      document.getElementById("panUpload").value = ""
    }
  }

  return (
    <>
    <Header />
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen pt-16 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden opacity-0 translate-y-4"
          style={{
            animation: "fadeInUp 0.5s ease forwards",
          }}
        >
          {formSubmitted ? (
            <div className="p-8 text-center">
              <div
                className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 scale-0"
                style={{
                  animation: "scaleIn 0.5s ease forwards 0.2s",
                }}
              >
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
              <p className="text-gray-600 mb-8">
                Thank you for your interest in becoming a Health Agent. We'll review your information and get back to
                you soon.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <>
              {/* Company Logo */}
              <div className="flex justify-center pt-8">
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/png_footer_aw_1.png?v=1739967055"
                  alt="Company Logo"
                  className="h-20 object-contain opacity-0"
                  style={{
                    animation: "fadeIn 0.5s ease forwards 0.2s",
                  }}
                />
              </div>

              {/* Form Title */}
              <div
                className="text-center px-6 pt-4 opacity-0"
                style={{
                  animation: "fadeIn 0.5s ease forwards 0.3s",
                }}
              >
                <h1 className="font-bold text-[#233f8f] text-3xl sm:text-4xl mb-2">Healthcare Health Agent Form</h1>
                <p className="text-gray-600 mb-1 max-w-2xl mx-auto">
                  Become a trusted health representative in your community and start your journey with us.
                </p>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">We're excited to have you on board</p>
              </div>

              {/* Progress Steps */}
              <div className="px-8 py-4">
                <div className="flex items-center justify-center mb-8">
                  {formSections.map((section, index) => (
                    <div key={index} className="flex items-center">
                      <button
                        onClick={() => setActiveSection(index)}
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${
                          index <= activeSection ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                        } transition-colors duration-300 hover:scale-105 active:scale-95`}
                      >
                        {index < activeSection ? (
                          <Check className="h-5 w-5" />
                        ) : section.icon === "user" ? (
                          <User className="h-5 w-5" />
                        ) : section.icon === "briefcase" ? (
                          <Briefcase className="h-5 w-5" />
                        ) : (
                          <BookOpen className="h-5 w-5" />
                        )}
                      </button>
                      <div className="text-sm font-medium ml-2 hidden sm:block">{section.title}</div>
                      {index < formSections.length - 1 && (
                        <div
                          className={`w-12 sm:w-16 h-1 mx-2 ${
                            index < activeSection ? "bg-blue-600" : "bg-gray-200"
                          } transition-colors duration-300`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
                  {activeSection === 0 && (
                    <div
                      className="opacity-0 translate-x-4"
                      style={{
                        animation: "slideInRight 0.3s ease forwards",
                      }}
                    >
                      <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-4 text-xl bg-white text-gray-900 font-semibold">
                            Personal Information
                          </span>
                        </div>
                      </div>

                      {/* Full Name Section */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Full Name <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative">
                            <input
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={doctorData.firstName}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={doctorData.lastName}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            Email <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              value={doctorData.email}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>
                        <div>
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            Phone <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone Number"
                              value={doctorData.phone}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          Residential Address <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="address"
                            placeholder="Street Address"
                            value={doctorData.address}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                        </div>
                      </div>

                      {/* City, State, Postal Code */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div>
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            City <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="city"
                              placeholder="City"
                              value={doctorData.city}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>
                        <div>
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            State <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="state"
                              placeholder="State"
                              value={doctorData.state}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>
                        <div>
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            Postal Code <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="postalCode"
                              placeholder="Postal Code"
                              value={doctorData.postalCode}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end mt-8">
                        <button
                          type="button"
                          onClick={nextSection}
                          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center hover:scale-102 active:scale-98"
                        >
                          Next Step
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSection === 1 && (
                    <div
                      className="opacity-0 translate-x-4"
                      style={{
                        animation: "slideInRight 0.3s ease forwards",
                      }}
                    >
                      <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-4 text-xl bg-white text-gray-900 font-semibold">
                            Professional Details
                          </span>
                        </div>
                      </div>

                      {/* Current Occupation */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Current Occupation <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="occupation"
                            placeholder="Enter your current occupation"
                            value={doctorData.occupation}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                        </div>
                      </div>

                      {/* Work Experience */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Work Experience in Healthcare (if any) <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="workexp"
                            placeholder="Describe your healthcare experience"
                            value={doctorData.workexp}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                        </div>
                      </div>

                      {/* Healthcare Organizations */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          Previous/Current Affiliation with Healthcare Organizations{" "}
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="Organizations"
                            placeholder="List organizations you've worked with"
                            value={doctorData.Organizations}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                        </div>
                      </div>

                      {/* Years of Experience */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Years of Experience <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="yearsOfExperience"
                            placeholder="Total years of professional experience"
                            value={doctorData.yearsOfExperience}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={prevSection}
                          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors hover:scale-102 active:scale-98"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={nextSection}
                          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center hover:scale-102 active:scale-98"
                        >
                          Next Step
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSection === 2 && (
                    <div
                      className="opacity-0 translate-x-4"
                      style={{
                        animation: "slideInRight 0.3s ease forwards",
                      }}
                    >
                      <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-4 text-xl bg-white text-gray-900 font-semibold">Education Details</span>
                        </div>
                      </div>

                      {/* Education */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div>
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <Award className="h-4 w-4 mr-2" />
                            Qualification <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="qualification"
                              placeholder="Highest qualification"
                              value={doctorData.qualification}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>
                        <div>
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            Year of Completion <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="yearOfCompletion"
                              placeholder="Year of completion"
                              value={doctorData.yearOfCompletion}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>
                        <div>
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <Building className="h-4 w-4 mr-2" />
                            College/Institute <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="collegeInstitute"
                              placeholder="Name of institution"
                              value={doctorData.collegeInstitute}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>
                      </div>

                      {/* Additional Notes */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Additional Notes
                        </label>
                        <div className="relative">
                          <textarea
                            name="additionalNotes"
                            placeholder="Any additional information you'd like to share"
                            value={doctorData.additionalNotes}
                            onChange={handleChange}
                            rows={4}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out resize-none"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={prevSection}
                          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors hover:scale-102 active:scale-98"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className={`px-6 py-3 font-medium rounded-md shadow-sm transition-colors flex items-center hover:scale-102 active:scale-98 ${
                            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
                          }`}
                        >
                          {loading ? (
                            <div className="flex items-center">
                              <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  fill="none"
                                />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0" />
                              </svg>
                              Submitting...
                            </div>
                          ) : (
                            <>
                              Submit
                              <Check className="h-4 w-4 ml-2" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {isAdmin && (
                    <div className="mt-6 flex justify-center">
                      <button
                        type="button"
                        onClick={handleDownload}
                        disabled={downloadLoading}
                        className={`px-6 py-3 font-medium rounded-md shadow-sm transition-colors hover:scale-102 active:scale-98 ${
                          downloadLoading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700 text-white"
                        }`}
                      >
                        {downloadLoading ? (
                          <div className="flex items-center">
                            <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0" />
                            </svg>
                            Downloading...
                          </div>
                        ) : (
                          "Download Excel"
                        )}
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0;
            transform: translateX(20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        
        .scale-input {
          transform: scale(1.01);
          transition: transform 0.2s ease;
        }
        
        input:focus ~ .input-focus-line,
        textarea:focus ~ .input-focus-line,
        select:focus ~ .input-focus-line {
          width: 100%;
          transition: width 0.3s ease;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
          transition: transform 0.2s ease;
        }
        
        .active\\:scale-98:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
      `}</style>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
    <HNewFooter />
    </>
  )
}






