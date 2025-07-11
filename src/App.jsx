"use client"

import { useState } from "react"
import ProgressStepper from "./components/ProgressStepper"
import FormSection from "./components/FormSection"
import ErrorBox from "./components/ErrorMessage"
import LastPage from "./components/FinalData"
import Button from "./components/Button"
import ConfigurationPage from "./components/ConfigurationPage"
import CustomisationPage from  "./components/CustomisationPage"
const App = () => {

  const PlatformOptions=["With Applet","Without Applet"]
  const communicationOptions = ["Contactless Only","Contact Only","ISO Contact and Contactless based"]

  const [currentStep, setCurrentStep] = useState(2) // Configuration step is active
  const [isInvalid, setInvalid] = useState(false)
    //UserInfo
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [info, setInfo] = useState("")
  const [emName,setEmName] = useState("")
  const [emMail, setEmMail] = useState("")

  //Configuration Page
  const [selectedApplets, setSelectedApplets] = useState([]);
  const [selectedCertifications, setSelectedCertification] = useState([]);
  const [platformType, setPlatformType] = useState(PlatformOptions[0]);
  const [communicationInterface, setCommunicationInterface] = useState(communicationOptions[0]);
  const [salesCode, setSalesCode] = useState("");
  const [userNVM, setuserNVM] = useState("32");
  const [selectedOptions, setSelectedOptions] = useState([]);

  //CustomisationPage
  const [secureChannel, setSecureChannel] = useState("SCP03")

  const validateEmailRegex = /^\S+@\S+\.\S+$/;
  const validateInfineonEmployee = "@INFINEON.COM"
  const isNameValid = name.trim().length >0 ;
  const isEmailValid =  email.trim().length >0 && validateEmailRegex.test(email); 
  const isCompanyValid = company.trim().length > 0
  const isEmNameValid = emName.trim().length > 0
  const isEmMailValid = emMail.trim().length > 0 && emMail.toUpperCase().endsWith(validateInfineonEmployee)
;

  const isFormValid = isNameValid && isEmailValid && isCompanyValid && isEmNameValid && isEmMailValid



  const displayOptions = {
          Applets: selectedApplets,
          Certificates: selectedCertifications,
          Platform: platformType,
          Communication: communicationInterface,
          "Sales Code": salesCode,
          "User NVM": userNVM,
          Others:selectedOptions,
        };
  
  const clientInfo = {
    "Customer Email" : email,
    "Customer Name" : name,
    "Customer Company Name" : company,
    "Project Info" :info,
    "Infineon Employee Name": emName,
    "Infineon Employee Mail": emMail,
  }
  return (
    <div className=" flex flex-col min-h-screen w-screen bg-gray-100">
      <ifx-navbar  show-logo-and-appname="true" application-name="SECORA™ Configurator" fixed="false" logo-href="https://www.infineon.com" logo-href-target="_self">
        <ifx-navbar-profile user-name="" slot="right-item" image-url="" show-label="true" href="" target="_self" alt="profile image"></ifx-navbar-profile>
      </ifx-navbar>
      
      <div className="w-[90%] mx-auto px-4 flex-grow">
        {/* Progress Stepper */}
        <ProgressStepper currentStep={currentStep} />


        {isInvalid && <ErrorBox/>}
        {/* Warning Banner */}

        {currentStep === 0 && (
          <div className="bg-white shadow-sm p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <FormSection title="Email" hasError={!isEmailValid}>
                  <input
                    type="text"
                    for
                    value={email}
                    placeholder="name@company.com"
                    onChange={e => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300  bg-gray-50"
                  />
                </FormSection>
                <FormSection title="Name" hasError={!isNameValid}>
                  <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300  bg-gray-50"
                  />
                </FormSection>
                <FormSection title="Company" hasError={!isCompanyValid}>
                  <input
                    type="text"
                    value={company}
                    placeholder="Company Name"
                    onChange={e => setCompany(e.target.value)}
                    className="w-full p-3 border border-gray-300  bg-gray-50"
                  />
                </FormSection>
                <FormSection title="Project Info">
                  <input
                    type="text"
                    value={info}
                    onChange={e => setInfo(e.target.value)}
                    placeholder="Project Info"
                    className="w-full p-3 border border-gray-300  bg-gray-50"
                  />
                </FormSection>
              </div>

              {/* Right Column */}
              <div>
                <FormSection title="Infineon Employee Mail" hasError={!isEmMailValid}>
                  <input
                    type="text"
                    value={emMail}
                    onChange={e => setEmMail(e.target.value)}
                    placeholder="employee@infineon.com"
                    className="w-full p-3 border border-gray-300  bg-gray-50"
                  />
                </FormSection>

                <FormSection title="Infineon Employee Name" hasError={!isEmNameValid}>
                  <input
                    type="text"
                    value={emName}
                    onChange={e => setEmName(e.target.value)}
                    placeholder="Infineon Employee Name"
                    className="w-full p-3 border border-gray-300  bg-gray-50"
                  />
                </FormSection>
               
              </div>
               
        </div>
            <Button
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  isInvalid={!isFormValid}
                />
          </div>
        )}

        {currentStep === 1 && (
          <div className="bg-white  shadow-sm p-8">
            <div className="text-center py-20">
              <h2 className="text-3xl font-semibold text-gray-600 mb-4">Coming Soon</h2>
              <p className="text-gray-500 text-lg">This step is currently under development.</p>
              <Button
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                isInvalid={isInvalid}
              />
            </div>
          </div>
        
        )}
        {/* Main Content */}
        {currentStep === 2 && (
          <ConfigurationPage
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            isInvalid={isInvalid}
            setInvalid={setInvalid}
            selectedApplets={selectedApplets}
            setSelectedApplets={setSelectedApplets}
            selectedCertifications={selectedCertifications}
            setSelectedCertification={setSelectedCertification}
            platformType={platformType}
            setPlatformType={setPlatformType}
            PlatformOptions={PlatformOptions}
            communicationInterface={communicationInterface}
            setCommunicationInterface={setCommunicationInterface}
            communicationOptions={communicationOptions}
            salesCode={salesCode}
            setSalesCode={setSalesCode}
            userNVM={userNVM}
            setuserNVM={setuserNVM}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          
        )}
        {/* {currentStep ===3 && (
          <CustomisationPage
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setInvalid={setInvalid}
          isInvalid={isInvalid}

          secureChannel={secureChannel}
          setSecureChannel = {setSecureChannel}

          />
        )} */}
        {currentStep > 2 && currentStep < 7 && (
          <div className="bg-white  shadow-sm p-8">
            <div className="text-center py-20">
              <h2 className="text-3xl font-semibold text-gray-600 mb-4">Coming Soon</h2>
              <p className="text-gray-500 text-lg">This step is currently under development.</p>
              <Button
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                isInvalid={isInvalid}
              />
            </div>
          </div>
        
        )}
        {currentStep === 7 && (
          <div className="bg-white  shadow-sm p-8 gap-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <LastPage displayOptions={clientInfo} name="Contact Information" />
              <LastPage displayOptions={displayOptions} name="Customisation" />
              {/* <LastPage displayOptions={displayOptions} name="Customisation" /> */}
            </div>
            <Button
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              isInvalid={isInvalid}
            />
          </div>
        )}
      
      </div>


        <ifx-footer  copyright-text="© 1999 - 2024 Infineon Technologies AG">
          <div slot="info">
            <ifx-link variant="menu" aria-label="Go to Homepage" href="http://infineon.com" target="_blank">Terms</ifx-link>
            <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
            <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
            <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
          </div>
        </ifx-footer>
    </div>
  )
}

export default App
