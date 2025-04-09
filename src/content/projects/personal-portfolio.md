---
title: Personal Portfolio
publishDate: 2025-03-06 10:28:00
img: /projects/preview-personal-portfolio.jpg
img_alt: Preview of Personal Portfolio
description: |
  A personal website to showcase projects and technical expertise. Fully responsive and accessible, with light/dark mode support.
tags:
  - React
  - Next.js
  - Tailwind CSS
  - Shadcn UI
---

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- Select their preferred color scheme (light or dark mode) for an enhanced viewing experience.
- Navigate the website fully using keyboard controls to ensure accessibility.
- Access detailed case studies for each project showcased on the site.

## Screenshot

![Preview of Personal Portfolio](/projects/preview-personal-portfolio.jpg)

## Links

- Source Code: [https://github.com/heygauravshukla/portfolio](https://github.com/heygauravshukla/portfolio)
- Live Site URL: [https://heygauravshukla.netlify.app](https://heygauravshukla.netlify.app)

## Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Open-source component library
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [EmailJS](https://www.emailjs.com/) - Client-side email service
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## What I learned

This project enhanced my understanding of several key concepts, including:

- Integrating third-party services such as EmailJS to implement functional contact forms without requiring a backend or database. For example:
  ```jsx
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      EMAILJS_PUBLIC_KEY
    );
    // Handle success
  } catch (error) {
    // Handle error
  }
  ```
- Leveraging Next.js static site generation (SSG) with dynamic routes (e.g., `app/projects/[slug]/page.tsx`) to create consistent, maintainable project case study pages while minimizing code duplication.
