# 🧠 Safe Harbor

> **AI-Powered IEP & ABA Progression Tracking for Special Education**

Safe Harbor is a clinical-grade EdTech platform that helps BCBAs, educators, and parents track developmental progress, generate AI-powered IEP objectives, and visualize longitudinal assessment data — all in one place.

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma-5.22-2D3748)](https://prisma.io)
[![Ollama](https://img.shields.io/badge/AI-Ollama%20%7C%20gemma4:e4b-green)](https://ollama.com)

---

## 🚀 Demo

**Live URL:** [https://safe-harbor-demo.vercel.app](https://safe-harbor-demo.vercel.app) *(deploy yours below)*

### One-Click Demo Login

| Profile | Email | Password | Access |
|---------|-------|----------|--------|
| 🩺 **Therapist (BCBA)** | `therapist@demo.com` | `demo123` | Full access to all patients, sessions, AI IEP generation |
| 🍎 **Educator** | `educator@demo.com` | `demo123` | Partial access, can view sessions & assessments |
| 👨‍👩‍👧 **Parent** | `parent.emma@demo.com` | `demo123` | Limited access to own child's data |

---

## 🎥 Demo Flow (3 Minutes)

1. **Login** as `therapist@demo.com`
2. **Dashboard** — see stats, recent sessions, and quick actions
3. **Patient Profile** (Emma Thompson, 5y, ASD Level 2)
   - View 5 clinical sessions with rich notes
   - See **Progression Section** with 3 longitudinal assessments
   - Toggle between Timeline, Line Chart, and Radar Compare views
   - Click **Generate AI Summary** for clinical insights
4. **IEP Agent**
   - Select Emma → click **Generate IEP Objectives**
   - AI reads 60 assessment responses + session notes
   - Chat with the AI: *"How do I adapt this for a non-verbal child?"*
   - Export the full IEP as PDF
5. **Reports** — filter radar chart by patient, view session trends, export CSV

---

## ✨ Key Features

### 🎯 60-Question Developmental Assessment (SHDA-60)
- **6 Dimensions** × **10 Questions** × **5 Age Tiers**
- Auto-detects age tier from date of birth
- Clinical observation prompts under every question
- Scores compute to 0–100 dimension scores for visualization

### 📈 Longitudinal Progression Tracking
- Multiple evaluations per patient preserved over time
- **Timeline view** with sparkline bars and delta badges
- **Line chart** showing all 6 dimensions across evaluations
- **Radar compare** — baseline vs current, any two evaluations
- **AI Progress Report** — compares any 2 evaluations via Ollama

### 🤖 AI IEP Generation (Local / Offline)
- Integrates with **Ollama** (`gemma4:e4b`) for real AI
- Sends full 60-item assessment + clinical notes to the model
- Generates **SMART objectives** with benchmarks, strategies, and mastery criteria
- Falls back to intelligent demo mode when Ollama is offline
- **AI Chat** — ask follow-up questions about generated goals

### 🔐 Role-Based Access Control
| Role | Patients | Sessions | Private Notes | IEP/AI |
|------|----------|----------|---------------|--------|
| Therapist | All | All | ✅ Yes | ✅ Full |
| Educator | Assigned | Non-private only | ❌ No | ✅ View |
| Parent | Own child | Non-private only | ❌ No | ❌ No |

### 📊 Analytics & Reports
- Patient-filtered radar chart (assessment-first, keyword fallback)
- Session trends (line chart), sessions by patient (bar chart)
- Age distribution (pie chart)
- **PDF Export** for IEPs and session history
- **CSV Export** for session reports

---

## 🏗️ Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── api/                # REST API routes (standardized error handling)
│   ├── patients/           # Patient CRUD + assessment
│   ├── sessions/           # Session tracking
│   ├── iep-agent/          # AI IEP generation + chat
│   └── reports/            # Analytics dashboards
├── components/
│   ├── ui/                 # Reusable UI primitives
│   ├── progression/        # Timeline, LineChart, RadarCompare, AIReport
│   └── questionnaire/      # DimensionSection, Review, ProgressBar
├── hooks/
│   └── useAuth.ts          # Auth state + localStorage sync
├── lib/
│   ├── api-utils.ts        # Standardized API error handling
│   ├── questionnaire.ts    # 60 questions, scoring, age tiers
│   ├── analytics.ts        # Radar data computation
│   ├── pdf.ts              # jsPDF export utilities
│   └── seed.ts             # Complete demo data (3 patients, 15 sessions, 9 assessments)
├── types/
│   └── index.ts            # Shared TypeScript interfaces
└── generated/prisma/       # Prisma client (SQLite)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Database | SQLite + Prisma 5 |
| Charts | Recharts |
| PDF | jsPDF + jspdf-autotable |
| AI | Ollama (local) / Demo fallback |
| Icons | Lucide React |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- [Ollama](https://ollama.com) installed (optional, for real AI)
- `gemma4:e4b` model pulled: `ollama pull gemma4:e4b`

### 1. Clone & Install
```bash
git clone <repo-url>
cd individual-profile
npm install
```

### 2. Setup Database
```bash
npx prisma migrate dev --name init
npm run db:seed
```

### 3. Configure Environment
```bash
cp .env.example .env.local
# Edit .env.local if Ollama runs on a non-default URL
```

### 4. Run Dev Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and login with any demo account above.

---

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import on Vercel
3. Set build command: `npm run build`
4. Add environment variables from `.env.example`
5. For SQLite persistence on Vercel, use Vercel Postgres or Neon (see `prisma/schema.prisma`)

---

## 🧪 Running Without Ollama

The app works fully without AI:
- IEP generation falls back to a **smart demo template**
- AI Chat provides **contextual fallback responses**
- All progression tracking, assessments, and PDF exports work normally

---

## 📝 License

MIT License — built for hackathons and clinical research.

---

> **Built with ❤️ for BCBAs, educators, and the families they serve.**
