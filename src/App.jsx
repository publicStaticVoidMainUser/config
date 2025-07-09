"use client"

import { useState } from "react"
import ProgressStepper from "./components/ProgressStepper"
import FormSection from "./components/FormSection"
import CheckboxGroup from "./components/CheckboxGroup"
import ErrorBox from "./components/ErrorMessage"
import { defineCustomElements } from "@infineon/infineon-design-system-stencil/loader";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0) // Configuration step is active
  const [selectedApplets, setSelectedApplets] = useState([])
  const [selectedCertifications, setSelectedCertification] = useState([])
  const [platformType, setPlatformType] = useState("With Applet")
  const [communicationInterface, setCommunicationInterface] = useState("ISO Contact and Contactless based")
  const [isInvalid, setInvalid] = useState(false)
  const steps = [
    { label: "Contact", icon: "Ph" },
    { label: "Selection", icon: "S" },
    { label: "Configuration", icon: "C" },
    { label: "Customization", icon: "C" },
    { label: "Logistics", icon: "L" },
    { label: "Packages", icon: "P" },
    { label: "Additional Information", icon: "ℹ" },
    { label: "Review And Submit", icon: "✓" },
  ]

  const appletOptions = [
    "MCA 1.2.3",
    "VSDC 2.9.2",
    "VSDC 2.8.1G1",
    "D-PAS Connect 2.0",
    "qSPARC 2.0.2",
    "CPACE 1.1",
    "AEIPS 4.5.1 & XP 4.1.1",
    "Eftpos (PURE 3.04)",
    "NSICCS 1.1",
    "UPI (UICS 2021)",
    "D-PAS Connect 2.1.1",
  ]

  const certificationOptions = ["EMVCO", "Type Approval"]

  const handleAppletChange = (applet) => {//This takes the current certificate
    setSelectedApplets((prev) => {//Takes the current list that we have(updated)
      const updated = prev.includes(applet) //Checks if the current certificated we have selected(or deselected) is present(already checked) or not
      ? prev.filter((item) => item !== applet) //Incase it is, then we go through all the elements other than the current certificate
      : [...prev, applet];//otherwise you just add it to the list
      
      

      if (updated.length > 3) {
       setInvalid(true);
      } else {
        setInvalid(false);
      }
      console.log(updated)
      return updated;
    });
  };

  const handleCertificationChange = (currentCertification) => {
      setSelectedCertification( (prev) => {
        const certificationList = prev.includes(currentCertification)
        ? prev.filter((c) => c !== currentCertification)
        : [...prev, currentCertification];
        console.log(certificationList)
        return certificationList;
      }
      );
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      !isInvalid && setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <img src = "/logo.png"></img>
              </div>
            </div>
            <span className="text-gray-600 font-medium">SECORA™ Configurator</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Progress Stepper */}
        <ProgressStepper steps={steps} currentStep={currentStep} />


        {isInvalid && <ErrorBox/>}
        {/* Warning Banner */}

        {currentStep <=1 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center py-20">
              <h2 className="text-3xl font-semibold text-gray-600 mb-4">Coming Soon</h2>
              <p className="text-gray-500 text-lg">This step is currently under development.</p>

              {/* Navigation Buttons for Coming Soon pages */}
              <div className="flex justify-center space-x-4 mt-12">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={isInvalid && currentStep === steps.length - 1}
                  className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        
        )}
        {/* Main Content */}
        {currentStep === 2 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <FormSection title="Platform Type">
                  <select
                    value={platformType}
                    onChange={(e) => setPlatformType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option>With Applet</option>
                    <option>Without Applet</option>
                  </select>
                </FormSection>

                <FormSection title="Infineon Payment Applet Collection(s)">
                  <CheckboxGroup
                    options={appletOptions}
                    selectedOptions={selectedApplets}
                    onChange={handleAppletChange}
                  />
                </FormSection>
              </div>

              {/* Right Column */}
              <div>
                <FormSection title="Sales Code">
                  <input
                    type="text"
                    value="SLJ26PDA032SU"
                    readOnly
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                  />
                </FormSection>

                <FormSection title="Communication Interfaces">
                  <select
                    value={communicationInterface}
                    onChange={(e) => setCommunicationInterface(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option>ISO Contact and Contactless based</option>
                    <option>Contact only</option>
                    <option>Contactless only</option>
                  </select>
                </FormSection>

                <FormSection title="Certification">
                  <CheckboxGroup
                    options={certificationOptions}
                    selectedOptions={selectedCertifications}
                    onChange={handleCertificationChange}
                  />
                </FormSection>

                <FormSection title="User NVM">
                  <input
                    type="text"
                    value="32 (80) kBytes"
                    
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                  />
                </FormSection>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
              </button>
            </div>
          </div>
        )}
        {currentStep > 2 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center py-20">
              <h2 className="text-3xl font-semibold text-gray-600 mb-4">Coming Soon</h2>
              <p className="text-gray-500 text-lg">This step is currently under development.</p>

              {/* Navigation Buttons for Coming Soon pages */}
              <div className="flex justify-center space-x-4 mt-12">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={isInvalid && currentStep === steps.length - 1}
                  className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        
        )}
      </div>
    </div>
  )
}

export default App
