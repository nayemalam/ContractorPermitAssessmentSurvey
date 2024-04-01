"use client"
import { useGetQuestions } from "../hooks/useGetQuestions"
import { useQuestionStore } from "../stores/QuestionStore"
import { QuestionType } from "../utils"
import PermitRequirement from "./PermitRequirement"
import Question from "./Question"
import ResetButton from "./ResetButton"

const Questionnaire = () => {
  const { questions, loading } = useGetQuestions()
  const {
    currentQuestion,
    answers,
    actions: { setAnswer, setCurrentQuestion, goToNextQuestion },
  } = useQuestionStore()

  const handleAnswer = (answer: string, isMultiple: boolean = false) => {
    const currentAnswers = answers[currentQuestion] || []
    let updatedAnswers

    if (isMultiple) {
      updatedAnswers = currentAnswers.includes(answer)
        ? currentAnswers.filter((item) => item !== answer)
        : [...currentAnswers, answer]
    } else {
      updatedAnswers = [answer]
    }

    setAnswer(currentQuestion, updatedAnswers)

    if (!isMultiple) {
      goToNextQuestion(currentQuestion, answer)
    }
  }

  const question = questions.find((q) => q.id === currentQuestion)

  const handleSubmit = () => {
    if (question?.type === QuestionType.MULTIPLE) setCurrentQuestion(-1)
  }

  if (loading) {
    return (
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    )
  }

  return (
    <div
      className={`max-w-2xl mx-auto mt-10 p-5 shadow-lg rounded-lg ${
        currentQuestion !== 1 ? null : "w-2/3"
      }`}
    >
      {question ? (
        <>
          <h1 className="text-center text-2xl font-bold text-gray-800">
            Contractor Permit Assessment
          </h1>
          <Question
            key={question.id}
            data={question}
            onAnswerSelect={handleAnswer}
            isMultiple={question.type === QuestionType.MULTIPLE}
          />
          <div className="flex w-full justify-end items-center gap-4 mt-6">
            {currentQuestion !== 1 && <ResetButton />}
            {question.type === "multiple" && (
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none transition duration-150 ease-in-out disabled:opacity-50"
                onClick={handleSubmit}
                disabled={!answers[currentQuestion]}
              >
                Submit
              </button>
            )}
          </div>
        </>
      ) : (
        <PermitRequirement answers={answers} />
      )}
    </div>
  )
}

export default Questionnaire
