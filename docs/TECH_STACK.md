# Tech Stack Overview

## Core Framework
- **Next.js**: Fullstack React framework dengan fitur seperti App Router, Server-Side Rendering (SSR), dan React Server Components (RSC).

## Frontend UI Layer
- **TailwindCSS**: Framework CSS berbasis utilitas untuk membangun antarmuka modern.
- **Radix UI**: Komponen UI yang dapat diakses dan dapat disesuaikan.
- **shadcn/ui**: Komponen siap pakai berbasis Radix UI dan TailwindCSS.
- **GSAP**: Library animasi untuk membuat efek visual yang menarik.
- **Storybook**: Alat untuk membangun dan menguji komponen UI secara terisolasi.

## State Management & Validation
- **TanStack Query**: Mengelola data server dengan caching dan pembaruan otomatis.
- **Zustand**: State management ringan dan fleksibel.
- **React Hook Form**: Mengelola state dan validasi form dengan efisien.
- **Zod**: Library validasi schema berbasis TypeScript.

## Backend & Data Layer
- **NextAuth**: Library autentikasi untuk Next.js.
- **MongoDB Atlas**: Database cloud yang fleksibel dan skalabel.
- **Mongoose**: ODM untuk MongoDB dengan validasi schema.
- **Axios**: HTTP client untuk melakukan permintaan API.
- **Scalar**: Alat dokumentasi interaktif untuk API.

## Quality & Observability
- **Biome**: Linter dan formatter untuk menjaga konsistensi kode.
- **Vitest**: Framework pengujian unit yang cepat.
- **Playwright**: Framework pengujian end-to-end untuk kompatibilitas lintas browser.
- **Sentry**: Platform monitoring untuk melacak dan memperbaiki error.

## DevOps & Deployment
- **Vercel**: Platform deployment yang dioptimalkan untuk Next.js dengan fungsi serverless dan caching di edge.