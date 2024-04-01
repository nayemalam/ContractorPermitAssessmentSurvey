# PermitFlow Assessment

# Deliverables
#### 1. UI & API Interaction

##### UI Setup:

- React with TypeScript
- Zustand was used to manage the application state, tracking user answers, current question, and navigation through the questionnaire.
- Main Component Structure Details:
  - Questionnaire Component: Orchestrates the flow of questions and answers.
  - Question Component: Displays individual questions and allows answer selection. Handles both single and multiple choice questions (as per spec)
  - PermitRequirement Component: Shows the result based on user answers at the end of the questionnaire.

##### API Interaction:

- Opted to mock the initial API call to fetch questions
- If I built an API, I would do the following
  - GET `/api/questions`: Fetches questions from the backend
  - POST `api/question/:id`: Submits user answers to the backend to the specific question with body `{ answer: string }`
  - POST `/api/permit-assessment`: Submits user answers and returns the permit requirement result

#### 2. Database Spec
Discussing how the data could be persisted:

- Database Table: A table like `permit_submissions` could store user responses. Columns could include `submission_id`, `answers` (jsonb or related question-answer tables), `result`, `created_at`, and `updated_at`.
- On every question submission, I would make a POST request to the backend to store the user's answer in the database, if the question id is not already in the database.
  - if the user has already answered the question, I would update the answer in the database using a PUT/PATCH request.
- I would show a "saving" state when the user submits an answer to indicate that the answer is being saved to the database.

#### 3. Optimal Design Considerations
- Scalability: Since we now have reusable components (i.e. Question and PermitRequirement), the app can easily scale to accommodate more questions and permit requirements.
- Accessibility: Made sure it's responsive but could improve accessibility by adding ARIA attributes and keyboard navigation, would be nice to just TAB and ENTER to submit answers.
- Performance: Added loading states when retrieving questions, would be nice to add loading states when adding, updating and submitting answers (better ux feedback)
- Testing: Would be nice to do both unit and e2e tests
    - Unit: would test the components, hooks, and services
    - E2E: would test the user flow from start to finish (all the scenarios outlined in the spec)

#### 4. Backend and DB Setup (hypothetical)
- Backend: Node.js/Express that interacts with a database to fetch questions and store submissions.
- Database: A SQL or NoSQL database could be used, with tables/collections for questions, answers, and submissions. I would use DBeaver to interact with the database.

___

This is a blank Next.js application that you can use to submit your PermitFlow assessment. We've included:

- TypeScript
- Tailwind
- Prisma

## Containers

We've also included Postgres and Redis containers. To spin them up, use:

```
docker compose up -d
```

which will start a Postgres container on `localhost:5432` and a Redis container on `localhost:6379`.

## Starting the dev server

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

`app/page.tsx` is the entrypoint for the app.
