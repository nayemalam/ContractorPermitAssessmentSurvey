// not being used, but it's a good example of how to use lenses (i.e. slices)
import { lens } from "@dhmk/zustand-lens"

interface InitialState {
  currentQuestion: number
  answers: { [key: string]: string | string[] }
}

export interface QuestionState extends InitialState {
  actions: {
    setCurrentQuestion: (questionNumber: number) => void
    setAnswer: (questionKey: string, answer: string | string[]) => void
    reset: () => void
  }
}

const initialState: InitialState = {
  currentQuestion: 1,
  answers: {},
}

export const questionLens: QuestionState = lens((set) => ({
  ...initialState,
  actions: {
    setCurrentQuestion: (questionNumber) =>
      set((state) => ({ ...state, currentQuestion: questionNumber })),
    setAnswer: (questionKey, answer) =>
      set((state) => ({ ...state, answers: { ...state.answers, [questionKey]: answer } })),
    reset: () => set(initialState),
  },
}))
