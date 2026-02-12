# 👻 PHANTOM Stack v2

**PHANTOM Stack v2 by Yogawan Aditya Pratama (Agoy)** - A modern, powerful, and opinionated full-stack development framework for building high-performance web applications.

## 🚀 Stack Overview

PHANTOM is an acronym representing the core principles and technologies that power this stack:

| Principle | Description | Key Technology |
|-----------|-------------|----------------|
| **P** - Performance | Optimized for speed and efficiency | [Next.js 16](https://nextjs.org) with Turbopack |
| **H** - Headless Architecture | Decoupled, flexible component system | [Radix UI](https://radix-ui.com) primitives |
| **A** - Animation | Smooth, professional animations | [GSAP](https://gsap.com) |
| **N** - NextJS | React-based production framework | [Next.js](https://nextjs.org) App Router |
| **T** - TailwindCSS | Utility-first styling approach | [TailwindCSS](https://tailwindcss.com) |
| **O** - Observable State | Reactive state management | Built-in React hooks & patterns |
| **M** - Maintainability | Clean, scalable architecture | TypeScript + best practices |

### Additional Technologies

- 🎨 **UI Kit**: [Shadcn UI](https://ui.shadcn.com) - Re-usable components built with Radix UI and Tailwind
- 📚 **Component Docs**: [Storybook](https://storybook.js.org) - UI component explorer
- 📝 **API Documentation**: [Scalar](https://scalar.com) - Beautiful API references
- 🚀 **Deployment**: [Vercel](https://vercel.com) - Platform for frontend frameworks

## ✨ Features

- ⚡ **Lightning Fast** - Built on Next.js 16 with Turbopack
- 🎯 **Type Safe** - Full TypeScript support
- 🎨 **Beautiful UI** - Pre-built components with Shadcn UI
- 📱 **Responsive** - Mobile-first design with TailwindCSS
- 🔐 **Authentication** - Built-in auth system
- 📖 **API Documentation** - Interactive API docs with Scalar
- 🧩 **Component Library** - Documented components with Storybook
- ♿ **Accessible** - WCAG compliant with Radix UI primitives

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- MongoDB (local or cloud)

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Storybook
npm run storybook    # Start Storybook dev server
npm run build-storybook  # Build Storybook for production
```

## 📁 Project Structure

```
phantom-stack/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   └── auth/         # Authentication endpoints
│   ├── scalar/           # API documentation
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   └── ui/              # Shadcn UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
│   ├── mongodb.ts       # Database connection
│   └── utils.ts         # Helper functions
├── models/              # MongoDB models
├── public/              # Static assets
└── stories/             # Storybook stories
```

## 🎨 UI Components

This project uses **Shadcn UI** - a collection of re-usable components built with:
- **Radix UI** for accessibility and behavior
- **TailwindCSS** for styling
- **TypeScript** for type safety

### Available Components

Over 40+ components including:
- Forms (Input, Select, Checkbox, Radio, etc.)
- Overlays (Dialog, Popover, Tooltip, etc.)
- Navigation (Tabs, Menu, Breadcrumb, etc.)
- Feedback (Alert, Toast, Progress, etc.)
- Data Display (Table, Card, Badge, etc.)

View all components in Storybook: `npm run storybook`

## 📖 API Documentation

Interactive API documentation is available at `/scalar/docs` powered by Scalar.

**Current Endpoints:**

### Authentication

- `POST /api/auth/create-account` - Create new user account
- `POST /api/auth/login` - User login

Access the documentation: [http://localhost:3000/scalar/docs](http://localhost:3000/scalar/docs)

## 🎭 Animation with GSAP

GSAP (GreenSock Animation Platform) is included for professional animations:

```typescript
import { gsap } from 'gsap'

// Example animation
gsap.to('.element', {
  x: 100,
  duration: 1,
  ease: 'power2.out'
})
```

## 🗄️ Database

MongoDB is used for data persistence. Configure your connection in `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string
```

## 🚀 Deployment

This project is optimized for deployment on **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Yogawan Aditya Pratama (Agoy)**

PHANTOM Stack v2 - A philosophy of building modern web applications with focus on:
- **Performance** - Fast, optimized experiences
- **Headless Architecture** - Flexible, composable systems
- **Animation** - Delightful interactions
- **NextJS** - Powerful React framework
- **TailwindCSS** - Efficient styling
- **Observable State** - Reactive data flow
- **Maintainability** - Long-term code quality

---

Built with ❤️ using the PHANTOM Stack v2