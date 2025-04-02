
import { useState } from "react"
import HealthAgentForm from "./HealthAgentForm"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function HealthAgentButton() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden pt-16 flex justify-center">
      <div className="p-8 max-w-[1400px]">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="font-bold text-center  text-[#233f8f] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] "> Healthcare Agent</h1>
          <p className="mt-2 text-lg text-gray-600">If someone is interested in partnering with your healthcare center, you can follow these steps to streamline the process</p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-6 py-3 bg-[#233f8f] text-white font-medium rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            {showForm ? "Hide Registration Form" : "Start Registration"}
            {showForm ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>

        {/* Collapsible Form */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${showForm ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          {showForm && <HealthAgentForm />}
        </div>
      </div>
    </div>
  )
}

