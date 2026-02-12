// @/app/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const HomePage = () => {
  const techStack = {
    core: [
      { name: "Next.js", description: "Fullstack React framework with SSR, API Routes, and RSC" }
    ],
    frontend: [
      { name: "TailwindCSS", description: "Utility-first CSS framework" },
      { name: "Radix UI", description: "Accessible UI primitives" },
      { name: "shadcn/ui", description: "Reusable components" },
      { name: "GSAP", description: "High-performance animations" },
      { name: "Storybook", description: "Component development environment" }
    ],
    state: [
      { name: "TanStack Query", description: "Server state management" },
      { name: "Zustand", description: "Lightweight state management" },
      { name: "React Hook Form", description: "Form state management" },
      { name: "Zod", description: "TypeScript-first validation" }
    ],
    backend: [
      { name: "NextAuth", description: "Authentication for Next.js" },
      { name: "MongoDB Atlas", description: "Cloud database service" },
      { name: "Mongoose", description: "MongoDB ODM library" },
      { name: "Axios", description: "HTTP client" },
      { name: "Scalar", description: "Interactive API documentation" }
    ],
    quality: [
      { name: "Biome", description: "Linting and formatting" },
      { name: "Vitest", description: "Unit testing framework" },
      { name: "Playwright", description: "E2E testing framework" },
      { name: "Sentry", description: "Error monitoring" }
    ],
    devops: [
      { name: "Vercel", description: "Deployment platform" }
    ]
  }

  const phantomMeaning = [
    { letter: "P", word: "Performance", description: "Optimized for speed and scalability" },
    { letter: "H", word: "Headless", description: "Modular and API-driven architecture" },
    { letter: "A", word: "Animation", description: "Smooth, high-performance animations" },
    { letter: "N", word: "Next.js", description: "Core framework for modern web apps" },
    { letter: "T", word: "TailwindCSS", description: "Utility-first CSS framework" },
    { letter: "O", word: "Observable State", description: "Efficient state management" },
    { letter: "M", word: "Maintainability", description: "Clean, scalable codebase" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="mb-4">
            Version 2.0
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            PHANTOM Stack
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            by Agoy
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A powerful Next.js fullstack starter-kit with everything you need to build modern, scalable web applications
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              View Docs
            </Button>
          </div>
        </div>

        {/* What is PHANTOM */}
        <div className="max-w-5xl mx-auto pt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            What is PHANTOM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {phantomMeaning.map((item) => (
              <Card key={item.letter} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{item.letter}</span>
                    </div>
                    <CardTitle className="text-lg">{item.word}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center pt-16 pb-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Build?</CardTitle>
              <CardDescription className="text-base">
                Start your next project with PHANTOM Stack and experience the perfect balance of performance, flexibility, and maintainability.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4 justify-center">
              <Button size="lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                API Documentation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;