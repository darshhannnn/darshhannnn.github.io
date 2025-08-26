# Personal Portfolio Website

## Overview

This is a modern, responsive personal portfolio website built with React and TypeScript. The application showcases a developer's skills, projects, and experience through an elegant single-page design. It features smooth scrolling navigation, responsive layouts, and interactive components for contact forms and project displays.

The portfolio includes sections for hero introduction, about me, project showcase, skills display, contact form, and footer navigation. The design emphasizes clean aesthetics with a professional look using a neutral color scheme and modern typography.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript for type safety and modern development patterns.

**UI Components**: shadcn/ui component library built on Radix UI primitives, providing accessible and customizable components. This choice ensures consistent design patterns and reduces development time while maintaining high accessibility standards.

**Styling**: Tailwind CSS for utility-first styling with CSS custom properties for theme management. The design system uses HSL color values for better color manipulation and supports both light themes through CSS variables.

**State Management**: React Query (TanStack Query) for server state management and caching. Local component state is managed with React hooks for UI interactions.

**Routing**: Wouter for lightweight client-side routing, chosen over React Router for its minimal footprint in what appears to be a single-page application.

**Build System**: Vite for fast development and optimized production builds, with support for TypeScript, React, and modern JavaScript features.

### Backend Architecture

**Server Framework**: Express.js with TypeScript for the REST API backend.

**Database Layer**: Drizzle ORM with PostgreSQL support, configured for schema-first development. The ORM provides type-safe database queries and migrations.

**Session Management**: connect-pg-simple for PostgreSQL-based session storage, indicating user authentication capabilities.

**Development Setup**: Custom Vite integration for serving both frontend and backend in development, with hot module replacement support.

### Data Storage

**Database**: PostgreSQL with Neon serverless driver for cloud-native database access.

**ORM**: Drizzle ORM for type-safe database operations with schema definitions in TypeScript.

**Schema Management**: Centralized schema definitions in the shared directory, allowing both frontend and backend to use the same type definitions.

**Validation**: Zod for runtime type validation, integrated with Drizzle for schema validation.

### Development Workflow

**Monorepo Structure**: Client, server, and shared code organized in separate directories with shared type definitions.

**Type Safety**: Full TypeScript coverage across frontend, backend, and shared utilities.

**Path Aliases**: Configured absolute imports for cleaner code organization (@/ for client components, @shared/ for shared utilities).

**Error Handling**: Custom error overlay for development and structured error responses in production.

## External Dependencies

**UI Framework**: Radix UI primitives for accessible component foundations

**Database**: Neon Database serverless PostgreSQL for cloud-native data storage

**Styling**: Tailwind CSS for utility-first styling approach

**Form Handling**: React Hook Form with Hookform Resolvers for form validation

**Date Handling**: date-fns for date manipulation and formatting

**Icons**: Lucide React for consistent iconography

**Development Tools**: Replit-specific plugins for enhanced development experience in the Replit environment

**Build Tools**: esbuild for backend bundling and Vite for frontend optimization

**Typography**: Google Fonts integration with Inter, Open Sans, and other web fonts for professional typography