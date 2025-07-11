import {useEffect } from "react";
import FormSection from "./FormSection";
import CheckboxGroup from "./CheckboxGroup";
import Button from "./Button";
const ConfigurationPage = ({
  currentStep,
  setCurrentStep,
  isInvalid,
  setInvalid,
  selectedApplets,
  setSelectedApplets,
  selectedCertifications,
  setSelectedCertification,
  platformType,
  setPlatformType,
  PlatformOptions,
  communicationInterface,
  setCommunicationInterface,
  communicationOptions,
  salesCode,
  setSalesCode,
  userNVM,
  setuserNVM,
  selectedOptions,
  setSelectedOptions
}) => {
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
  ];
  const certificationOptions = ["EMVCO", "Type Approval"];
  const otherOptions = ["NFC T4T", "NRG support"];
  const handleAppletChange = (applet) => {
    setSelectedApplets((prev) => {
      const updated = prev.includes(applet)
        ? prev.filter((item) => item !== applet)
        : [...prev, applet];
      if (updated.length > 3) {
        setInvalid(true);
      } else {
        setInvalid(false);
      }
      return updated;
    });
  };
const configMap = {

  'A': ['MCA 1.2.3', 'VSDC 2.9.2'],
  'B': ['MCA 1.2.3', 'VSDC 2.8.1G1'],
  'H': ['MCA 1.2.3', 'VSDC 2.8.1G1', 'D-PAS Connect 2.0'],
  'I': ['VSDC 2.9.2', 'D-PAS Connect 2.0', 'gSPARC 2.0.2'], 
  'J': ['MCA 1.2.3','VSDC 2.8.1G1','D-PAS Connect 2.0' ],
  'K': ['MCA 1.2.3', 'VSDC 2.9.2', 'CPACE 1.0'],
  'L': ['MCA 1.2.3', 'AEIPS 4.5.1 & XP 4.1.1', 'VSDC 2.8.1G1'],

  'N': ['MCA 1.2.3', 'VSDC 2.9.2', 'Eftpos (PURE 3.04)'],
  'O': ['MCA 1.2.3', 'VSDC 2.9.2', 'NSICCS 1.1'],
  'Q': ['MCA 1.2.3', 'VSDC 2.9.2', 'UPI (UICS 2021)'],
  'T': ['MCA 1.2.3', 'VSDC 2.8.1G1', 'NSICCS 1.1'],
  'V': ['MCA 1.2.3', 'VSDC 2.9.2', 'D-PAS Connect 2.1.1'],
  'W': ['MCA 1.2.3', 'VSDC 2.8.1G1', 'D-PAS Connect 2.1.1'],

};
    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;

        b.sort();
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
    return true;
}
// Given an applet name, return the first sales code letter that supports it, or null if not found
    function getSalesCodeForApplet(applet) {
        applet.sort();
        for (const [code, current] of Object.entries(configMap)) {
            if (arraysEqual(applet,current)) {
                return code;
            }
        }
        return "x";
    }



  // Helper function to get interface security code
  function getScommCode(secure) {
    const mapping = {
      "Contactless Only": "L",
      "Contact Only": "C",
      "ISO Contact and Contactless based": "D",
    };
    return mapping[secure] || "";
  }
  function cryptography(choice){
    if (choice.includes("NRG support")){
      return "L";
    }else return "A";
  }

  // JSON-like object referring to functions/variables
  const SecoraPay28SalesCode = {
    swTypeIdentifier: "SLJ",
    securityAndArchitecture: "28",
    InterfaceSecurity: "P" + getScommCode(communicationInterface) + cryptography(selectedOptions),
    UserMemory : userNVM.length < 3 ? "0"+ userNVM : userNVM,
    Technology : "X",
    Applet: platformType === "Without Applet" ? "U" :getSalesCodeForApplet(selectedApplets)
  };

  // Update salesCode whenever dependencies change
  useEffect(() => {
    setSalesCode(Object.values(SecoraPay28SalesCode).join(''));
  }, [communicationInterface, selectedOptions, userNVM, selectedApplets, platformType]);
  
  // Reset selectedApplets when platformType changes
  useEffect(() => {
    setSelectedApplets([]);
  }, [platformType]);

  
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
    const handleOptionChange = (currentoption) => {
      setSelectedOptions( (prev) => {
        const optionList = prev.includes(currentoption)
        ? prev.filter((c) => c !== currentoption)
        : [...prev, currentoption];
        console.log(optionList)
        return optionList;
      }
      );
  }

    return (
        <div className="bg-white shadow-sm p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <FormSection title="Platform Type">
                  <select
                    value={platformType}
                    onChange={(e) => setPlatformType(e.target.value)}
                    className="w-full p-3 border border-gray-300  focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    {PlatformOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </FormSection>

                {platformType === "With Applet" && <FormSection title="Infineon Payment Applet Collection(s)">
                  <CheckboxGroup
                    options={appletOptions}
                    selectedOptions={selectedApplets}
                    onChange={handleAppletChange}
                  />
                </FormSection>}
                <FormSection title="Others">
                  <CheckboxGroup
                    options={otherOptions}
                    selectedOptions={selectedOptions}
                    onChange={handleOptionChange}
                  />
                </FormSection>
              </div>

              {/* Right Column */}
              <div>
                <FormSection title="Sales Code">
                  <input
                    type="text"
                    value={salesCode}
                    readOnly
                    className="w-full p-3 border border-gray-300  bg-gray-50"
                  />
                </FormSection>

                <FormSection title="Communication Interfaces">
                  <select
                    value={communicationInterface}
                    onChange={(e) => setCommunicationInterface(e.target.value)}
                    className="w-full p-3 border border-gray-300  focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                     {communicationOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                  </select>
                </FormSection>

                <FormSection title="Certification">
                  <CheckboxGroup
                    options={certificationOptions}
                    selectedOptions={selectedCertifications}
                    onChange={handleCertificationChange}
                  />
                </FormSection>

                <FormSection title="User NVM(kBytes)">
                  <input
                    type="text"
                    onChange={(e) => setuserNVM(e.target.value)}
                    defaultValue={userNVM}
                    className="w-full p-3 border border-gray-300  bg-gray-50"
                  />
                </FormSection>

                <Button
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  isInvalid={isInvalid}
                />
              </div>
            </div>
          </div>
    );
};

export default ConfigurationPage;