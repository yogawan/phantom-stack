# 👻 PHANTOM Stack v2

> A modern, blazing-fast full-stack development framework by **Yogawan Aditya Pratama (Agoy)**

## 🚀 What is PHANTOM Stack?

PHANTOM Stack v2 is a carefully curated technology stack designed for building production-ready web applications with optimal developer experience and performance. Each technology is chosen to work seamlessly together, providing a powerful foundation for modern web development.

## 🎯 Stack Components

### **P** - Production Framework
- **Next.js** - The React framework for production with Server-Side Rendering, API Routes, and optimal performance

### **H** - Headless UI Components
- **Radix UI** - Unstyled, accessible, and highly customizable UI primitives

### **A** - Animation Library
- **GSAP** (GreenSock Animation Platform) - Professional-grade animation for the modern web

### **N** - N/A (Placeholder for future additions)

### **T** - Tailwind CSS
- **TailwindCSS** - Utility-first CSS framework for rapid UI development

### **O** - Organized Component System
- **Shadcn UI** - Re-usable components built with Radix UI and Tailwind CSS

### **M** - Module Documentation
- **Storybook** - UI component development environment and documentation

## 📦 Technology Details

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Framework | Next.js | Server-side rendering, routing, and API |
| Styling | TailwindCSS | Utility-first CSS framework |
| UI Primitives | Radix UI | Accessible headless components |
| UI Kit | Shadcn UI | Pre-built styled components |
| Animation | GSAP | High-performance animations |
| Documentation | Storybook | Component library and docs |
| Deployment | Vercel | Optimized hosting platform |

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yogawan/phantom-stack-experimental.git

# Navigate to project directory
cd phantom-stack

# Install dependencies
npm install

# Run development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linting
npm run storybook    # Start Storybook
npm run build-storybook  # Build Storybook
```

## 📁 Project Structure

```
phantom-stack/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── scalar/         # API documentation
│   └── page.tsx        # Main page
├── components/         # React components
│   └── ui/            # Shadcn UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── models/            # Database models
├── public/            # Static assets
├── stories/           # Storybook stories
└── styles/            # Global styles
```

## 🎨 Features

- ⚡ **Lightning Fast** - Next.js 14 with Turbopack
- 🎭 **Beautiful UI** - Pre-configured Shadcn UI components
- 🔒 **Type-Safe** - Full TypeScript support
- 📱 **Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG compliant components
- 🎬 **Smooth Animations** - GSAP integration
- 📚 **Well Documented** - Storybook component library
- 🚀 **Production Ready** - Optimized for Vercel deployment

## 🔧 Tech Stack Details

### Next.js
Next.js provides the foundation with server-side rendering, static site generation, API routes, and automatic code splitting for optimal performance.

### TailwindCSS
Utility-first CSS framework that enables rapid UI development with consistent design patterns and minimal CSS bundle size.

### Radix UI
Unstyled, accessible components that serve as the foundation for building high-quality design systems and web applications.

### Shadcn UI
A collection of re-usable components built using Radix UI and TailwindCSS, offering beautiful, accessible components out of the box.

### GSAP
Industry-leading animation library for creating professional, high-performance animations with simple, powerful syntax.

### Storybook
Development environment for UI components, allowing isolated component development, testing, and documentation.

### Vercel
Optimized hosting platform for Next.js applications with automatic deployments, edge network, and serverless functions.

## 📖 API Documentation

The project includes built-in API documentation using Scalar:

```
http://localhost:3000/scalar/docs
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Yogawan Aditya Pratama (Agoy)**

- GitHub: [@yogawan](https://github.com/yogawan)

## 🙏 Acknowledgments

Special thanks to all the open-source projects that make PHANTOM Stack possible:

- [Next.js Team](https://nextjs.org)
- [Tailwind Labs](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com)
- [Shadcn](https://ui.shadcn.com)
- [GreenSock](https://greensock.com)
- [Storybook Team](https://storybook.js.org)

---

Built with 💜 by Yogawan Aditya Pratama (Agoy)