# RestoraX Landing Page - API Contracts & Integration Plan

## Current Implementation Status
**Frontend-Only with Mock Data** ✓
- All components built and functional
- Mock data in `/app/frontend/src/mock.js`
- All sections rendering correctly
- Mobile-first responsive design implemented

---

## Mock Data Structure

### 1. Product Modules (`mockData.modules`)
**Location:** Used in `Modules.jsx` component
**Purpose:** Display 8 core product features of RestoraX
**Fields:**
- `id`: Number (unique identifier)
- `icon`: String (Lucide icon name)
- `title`: String (Turkish)
- `description`: String (Turkish)
- `features`: Array[String] (3 bullet points)

**Current Mock:** 8 modules hardcoded in mock.js

---

### 2. Customer Testimonials (`mockData.testimonials`)
**Location:** Used in `Testimonials.jsx` component
**Purpose:** Display customer reviews and social proof
**Fields:**
- `id`: Number
- `name`: String
- `role`: String (company/position)
- `content`: String (review text)
- `rating`: Number (1-5)

**Current Mock:** 3 testimonials hardcoded

---

### 3. Pricing Plans (`mockData.pricingPlans`)
**Location:** Used in `Pricing.jsx` component
**Purpose:** Display subscription tiers
**Fields:**
- `id`: Number
- `name`: String
- `price`: String
- `period`: String
- `description`: String
- `features`: Array[String]
- `highlighted`: Boolean

**Current Mock:** 3 plans (Başlangıç, Profesyonel, Enterprise)

---

### 4. FAQ Items (`mockData.faqs`)
**Location:** Used in `FAQ.jsx` component
**Purpose:** Display frequently asked questions
**Fields:**
- `id`: Number
- `question`: String
- `answer`: String

**Current Mock:** 6 FAQ items hardcoded

---

### 5. Stats (`mockData.stats`)
**Location:** Used in `Hero.jsx` component
**Purpose:** Display social proof metrics
**Fields:**
- `label`: String
- `value`: String

**Current Mock:** 4 stats (restaurants, orders, branches, satisfaction)

---

### 6. Feature Highlights (`mockData.features`)
**Location:** Ready for use (not yet displayed)
**Purpose:** Additional feature highlights
**Fields:**
- `id`: Number
- `title`: String
- `description`: String
- `icon`: String

**Current Mock:** 4 features

---

## Backend Integration Plan (Future)

### Phase 1: Content Management System
**Endpoints to create:**
```
GET /api/modules - Fetch all product modules
GET /api/testimonials - Fetch customer testimonials
GET /api/pricing-plans - Fetch pricing plans
GET /api/faqs - Fetch FAQ items
GET /api/stats - Fetch homepage stats
```

### Phase 2: Contact & Lead Generation
**Endpoints to create:**
```
POST /api/contact - Submit contact form
POST /api/demo-request - Request demo
POST /api/trial-signup - Start free trial
```

### Phase 3: Authentication (if needed)
**Endpoints to create:**
```
POST /api/auth/register - User registration
POST /api/auth/login - User login
POST /api/auth/logout - User logout
GET /api/auth/me - Get current user
```

---

## Database Schema (Future)

### Collections/Tables:
1. **modules** - Product modules
2. **testimonials** - Customer reviews
3. **pricing_plans** - Subscription tiers
4. **faqs** - FAQ items
5. **contacts** - Contact form submissions
6. **demo_requests** - Demo requests
7. **trial_signups** - Trial signup requests

---

## Frontend-Backend Integration Steps (When Ready)

### Step 1: Create API Service Layer
Create `/app/frontend/src/services/api.js`:
- Axios instance with backend URL
- API functions for each endpoint
- Error handling

### Step 2: Replace Mock Data with API Calls
- Convert components to use `useEffect` + API calls
- Add loading states
- Add error handling
- Keep mock.js as fallback for development

### Step 3: Form Submissions
- Add form validation (React Hook Form + Zod)
- Connect forms to POST endpoints
- Add success/error toasts
- Handle loading states

---

## Notes
- All mock data is in Turkish (professional tone)
- No backend is required for initial preview
- Design is production-grade and scalable
- Mobile-first responsive throughout
- Using Shadcn UI components
- Color scheme: Warm white, stone grays, teal accents
