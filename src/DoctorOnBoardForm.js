// import { useState } from "react"
// import { useLocation } from "react-router-dom"
// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import HNewFooter from "./HNewfooter"
// import Header from './Header';

// const DoctorOnboardForm = () => {
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
//     registrationNumber: "",
//     registrationCouncil: "",
//     registrationYear: "",
//     qualification: "",
//     yearOfCompletion: "",
//     collegeInstitute: "",
//     yearsOfExperience: "",
//     specialty: "",
//     locality: "",
//     additionalNotes: "",
//     establishment: "",
//     city1: "",
//     state1: "",
//     panCard: null,
//     certificates: [],
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

//       const response = await fetch("https://formbackend-n4tm.onrender.com/api/doctors/add", {
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
//           registrationNumber: "",
//           registrationCouncil: "",
//           registrationYear: "",
//           qualification: "",
//           yearOfCompletion: "",
//           collegeInstitute: "",
//           yearsOfExperience: "",
//           specialty: "",
//           locality: "",
//           additionalNotes: "",
//           establishment: "",
//           city1: "",
//           state1: "",
//           panCard: null,
//           certificates: [],
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
//         toast.error(errorData.message || "Error adding doctor. Please try again.")
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

//       const response = await fetch("https://formbackend-n4tm.onrender.com/api/doctors/download", {
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
//       link.download = "doctors.xlsx"
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
//     <Header />
//     <div className="bg-white rounded-xl shadow-md overflow-hidden pt-16 flex justify-center">
//       <div className="p-8 max-w-[1400px]">
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
//           Doctor Onboarding Form
//         </h1>

//         {/* Notes */}
//         <p className="text-center text-gray-600 mb-1">
//           Please fill out all the required information to complete your onboarding process.
//         </p>
//         <p className="text-center text-gray-600 mb-6">All documents uploaded must be clear and legible.</p>

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
//               Address <span className="text-red-500">*</span>
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
//               <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">Medical Registration </span>
//             </div>
//           </div>

//           {/* Registration Information */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 Registration Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="registrationNumber"
//                 placeholder="Registration Number"
//                 value={doctorData.registrationNumber}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 Registration Council <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="registrationCouncil"
//                 placeholder="Registration Council"
//                 value={doctorData.registrationCouncil}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//             <div>
//               <label className="block text-bold font-medium text-gray-700 mb-1">
//                 Registration Year <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="registrationYear"
//                 placeholder="Registration Year"
//                 value={doctorData.registrationYear}
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
//             <div>
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
//             </div>
//           </div>

//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">
//                 Establishment Basic Details
//               </span>
//             </div>
//           </div>

//           {/* Establishment Radio Buttons */}
//           <div>
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
//             </div>

//             {/* City and State Fields */}
//             <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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
//           </div>

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
//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">Document Upload</span>
//             </div>
//           </div>

//           <div className="space-y-4">
//             {/* PAN Card & Dr. License in one row */}
//             <div className="flex flex-col md:flex-row justify-between gap-4">
//               {/* PAN Card Upload */}
//               <div className="w-full md:w-2/5">
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
//               </div>

//               {/* Dr. License Upload */}
//               <div className="w-full md:w-2/5">
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
//               </div>
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

// export default DoctorOnboardForm;




import { useState } from "react"
import { useLocation } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from "./Header"
import HNewFooter from "./HNewfooter"

const DoctorOnboardForm = () => {
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
    registrationNumber: "",
    registrationCouncil: "",
    registrationYear: "",
    qualification: "",
    yearOfCompletion: "",
    collegeInstitute: "",
    yearsOfExperience: "",
    specialty: "",
    locality: "",
    additionalNotes: "",
    establishment: "",
    city1: "",
    state1: "",
    panCard: null,
    certificates: [],
  })

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const isAdmin = searchParams.get("admin") === "true"

  const formSections = [
    { title: "Personal Information", icon: "user" },
    { title: "Professional Details", icon: "stethoscope" },
    { title: "Documents", icon: "file-text" },
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

      const response = await fetch("https://formbackend-n4tm.onrender.com/api/doctors/add", {
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
          registrationNumber: "",
          registrationCouncil: "",
          registrationYear: "",
          qualification: "",
          yearOfCompletion: "",
          collegeInstitute: "",
          yearsOfExperience: "",
          specialty: "",
          locality: "",
          additionalNotes: "",
          establishment: "",
          city1: "",
          state1: "",
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
        toast.error(errorData.message || "Error adding doctor. Please try again.")
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

      const response = await fetch("https://formbackend-n4tm.onrender.com/api/doctors/download", {
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
      link.download = "doctors.xlsx"
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

  // Function to render icon
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "user":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        )
      case "stethoscope":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
            <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
            <circle cx="20" cy="10" r="2"></circle>
          </svg>
        )
      case "file-text":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <line x1="10" y1="9" x2="8" y2="9"></line>
          </svg>
        )
      case "check":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        )
      case "mail":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        )
      case "phone":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        )
      case "map-pin":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        )
      case "calendar":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        )
      case "award":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        )
      case "building":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <path d="M9 22v-4h6v4"></path>
            <path d="M8 6h.01"></path>
            <path d="M16 6h.01"></path>
            <path d="M12 6h.01"></path>
            <path d="M12 10h.01"></path>
            <path d="M12 14h.01"></path>
            <path d="M16 10h.01"></path>
            <path d="M16 14h.01"></path>
            <path d="M8 10h.01"></path>
            <path d="M8 14h.01"></path>
          </svg>
        )
      case "chevron-right":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        )
      case "upload":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen pt-16 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className=" overflow-hidden opacity-0 translate-y-4"
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
                  {renderIcon("check")}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for registering with us. We'll review your information and get back to you soon.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Register Another Doctor
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
                  <h1 className="font-bold text-[#233f8f] text-3xl sm:text-4xl mb-2">Doctor Onboarding Form</h1>
                  <p className="text-gray-600 mb-1 max-w-2xl mx-auto">
                    Please fill out all the required information to complete your onboarding process.
                  </p>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    All documents uploaded must be clear and legible.
                  </p>
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
                          {index < activeSection ? renderIcon("check") : renderIcon(section.icon)}
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
                            <span className="mr-2">{renderIcon("user")}</span>
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
                              <span className="mr-2">{renderIcon("mail")}</span>
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
                              <span className="mr-2">{renderIcon("phone")}</span>
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
                            <span className="mr-2">{renderIcon("map-pin")}</span>
                            Address <span className="text-red-500 ml-1">*</span>
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
                              <span className="mr-2">{renderIcon("map-pin")}</span>
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
                              <span className="mr-2">{renderIcon("map-pin")}</span>
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
                              <span className="mr-2">{renderIcon("map-pin")}</span>
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
                            <span className="ml-2">{renderIcon("chevron-right")}</span>
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
                              Professional Information
                            </span>
                          </div>
                        </div>

                        {/* Registration Information */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <span className="mr-2">{renderIcon("file-text")}</span>
                              Registration Number <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="registrationNumber"
                                placeholder="Registration Number"
                                value={doctorData.registrationNumber}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <span className="mr-2">{renderIcon("award")}</span>
                              Registration Council <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="registrationCouncil"
                                placeholder="Registration Council"
                                value={doctorData.registrationCouncil}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <span className="mr-2">{renderIcon("calendar")}</span>
                              Registration Year <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="registrationYear"
                                placeholder="Registration Year"
                                value={doctorData.registrationYear}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                        </div>

                        {/* Education */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <span className="mr-2">{renderIcon("award")}</span>
                              Qualification <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="qualification"
                                placeholder="Qualification"
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
                              <span className="mr-2">{renderIcon("calendar")}</span>
                              Year of Completion <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="yearOfCompletion"
                                placeholder="Year of Completion"
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
                              <span className="mr-2">{renderIcon("building")}</span>
                              College/Institute <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="collegeInstitute"
                                placeholder="College/Institute"
                                value={doctorData.collegeInstitute}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                        </div>

                        {/* Professional Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <span className="mr-2">{renderIcon("calendar")}</span>
                              Years of Experience <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="yearsOfExperience"
                                placeholder="Years of Experience"
                                value={doctorData.yearsOfExperience}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <span className="mr-2">{renderIcon("stethoscope")}</span>
                              Speciality <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="specialty"
                                placeholder="Specialty"
                                value={doctorData.specialty}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                        </div>

                        {/* Establishment Details */}
                        <div className="mb-6">
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <span className="mr-2">{renderIcon("building")}</span>
                            Establishment <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="space-y-2 flex flex-col">
                            <label className="flex items-center p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                              <input
                                type="radio"
                                name="establishment"
                                value="I own an establishment"
                                checked={doctorData.establishment === "I own an establishment"}
                                required
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="ml-2">I own an establishment</span>
                            </label>

                            <label className="flex items-center p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                              <input
                                type="radio"
                                name="establishment"
                                value="I visit an establishment"
                                checked={doctorData.establishment === "I visit an establishment"}
                                onChange={handleChange}
                                required
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="ml-2">I visit an establishment</span>
                            </label>
                          </div>

                          {/* City and State Fields */}
                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block font-medium text-gray-700 mb-2 flex items-center">
                                <span className="mr-2">{renderIcon("map-pin")}</span>
                                City <span className="text-red-500 ml-1">*</span>
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  name="city1"
                                  placeholder="Enter City"
                                  value={doctorData.city1}
                                  onChange={handleChange}
                                  required
                                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                              </div>
                            </div>

                            <div>
                              <label className="block font-medium text-gray-700 mb-2 flex items-center">
                                <span className="mr-2">{renderIcon("map-pin")}</span>
                                State <span className="text-red-500 ml-1">*</span>
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  name="state1"
                                  placeholder="Enter State"
                                  value={doctorData.state1}
                                  onChange={handleChange}
                                  required
                                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                              </div>
                            </div>
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
                            <span className="ml-2">{renderIcon("chevron-right")}</span>
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
                            <span className="px-4 text-xl bg-white text-gray-900 font-semibold">Document Upload</span>
                          </div>
                        </div>

                        {/* Additional Notes */}
                        <div className="mb-6">
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <span className="mr-2">{renderIcon("file-text")}</span>
                            Additional Notes
                          </label>
                          <div className="relative">
                            <textarea
                              name="additionalNotes"
                              placeholder="Any additional information you'd like to share"
                              value={doctorData.additionalNotes}
                              onChange={handleChange}
                              rows={3}
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out resize-none"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {/* PAN Card & Dr. License in one row */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* PAN Card Upload */}
                            <div>
                              <label className="block font-medium text-gray-700 mb-2 flex items-center">
                                <span className="mr-2">{renderIcon("file-text")}</span>
                                PAN Card <span className="text-red-500 ml-1">*</span>
                              </label>
                              {fileErrors.panCard && <p className="text-sm text-red-500 mb-2">{fileErrors.panCard}</p>}
                              <div
                                className="h-52 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors p-4"
                                onClick={() => document.getElementById("panUpload").click()}
                              >
                                <input
                                  type="file"
                                  name="panCard"
                                  accept="image/*"
                                  onChange={handleFileChange}
                                  required={!doctorData.panCard}
                                  className="hidden"
                                  id="panUpload"
                                />
                                <div className="text-center">
                                  <span className="mx-auto flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 mb-3">
                                    {renderIcon("upload")}
                                  </span>
                                  <p className="text-sm font-medium text-gray-900">Click to upload</p>
                                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                                </div>
                              </div>
                              {doctorData.panCard && (
                                <div className="mt-2 flex items-center justify-between p-2 bg-blue-50 rounded-md">
                                  <p className="text-sm text-gray-700">{doctorData.panCard.name}</p>
                                  <button
                                    type="button"
                                    onClick={removePanCard}
                                    className="text-red-500 text-sm hover:text-red-700 hover:scale-105 active:scale-95 transition-transform"
                                  >
                                    Remove
                                  </button>
                                </div>
                              )}
                            </div>

                            {/* Dr. License Upload */}
                            <div>
                              <label className="block font-medium text-gray-700 mb-2 flex items-center">
                                <span className="mr-2">{renderIcon("file-text")}</span>
                                Doctor's License <span className="text-red-500 ml-1">*</span>
                              </label>
                              {fileErrors.certificates && (
                                <p className="text-sm text-red-500 mb-2">{fileErrors.certificates}</p>
                              )}
                              <div
                                className="h-52 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors p-4"
                                onClick={() => document.getElementById("certificatesUpload").click()}
                              >
                                <input
                                  type="file"
                                  name="certificates"
                                  accept=".pdf,.jpg,.png"
                                  multiple
                                  onChange={handleFileChange}
                                  required={doctorData.certificates.length === 0}
                                  className="hidden"
                                  id="certificatesUpload"
                                />
                                <div className="text-center">
                                  <span className="mx-auto flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 mb-3">
                                    {renderIcon("upload")}
                                  </span>
                                  <p className="text-sm font-medium text-gray-900">Click to upload</p>
                                  <p className="text-xs text-gray-500 mt-1">PDF, PNG, JPG up to 5MB</p>
                                </div>
                              </div>
                              {doctorData.certificates && doctorData.certificates.length > 0 && (
                                <div className="mt-2 bg-blue-50 rounded-md p-2">
                                  <p className="text-sm font-medium text-gray-700 mb-1">Uploaded files:</p>
                                  <ul className="text-sm text-gray-600 space-y-1">
                                    {Array.from(doctorData.certificates).map((file, index) => (
                                      <li key={index} className="flex items-center justify-between">
                                        <span className="truncate max-w-[200px]">{file.name}</span>
                                        <button
                                          type="button"
                                          onClick={() => removeCertificate(index)}
                                          className="text-red-500 text-sm hover:text-red-700 hover:scale-105 active:scale-95 transition-transform"
                                        >
                                          Remove
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
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
                                <span className="ml-2">{renderIcon("check")}</span>
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
        
        .hover\:scale-102:hover {
          transform: scale(1.02);
          transition: transform 0.2s ease;
        }
        
        .active\:scale-98:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
      `}</style>
      <ToastContainer position="top-right" autoClose={5000} />
      <HNewFooter />
    </>
  )
}

export default DoctorOnboardForm


