const steps = 8
const Button = ({ currentStep, setCurrentStep, isInvalid }) => {
  const handleNext = () => {
    if (currentStep < steps - 1) {
      !isInvalid && setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
      setCurrentStep(currentStep - 1);
  };
    return (
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
              {currentStep>0 && <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="px-6 py-2 bg-gray-500 text-white  hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              }
              <button
                onClick={handleNext}
                disabled={isInvalid && currentStep === steps - 1}
                className="px-6 py-2 bg-teal-600 text-white  hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
              </button>
            </div>
    );
};
export default Button;

