const step = [
  { label: "Contact", icon: "community16" },
  { label: "Selection", icon: "cartF16" },
  { label: "Configuration", icon: "configure16" },
  { label: "Customization", icon: "editor16" },
  { label: "Logistics", icon: "tram16" },
  { label: "Packages", icon: "box16" },
  { label: "Additional Information", icon: "cAddF16" },
  { label: "Review And Submit", icon: "send16" },
]

const ProgressStepper = ({currentStep }) => {
  return (
    <div className="w-full py-8 relative">
      <div className="flex items-center justify-between relative">
        {/* Progress line*/}
        <div className="absolute top-5 w-full h-1.5 bg-[var(--grey)] z-0"></div>
        <div
          className="absolute top-5 h-1.5 bg-[var(--ocean)]  z-0 transition-all duration-30000"
          style={{ width: `${(currentStep / (step.length - 1)) * 100}%` }}
        ></div>

        {step.map((s, index) => (
          <div
            key={index}
            className={`top-0.5 flex flex-col items-center relative z-10
              ${index === 0 ? "-translate-x-1/2" : ""}
              ${index === step.length - 1 ? "translate-x-1/2" : ""}`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
                index <= currentStep ? "bg-[var(--ocean)]" : "bg-[var(--grey)]"
              }`}
            >
              <ifx-icon icon={s.icon}></ifx-icon>
            </div>
            <span
              className={`mt-2 text-sm font-medium ${
                index <= currentStep ? "text-[var(--ocean)]" : "text-black"
              }`}
            >
              {s.label}
            </span>
          </div>
    ))}
  </div>
</div>

  )
}

export default ProgressStepper
