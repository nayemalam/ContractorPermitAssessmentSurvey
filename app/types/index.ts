export type QuestionType = "single" | "multiple"

export type QuestionKind = "RESIDENTIAL_WORK" | "INTERIOR_WORK" | "EXTERIOR_WORK"

export type Question = {
  id: number
  text: string
  options: string[]
  type: QuestionType
  end?: boolean
}

export type Answer = {
  [questionId: number]: string[]
}

export type Requirement =
  | "Over-the-Counter Submission Process"
  | "In-House Review Process"
  | "No Permit"
