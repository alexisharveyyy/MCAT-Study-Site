# MCAT Study Platform

A comprehensive study platform for MCAT preparation. Track your progress across all four exam sections, access curated study resources, and get instant help from an AI tutor.

** Found at: ** https://mcat-study-eight.vercel.app/

## Features

**Progress Tracking**
- Mark topics as Not Started, In Progress, or Completed
- Visual progress rings and completion bars for every section, foundational concept, and content category
- Per-user progress saved automatically in the browser

**Complete MCAT Content Outline**
- All four exam sections with full topic breakdowns sourced from the official AAMC content outline
- Biological and Biochemical Foundations of Living Systems (Foundational Concepts 1-3)
- Chemical and Physical Foundations of Biological Systems (Foundational Concepts 4-5)
- Psychological, Social, and Biological Foundations of Behavior (Foundational Concepts 6-10)
- Critical Analysis and Reasoning Skills

**AI Tutor**
- Ask any MCAT-related question and get a detailed, streamed response
- Powered by OpenAI's GPT-4o-mini with a system prompt tuned for MCAT tutoring
- Example questions provided to help get started

**Study Resources**
- Direct links to Khan Academy and YouTube searches for every topic
- Links to AAMC official prep materials and community resources
- Suggested search queries for each subtopic

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** Vercel AI SDK + OpenAI
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/<your-username>/mcat-study.git
cd mcat-study
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```
OPENAI_API_KEY=your-openai-api-key
```

The AI Tutor feature requires an OpenAI API key. You can get one at [platform.openai.com/api-keys](https://platform.openai.com/api-keys). The rest of the app works without it.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push this repo to GitHub
2. Import the repository on [vercel.com/new](https://vercel.com/new)
3. Add your `OPENAI_API_KEY` as an environment variable in the Vercel dashboard
4. Deploy

Your site will be live at `https://<your-project>.vercel.app`.

## Project Structure

```
src/
  app/
    api/chat/       -- AI tutor API route
    ask/            -- AI tutor chat page
    dashboard/      -- Main dashboard
    section/        -- Section and topic detail pages
  components/       -- Reusable UI components
  lib/
    mcat-data.ts    -- Complete MCAT content outline data
    auth-context.tsx    -- Authentication context
    progress-context.tsx -- Progress tracking context
```

## License

This project is for personal educational use. MCAT content outline is based on publicly available information from the AAMC.
