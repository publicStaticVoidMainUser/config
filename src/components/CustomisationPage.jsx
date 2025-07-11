// import {useEffect } from "react";
// import FormSection from "./FormSection";
// import CheckboxGroup from "./CheckboxGroup";
// import Button from "./Button";
// const CustomisationPage = ({
//     currentStep,
//     setCurrentStep,
//     isInvalid,
//     setInvalid,
//     secureChannel,
//     setSecureChannel
// }) => {
// const secureSet = ["SPO3","SPO2"]
    


//     return (
//         <div className="bg-white shadow-sm p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//               {/* Left Column */}
//               <div>
//                 <FormSection title="Platform Type">
//                   <select
//                     value={platformType}
//                     onChange={(e) => setPlatformType(e.target.value)}
//                     className="w-full p-3 border border-gray-300  focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                   >
//                     <option>With Applet</option>
//                     <option>Without Applet</option>
//                   </select>
//                 </FormSection>

//                 {platformType === "With Applet" && <FormSection title="Infineon Payment Applet Collection(s)">
//                   <CheckboxGroup
//                     options={appletOptions}
//                     selectedOptions={selectedApplets}
//                     onChange={handleAppletChange}
//                   />
//                 </FormSection>}
//                 <FormSection title="Others">
//                   <CheckboxGroup
//                     options={otherOptions}
//                     selectedOptions={selectedOptions}
//                     onChange={handleOptionChange}
//                   />
//                 </FormSection>
//               </div>

//               {/* Middle Column */}
//               <div>
//                 <FormSection title="Sales Code">
//                   <input
//                     type="text"
//                     value={salesCode.includes("@") ? "INCORRECT SALES CODE" : salesCode}
//                     readOnly
//                     className="w-full p-3 border border-gray-300  bg-gray-50"
//                   />
//                 </FormSection>

//                 <FormSection title="Communication Interfaces">
//                   <select
//                     value={communicationInterface}
//                     onChange={(e) => setCommunicationInterface(e.target.value)}
//                     className="w-full p-3 border border-gray-300  focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                   >
//                     <option>ISO Contact and Contactless based</option>
//                     <option>Contact Only</option>
//                     <option>Contactless Only</option>
//                   </select>
//                 </FormSection>

//                 <FormSection title="Certification">
//                   <CheckboxGroup
//                     options={certificationOptions}
//                     selectedOptions={selectedCertifications}
//                     onChange={handleCertificationChange}
//                   />
//                 </FormSection>

//                 <FormSection title="User NVM(kBytes)">
//                   <input
//                     type="text"
//                     onChange={(e) => setuserNVM(e.target.value)}
//                     defaultValue={userNVM}
//                     className="w-full p-3 border border-gray-300  bg-gray-50"
//                   />
//                 </FormSection>

//                 <Button
//                   currentStep={currentStep}
//                   setCurrentStep={setCurrentStep}
//                   isInvalid={isInvalid}
//                 />
//               </div>
//               {/* Right Column */}

//               <div>     

//                 <FormSection title="Secure Channel">
//                   <select
//                     value={secureChannel}
//                     onChange={(e) => setSecureChannel(e.target.value)}
//                     className="w-full p-3 border border-gray-300  focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                   >
//                     {secureSet.map((option) => (
//                     <option key={option}>{option}</option>
//                     ))}
//                   </select>
//                 </FormSection>

//                 <Button
//                   currentStep={currentStep}
//                   setCurrentStep={setCurrentStep}
//                   isInvalid={isInvalid}
//                 />
//               </div>
//             </div>
//           </div>
//     );
// }

// export default CustomisationPage