"use client"

const CheckboxGroup = ({ options, selectedOptions, onChange }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((option, index) => (
        <label key={index} className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => onChange(option)}
            className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
          />
          <span className="text-sm text-gray-700">{option}</span>
        </label>
      ))}
    </div>
  )
}

export default CheckboxGroup
