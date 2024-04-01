import { Question } from "../types"

const questions: Question[] = [
  {
    id: 1,
    text: "What residential work are you doing?",
    options: ["Interior work", "Exterior work"],
    type: "single",
  },
  {
    id: 2,
    text: "What interior work are you doing?",
    options: ["Bathroom remodel", "New bathroom", "New laundry room", "Other"],
    type: "multiple",
    end: true,
  },
  {
    id: 3,
    text: "What exterior work are you doing?",
    options: ["Garage door replacement", "Exterior doors", "Fencing", "Other"],
    type: "multiple",
    end: true,
  },
]

const getQuestions = async (): Promise<Question[]> => {
  // logic here to fetch questions from an endpoint
  return questions
}

export default {
  getQuestions,
}
