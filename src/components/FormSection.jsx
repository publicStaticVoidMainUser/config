const FormSection = ({ title, children, className = "" }) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h3 className="text-lg font-medium text-teal-600 mb-4">{title}</h3>
      {children}
    </div>
  )
}

export default FormSection
