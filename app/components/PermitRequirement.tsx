import { useMemo } from "react"
import { Answer } from "../types"
import { determinePermitRequirement } from "../utils"
import ResetButton from "./ResetButton"

type Props = {
  answers: Answer
}
export default function PermitRequirement({ answers }: Props) {
  const requirement = useMemo(() => determinePermitRequirement(answers), [answers])

  return (
    <>
      <div className="flex items-center justify-center leading-8">
        {requirement === "Over-the-Counter Submission Process" && (
          <div>
            <h2 className="text-xl font-bold text-blue-600 text-center">
              Over-the-Counter Submission Process
            </h2>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>A building permit is required.</li>
              <li>Submit application for OTC review.</li>
            </ul>
          </div>
        )}
        {requirement === "In-House Review Process" && (
          <div>
            <h2 className="text-xl font-bold text-green-600 text-center">
              In-House Review Process
            </h2>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>A building permit is required.</li>
              <li>Include plan sets.</li>
              <li>Submit application for in-house review.</li>
            </ul>
          </div>
        )}
        {requirement === "No Permit" && (
          <div>
            <h2 className="text-xl font-bold text-red-600 text-center">No Permit Required</h2>
            <p className="mt-2">Nothing is required! You’re set to build.</p>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <ResetButton />
      </div>
    </>
  )
}
