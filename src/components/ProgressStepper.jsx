const ProgressStepper = ({ steps, currentStep }) => {
  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-300 z-0"></div> {/*grey background line*/}
        <div
          className="absolute top-5 left-0 h-0.5 bg-teal-600 z-0 transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}> {/*This tell how much percent of code is done */}
        </div>

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative z-10">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
                index <= currentStep ? "bg-teal-600" : "bg-gray-400"
              }`}
            >
              {step.icon}
            </div>
            <span className={`mt-2 text-sm font-medium ${index <= currentStep ? "text-gray-900" : "text-gray-400"}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressStepper
