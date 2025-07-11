
const FormSection = ({ title, children, className = "", hasError = false}) => {
  if(title.includes("@")){title= "INCORRECT SALES CODE"}
  return (
    <div className={`mb-6 ${className}`}>
      <h3 className="text-lg font-medium text-teal-600 mb-4">
        {title}
        <span className="text-red-500 ml-1">*</span>
      </h3>
      {children}
      {hasError && (
      <div className="text-red-500 text-sm mt-2">This field is required.</div>
    )}
    </div>
  )
}

export default FormSection
