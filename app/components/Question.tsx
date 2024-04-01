import { useState } from "react"
import CheckboxCardSelect from "./CheckboxCardSelect"

type Props = {
  data: {
    id: number
    text: string
    options: string[]
  }
  onAnswerSelect: (answer: string, isMultiple?: boolean) => void
  isMultiple: boolean
}

const Question = ({ data, onAnswerSelect, isMultiple }: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleOptionClick = (option: string) => {
    if (isMultiple) {
      const updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option]
      setSelectedOptions(updatedOptions)
      onAnswerSelect(option, true)
    } else {
      onAnswerSelect(option)
    }
  }

  return (
    <div className="mt-5">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700 text-center">{data.text}</h2>
        {isMultiple && (
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Select all that apply (optional)
          </p>
        )}
      </div>

      {isMultiple ? (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {data.options.map((option) => (
            <CheckboxCardSelect
              key={option}
              selected={selectedOptions.includes(option)}
              onClick={() => handleOptionClick(option)}
              title={option}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col space-y-2 mt-2">
          {data.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Question
