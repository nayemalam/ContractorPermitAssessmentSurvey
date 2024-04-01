import { CheckCircleIcon } from "@heroicons/react/24/solid"

type Props = {
  selected: boolean
  onClick: () => void
  title: string
}

export default function CheckboxCardSelect({ selected, onClick, title }: Props) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center w-full justify-between px-8 py-4 mx-auto border cursor-pointer rounded-xl hover:bg-blue-50
       hover:border-blue-500 ${selected ? "border-blue-500" : "border-gray-700"}`}
    >
      <div className="flex items-center">
        <CheckCircleIcon
          className={`w-5 h-5 ${selected ? "text-blue-600" : "text-gray-400"} sm:h-9 sm:w-9`}
        />

        <div className="flex flex-col mx-5 space-y-1">
          <h2
            className={`text-md font-medium ${
              selected ? "text-blue-600" : "text-gray-700"
            } text-md`}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}
