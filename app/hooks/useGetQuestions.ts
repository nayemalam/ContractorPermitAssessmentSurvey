import questionService from "@/app/services/QuestionService"
import { useEffect, useState } from "react"
import { Question } from "../types"

export const useGetQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await questionService.getQuestions()
      setQuestions(data)
      setLoading(false)
    }

    fetchQuestions()
  }, [])

  return { questions, loading }
}
