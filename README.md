# Sentry.New - Next.js 15 Template

A production-ready Next.js 15 template with Sentry branding, shadcn/ui components, and Sentry monitoring integration. Built for the [Sentry.New](https://sentry.new) application builder to help you ship faster.

## Features

- **Next.js 15** with App Router
- **Tailwind CSS v4** for styling
- **shadcn/ui** components pre-installed (button, card, input, label, select, dialog, dropdown-menu, badge, avatar, sonner)
- **Sentry brand colors** with purple and pink accent theming
- **TypeScript** for type safety
- **Dark mode** support with next-themes

## Quick Start

Use with degit to quickly scaffold a new project:

```bash
npx degit codyde/template-nextjs15 my-app
cd my-app
npm install
npm run dev
```

Or manually:

```bash
git clone https://github.com/codyde/template-nextjs15.git
cd template-nextjs15
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Included Components

This template comes with the following shadcn/ui components:

- Button
- Card
- Input
- Label
- Select
- Dialog
- Dropdown Menu
- Badge
- Avatar
- Sonner (Toast notifications)

Add more components with:

```bash
npx shadcn@latest add [component-name]
```

## Sentry Integration

This template is designed to work seamlessly with Sentry monitoring. To add Sentry to your project:

```bash
npx @sentry/wizard@latest -i nextjs
```

The wizard will guide you through:
- Creating a Sentry account (if needed)
- Setting up your project
- Configuring error tracking and performance monitoring
- Adding the necessary configuration files

For manual setup, check out the [Sentry Next.js documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/).

## Color Scheme

The template uses Sentry's brand colors:
- **Primary**: Purple (#6C5FC7 / oklch(0.52 0.15 285))
- **Accent**: Pink (#E1567C / oklch(0.65 0.18 340))
- **Background**: Light purple tints for light mode, dark purple for dark mode

## What's Included

- ⚡ **Next.js 15** with App Router and Server Components
- 🎨 **Tailwind CSS v4** with custom Sentry color scheme
- 🧩 **10+ shadcn/ui components** pre-installed
- 🔒 **TypeScript** for type safety
- 🌙 **Dark mode** support with next-themes
- 📊 **Sentry-ready** with integration examples
- 🎯 **Production optimized** and ready to deploy

## Learn More

- [Sentry.New Documentation](https://sentry.new)
- [Sentry Documentation](https://docs.sentry.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
