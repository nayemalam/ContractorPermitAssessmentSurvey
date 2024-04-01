import { Answer, Requirement } from "../types"

export const QUESTION_KINDS = {
  RESIDENTIAL_WORK: "RESIDENTIAL_WORK",
  INTERIOR_WORK: "INTERIOR_WORK",
  EXTERIOR_WORK: "EXTERIOR_WORK",
}

export const QUESTION_IDS = {
  [QUESTION_KINDS.RESIDENTIAL_WORK]: 1,
  [QUESTION_KINDS.INTERIOR_WORK]: 2,
  [QUESTION_KINDS.EXTERIOR_WORK]: 3,
}

export const QUESTIONS = {
  [QUESTION_KINDS.RESIDENTIAL_WORK]: QUESTION_IDS.RESIDENTIAL_WORK,
  [QUESTION_KINDS.INTERIOR_WORK]: QUESTION_IDS.INTERIOR_WORK,
  [QUESTION_KINDS.EXTERIOR_WORK]: QUESTION_IDS.EXTERIOR_WORK,
}

export const determinePermitRequirement = (answers: Answer): Requirement => {
  if (
    answers[QUESTIONS.INTERIOR_WORK]?.some((answer) =>
      ["New bathroom", "New laundry room", "Other"].includes(answer)
    )
  ) {
    return "In-House Review Process"
  }

  if (answers[QUESTIONS.INTERIOR_WORK]?.includes("Bathroom remodel")) {
    return "Over-the-Counter Submission Process"
  }

  if (answers[QUESTIONS.EXTERIOR_WORK]?.includes("Other")) {
    return "In-House Review Process"
  } else if (
    answers[QUESTIONS.EXTERIOR_WORK]?.some((answer) =>
      ["Garage door replacement", "Exterior doors"].includes(answer)
    )
  ) {
    return "Over-the-Counter Submission Process"
  }

  return "No Permit"
}

export const QuestionType = {
  SINGLE: "single",
  MULTIPLE: "multiple",
}
