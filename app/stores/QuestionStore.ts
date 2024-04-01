import { mountStoreDevtool } from "simple-zustand-devtools"
import { create } from "zustand"
import { Answer } from "../types"
import { QUESTION_IDS } from "../utils"

interface InitialState {
  currentQuestion: number
  answers: Answer
}

export interface QuestionState extends InitialState {
  actions: {
    setCurrentQuestion: (questionNumber: number) => void
    setAnswer: (questionId: number, answers: string[]) => void
    goToNextQuestion: (currentQuestionId: number, selectedOption: string) => void
    reset: () => void
  }
}

const initialState: InitialState = {
  currentQuestion: 1,
  answers: {},
}

export const useQuestionStore = create<QuestionState>((set, get) => ({
  ...initialState,
  actions: {
    setCurrentQuestion: (questionNumber) => set({ currentQuestion: questionNumber }),
    setAnswer: (questionId: number, answers: string[]) =>
      set((state) => ({
        answers: { ...state.answers, [questionId]: answers },
      })),
    goToNextQuestion: (currentQuestionId, selectedOption) => {
      const nextQuestionId = (() => {
        // determines the next question based on the current question and selected option
        if (currentQuestionId === QUESTION_IDS.RESIDENTIAL_WORK) {
          return selectedOption === "Interior work"
            ? QUESTION_IDS.INTERIOR_WORK
            : QUESTION_IDS.EXTERIOR_WORK
        }

        return null
      })()

      set({ currentQuestion: nextQuestionId ?? -1 })
    },
    reset: () => set(initialState),
  },
}))

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("QuestionStore", useQuestionStore)
}
