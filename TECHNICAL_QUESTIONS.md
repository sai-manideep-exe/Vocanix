# 🔥 Vocanix - Technical Interview Questions Guide

Yo! Here's the complete breakdown of ALL possible technical questions that could be asked about this project. We're talking deep dive questions, architecture stuff, and everything in between.

---

## 🏗️ **ARCHITECTURE & PROJECT STRUCTURE**

1. **Why did you choose Next.js 15 with App Router over Pages Router?**
2. **Explain the folder structure - why use route groups like `(auth)` and `(root)`?**
3. **What's the difference between client and server components in your app?**
4. **How does the App Router handle authentication differently than Pages Router?**
5. **Why separate Firebase client and admin configurations?**
6. **What's the purpose of the `lib/actions` folder structure?**
7. **How do you handle type safety across client and server boundaries?**
8. **Why use route groups `(auth)` and `(root)` instead of regular folders?**
9. **Explain the difference between `app/layout.tsx` and `app/(root)/layout.tsx`**
10. **How does Next.js handle the parallel data fetching in `app/(root)/page.tsx`?**

---

## 🔐 **AUTHENTICATION & SECURITY**

1. **Walk me through the complete authentication flow from sign-up to session management**
2. **Why use Firebase Auth on client-side but Firebase Admin on server-side?**
3. **How do session cookies work in your app? Explain the `setSessionCookie` function**
4. **What security measures are in place for the session cookie? (httpOnly, secure, sameSite)**
5. **Why is `NEXT_PUBLIC_` prefix used for some env vars but not others?**
6. **How do you prevent unauthorized access to protected routes?**
7. **What happens if a user tries to access `/interview` without being authenticated?**
8. **Explain the difference between `getCurrentUser()` and `isAuthenticated()`**
9. **Why verify the session cookie on every server request?**
10. **How would you handle token refresh if sessions expired?**
11. **What's the security risk of having `ignoreBuildErrors: true` in production?**
12. **How do you handle Firebase private key in environment variables?**
13. **Why use `replace(/\\n/g, "\n")` for the private key?**
14. **What's the difference between Firebase Auth tokens and session cookies?**

---

## 🗄️ **DATABASE & FIRESTORE**

1. **Why choose Firestore over other databases?**
2. **Explain your Firestore collection structure (users, interviews, feedback)**
3. **How do you handle Firestore queries with `where` clauses?**
4. **What's the difference between `db.collection().doc().get()` and `db.collection().add()`?**
5. **How would you optimize the `getLatestInterviews` query for performance?**
6. **What Firestore indexes might be needed for your queries?**
7. **How do you handle Firestore document existence checks?**
8. **Explain the data flow when creating an interview vs creating feedback**
9. **Why store `techstack` as an array in Firestore?**
10. **How would you handle pagination for the interviews list?**
11. **What happens if a Firestore query fails? How do you handle errors?**
12. **Why use `finalize: true` flag in interviews?**
13. **How would you implement real-time updates for interview status?**

---

## 🎤 **VAPI & VOICE AI INTEGRATION**

1. **What is VAPI and why did you choose it for voice interviews?**
2. **Explain the VAPI event system - `call-start`, `call-end`, `message`, etc.**
3. **How does the `Agent` component manage VAPI lifecycle?**
4. **What's the difference between `transcriptType: 'partial'` and `'final'`?**
5. **How do you handle VAPI errors and edge cases?**
6. **Explain the two different VAPI workflows: `generate` vs `interview`**
7. **How does the interviewer assistant configuration work?**
8. **Why use different voice providers (11labs) and transcriber providers (deepgram)?**
9. **How do you pass dynamic variables to VAPI workflows?**
10. **What happens if the VAPI call disconnects unexpectedly?**
11. **How would you implement call recording functionality?**
12. **Explain the message types: `TRANSCRIPT`, `FUNCTION_CALL`, `FUNCTION_CALL_RESULT`**
13. **How do you clean up VAPI event listeners in the `useEffect` cleanup?**

---

## 🤖 **AI & GEMINI INTEGRATION**

1. **Why use Google Gemini 2.0 Flash for question generation?**
2. **Explain the `generateText` vs `generateObject` functions - when to use each?**
3. **How does structured output work with Zod schemas?**
4. **Walk through the feedback generation prompt engineering**
5. **How do you ensure the AI returns valid JSON for questions?**
6. **What's the purpose of the system prompt in feedback generation?**
7. **How would you handle AI API rate limiting?**
8. **Explain the feedback schema structure and why it's structured that way**
9. **How do you prevent prompt injection attacks?**
10. **What happens if the AI returns malformed data?**
11. **How would you implement streaming responses for better UX?**
12. **Why use `structuredOutputs: false` in some cases?**
13. **How do you format the transcript for AI analysis?**

---

## ⚛️ **REACT & STATE MANAGEMENT**

1. **Why use React Hook Form instead of controlled components?**
2. **How does `zodResolver` integrate with React Hook Form?**
3. **Explain the form validation flow in `AuthForm`**
4. **How do you handle form state across client and server?**
5. **Why use `useState` for call status instead of a state management library?**
6. **Explain the `messages` state management in the `Agent` component**
7. **How do you prevent memory leaks with VAPI event listeners?**
8. **Why use `useEffect` dependencies array for cleanup?**
9. **How would you implement optimistic updates for better UX?**
10. **What's the difference between client and server components in React 19?**
11. **How do you handle loading states during async operations?**
12. **Explain the conditional rendering patterns used throughout the app**

---

## 🎨 **UI/UX & STYLING**

1. **Why use Tailwind CSS 4 with the new `@theme` syntax?**
2. **Explain the custom color system and design tokens**
3. **How does `cn()` utility function work for className merging?**
4. **Why use shadcn/ui components?**
5. **How do you handle dark mode (I see `className="dark"` in root layout)?**
6. **Explain the responsive design patterns used**
7. **How does the `animate-speak` animation work for the AI interviewer?**
8. **Why use Next.js `Image` component instead of regular `<img>` tags?**
9. **How do you handle loading states for async components?**
10. **Explain the hover effects and transitions on interview cards**
11. **How does the tech icon fetching and fallback system work?**
12. **Why use `dayjs` for date formatting instead of native Date?**

---

## 🔄 **DATA FLOW & API ROUTES**

1. **Explain the complete flow from interview generation to feedback display**
2. **How does the `/api/vapi/generate` route work?**
3. **Why use Server Actions (`'use server'`) instead of API routes?**
4. **What's the difference between Server Actions and API Routes in Next.js 15?**
5. **How do you handle errors in Server Actions?**
6. **Explain the data flow: Client → Server Action → Firestore → Response**
7. **How would you implement API rate limiting?**
8. **What happens if a Server Action throws an error?**
9. **How do you handle CORS if needed?**
10. **Explain the interview creation flow step by step**

---

## 🧪 **TESTING & QUALITY**

1. **How would you test the authentication flow?**
2. **How would you test Server Actions?**
3. **How would you mock Firebase in tests?**
4. **How would you test the VAPI integration?**
5. **What testing strategy would you use for AI-generated content?**
6. **How would you test form validation?**
7. **Why is `ignoreBuildErrors: true` dangerous in production?**
8. **How would you implement error boundaries?**
9. **What monitoring and logging would you add?**
10. **How would you test the feedback generation accuracy?**

---

## 🚀 **PERFORMANCE OPTIMIZATION**

1. **How does Next.js 15 optimize server components?**
2. **Explain the `Promise.all` usage in the home page**
3. **How would you implement code splitting?**
4. **How do you optimize images with Next.js Image component?**
5. **What caching strategies would you implement?**
6. **How would you optimize Firestore queries?**
7. **How would you implement pagination for better performance?**
8. **What's the impact of using `await` in parallel vs sequential?**
9. **How would you optimize the tech icon fetching?**
10. **How would you implement lazy loading for components?**

---

## 🐛 **ERROR HANDLING & EDGE CASES**

1. **How do you handle Firebase authentication errors?**
2. **What happens if VAPI call fails mid-interview?**
3. **How do you handle network failures during feedback generation?**
4. **What if a user tries to access feedback for an interview they didn't take?**
5. **How do you handle duplicate user creation?**
6. **What happens if the AI returns invalid feedback data?**
7. **How do you handle missing environment variables?**
8. **What if a Firestore document doesn't exist?**
9. **How do you handle race conditions in async operations?**
10. **What happens if session cookie is tampered with?**

---

## 🔧 **TYPESCRIPT & TYPE SAFETY**

1. **How do you maintain type safety between client and server?**
2. **Explain the type definitions in `types/index.d.ts`**
3. **How do you handle type inference with Zod schemas?**
4. **Why use `z.infer<typeof formSchema>`?**
5. **How do you type Server Action parameters and returns?**
6. **Explain the `RouteParams` interface and why it uses `Promise`**
7. **How do you handle optional types vs required types?**
8. **What's the purpose of the VAPI type definitions?**
9. **How would you improve type safety in the codebase?**
10. **Why use `as User` type assertion in some places?**

---

## 🌐 **DEPLOYMENT & DEVOPS**

1. **How would you deploy this to Vercel?**
2. **What environment variables are needed for production?**
3. **How do you handle Firebase credentials in production?**
4. **What's the deployment process for a Next.js app?**
5. **How would you set up CI/CD?**
6. **How do you handle database migrations in Firestore?**
7. **What monitoring tools would you use?**
8. **How would you handle rollbacks?**
9. **What's the difference between dev and prod Firebase configs?**
10. **How would you implement feature flags?**

---

## 🔍 **CODE QUALITY & BEST PRACTICES**

1. **Why use `'use client'` and `'use server'` directives?**
2. **What's the purpose of the `FormField` component abstraction?**
3. **How do you handle code reusability across components?**
4. **Why separate constants into a separate file?**
5. **How would you refactor the `Agent` component if it grows?**
6. **What's the benefit of using utility functions like `getTechLogos`?**
7. **How do you handle prop drilling vs context?**
8. **Why use async server components?**
9. **How would you implement proper error boundaries?**
10. **What code organization patterns do you follow?**

---

## 🎯 **FEATURE-SPECIFIC QUESTIONS**

1. **How does the interview generation workflow work?**
2. **Explain the feedback scoring system (0-100 scale)**
3. **How are the 5 feedback categories determined?**
4. **How does the tech stack icon mapping work?**
5. **Why randomize interview cover images?**
6. **How does the "Take an Interview" vs "Your Interviews" distinction work?**
7. **What's the purpose of the `finalize` flag?**
8. **How would you implement interview retake functionality?**
9. **How would you add interview sharing features?**
10. **How would you implement interview analytics/dashboard?**

---

## 🔐 **SECURITY DEEP DIVE**

1. **How do you prevent XSS attacks?**
2. **How do you prevent CSRF attacks?**
3. **How do you sanitize user inputs?**
4. **How do you prevent SQL injection (even though using Firestore)?**
5. **How do you handle sensitive data in client components?**
6. **What's the security model for Firestore rules?**
7. **How do you prevent unauthorized data access?**
8. **How would you implement rate limiting?**
9. **How do you handle password security (even though Firebase handles it)?**
10. **What security headers would you add?**

---

## 🧩 **INTEGRATION QUESTIONS**

1. **How does VAPI integrate with your Firebase backend?**
2. **How does Gemini AI integrate with your data flow?**
3. **How do external APIs (tech icons) affect performance?**
4. **How would you handle third-party API failures?**
5. **What's the integration pattern between client VAPI and server actions?**
6. **How do you sync data between VAPI and Firestore?**
7. **How would you implement webhook handlers for VAPI?**
8. **How do you handle async operations across multiple services?**

---

## 💡 **ARCHITECTURE DECISIONS**

1. **Why use Firebase instead of a traditional backend?**
2. **Why use VAPI instead of building your own voice AI?**
3. **Why use Gemini instead of OpenAI?**
4. **Why use Server Actions instead of REST API?**
5. **Why use Zod for validation instead of Yup or Joi?**
6. **Why use React Hook Form instead of Formik?**
7. **Why use Tailwind instead of CSS modules or styled-components?**
8. **Why use shadcn/ui instead of Material UI or Chakra?**
9. **Why use Firestore instead of PostgreSQL or MongoDB?**
10. **What trade-offs did you make in the architecture?**

---

## 🚨 **BUGS & ISSUES TO DISCUSS**

1. **There's a typo in `auth.action.ts` line 26: `sucesss` instead of `success`**
2. **Why is `ignoreBuildErrors: true` set in production config?**
3. **The `getLatestInterviews` query uses `!=` which might not work as expected**
4. **Missing error handling in some async operations**
5. **The `FormField` component has incomplete TypeScript generics**
6. **Some console.log statements left in production code**
7. **The `DisplayTechIcons` component has a syntax error in className**
8. **Missing loading states in some components**
9. **No error boundaries implemented**
10. **The feedback page has a console.log that should be removed**

---

## 🎓 **SCENARIO-BASED QUESTIONS**

1. **A user reports their interview feedback is missing. How do you debug?**
2. **VAPI calls are failing randomly. How do you investigate?**
3. **The AI is generating inappropriate questions. How do you fix it?**
4. **Users complain about slow page loads. How do you optimize?**
5. **Firestore queries are timing out. What do you do?**
6. **Session cookies are expiring too quickly. How do you fix it?**
7. **Tech icons are not loading for some technologies. How do you handle it?**
8. **A user can see another user's interviews. How do you fix the security issue?**
9. **The feedback scores seem inaccurate. How do you improve the AI prompt?**
10. **The app crashes when VAPI disconnects unexpectedly. How do you handle it?**

---

## 🔮 **SCALING & FUTURE IMPROVEMENTS**

1. **How would you scale this to 1 million users?**
2. **How would you implement real-time collaboration features?**
3. **How would you add video interview capabilities?**
4. **How would you implement A/B testing for AI prompts?**
5. **How would you add analytics and tracking?**
6. **How would you implement caching strategies?**
7. **How would you add multi-language support?**
8. **How would you implement interview scheduling?**
9. **How would you add social features (sharing, leaderboards)?**
10. **How would you implement premium features and subscriptions?**

---

## 📚 **FUNDAMENTAL CONCEPTS**

1. **Explain Server Components vs Client Components in Next.js 15**
2. **What's the difference between Server Actions and API Routes?**
3. **How does React 19 differ from React 18?**
4. **Explain the Next.js App Router routing system**
5. **How does Firebase Admin SDK differ from Firebase Client SDK?**
6. **Explain the difference between Firestore and Realtime Database**
7. **How does Zod schema validation work?**
8. **Explain React Hook Form's uncontrolled component approach**
9. **How does Next.js Image optimization work?**
10. **Explain TypeScript's type inference and generics**

---

**That's the full breakdown, bestie! 🎉 These questions cover everything from basic concepts to deep architecture decisions. Study up and you'll be ready for any technical interview about this project!**

