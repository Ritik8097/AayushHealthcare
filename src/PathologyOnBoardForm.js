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
  Globe,
  Briefcase,
  UserCircle,
} from "lucide-react"
import HNewFooter from "./HNewfooter"
import Header from './Header';
import { Helmet } from "react-helmet"



<Helmet>
  <title>Pathology Onboarding | Healthcare</title>
  <meta name="description" content="Join Aayush Healthcare as a healthcare franchise partner. Fill out the onboarding form to become a part of our medical network." />
  <meta name="keywords" content="view medical records online,patient health portal,hospital appointment booking,virtual health consultation,health checkup packages,Heatlhcare Sevices, Health,Pathology,franchise,Earning Potential, hospital onboarding, health franchise, join hospital network, healthcare partner,Aayush Healthcare, doctor,Franchise,Nurse,Consultation,Online Consultation,affordable treatment" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.aayushhealth.com/" />

  {/* Open Graph for Facebook */}
  <meta property="og:title" content="Pathology Onboarding | Healthcare" />
  <meta property="og:description" content="Become a Healthcare franchise partner. Submit your hospital and doctor details easily." />
  <meta property="og:url" content="https://www.aayushhealth.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.aayushhealth.com/" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Franchise Onboarding | Healthcare" />
  <meta name="twitter:description" content="franchise, hospital onboarding, health franchise, join hospital network, healthcare partner,Aayush Healthcare, doctor,Franchise,Nurse,Consultation,Online Consultation,affordable treatment" />
  <meta name="twitter:image" content="https://www.aayushhealth.com/" />
</Helmet>

export default function PathologyPartnershipForm() {
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
    pathologyname: "",
    yearinoperation: "",
    website: "",
    ownername: "",
    designation: "",
    phoneno: "",
    emailid: "",
    additionalNotes: "",
  })

  // For admin access via URL parameter
  const isAdmin = false // In a real app, you'd get this from URL params or auth state

  const formSections = [
    { title: "Personal Information", icon: "user" },
    { title: "Pathology Lab Details", icon: "building" },
    { title: "Owner/Director Details", icon: "userCircle" },
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

      const response = await fetch("https://formbackend-n4tm.onrender.com/api/pathology/add", {
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
          pathologyname: "",
          yearinoperation: "",
          website: "",
          ownername: "",
          designation: "",
          phoneno: "",
          emailid: "",
          additionalNotes: "",
        })
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

      const response = await fetch("https://formbackend-n4tm.onrender.com/api/pathology/download", {
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
      link.download = "Pathology.xlsx"
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
                Thank you for your interest in our pathology partnership program. We'll review your information and get
                back to you soon.
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
                <h1 className="font-bold text-[#233f8f] text-3xl sm:text-4xl mb-2">
                  Healthcare Pathology Partnership Form
                </h1>
                <p className="text-gray-600 mb-1 max-w-2xl mx-auto">
                  Collaborate with a leading healthcare brand and grow your pathology services with confidence.
                </p>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  A partnership built on quality, compliance, and care
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
                        {index < activeSection ? (
                          <Check className="h-5 w-5" />
                        ) : section.icon === "user" ? (
                          <User className="h-5 w-5" />
                        ) : section.icon === "building" ? (
                          <Building className="h-5 w-5" />
                        ) : (
                          <UserCircle className="h-5 w-5" />
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
                            Pathology Lab Details
                          </span>
                        </div>
                      </div>

                      {/* Pathology Lab Name */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          Pathology Lab Name <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="pathologyname"
                            placeholder="Enter Pathology Lab Name"
                            value={doctorData.pathologyname}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                        </div>
                      </div>

                      {/* Years in Operation */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Years in Operation <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="yearinoperation"
                            placeholder="Number of years in operation"
                            value={doctorData.yearinoperation}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                        </div>
                      </div>

                      {/* Website */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <Globe className="h-4 w-4 mr-2" />
                          Website (if applicable)
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="website"
                            placeholder="https://www.example.com"
                            value={doctorData.website}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                        </div>
                      </div>

                      {/* Lab Address */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          Lab Address <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="address"
                            placeholder="Complete lab address"
                            value={doctorData.address}
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
                          <span className="px-4 text-xl bg-white text-gray-900 font-semibold">
                            Owner/Director Details
                          </span>
                        </div>
                      </div>

                      {/* Owner Name */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <UserCircle className="h-4 w-4 mr-2" />
                          Full Name <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="ownername"
                            placeholder="Owner/Director's full name"
                            value={doctorData.ownername}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                        </div>
                      </div>

                      {/* Designation */}
                      <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2 flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Designation <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="designation"
                            placeholder="Job title or position"
                            value={doctorData.designation}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            Phone Number <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="phoneno"
                              placeholder="Contact phone number"
                              value={doctorData.phoneno}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>
                        <div>
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            Email ID <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              name="emailid"
                              placeholder="Owner/Director's email address"
                              value={doctorData.emailid}
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
                            placeholder="Any additional information you'd like to share about your pathology lab"
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
