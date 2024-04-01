import { useQuestionStore } from "../stores/QuestionStore"

export default function ResetButton() {
  const {
    actions: { reset },
  } = useQuestionStore()
  return (
    <button
      className="px-4 py-2 flex bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none transition duration-150 ease-in-out"
      onClick={() => reset()}
    >
      Restart
    </button>
  )
}
