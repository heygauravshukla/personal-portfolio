---
title: Shortly - URL Shortener
publishDate: 2025-02-06 22:03:00
img: /images/preview-shortly-url-shortener.webp
img_alt: Preview of Shortly - URL Shortener
description: |
  A web application that converts long URLs into short, shareable links. Built with a focus on speed, simplicity, and mobile-first responsiveness.
live_site_url: https://shortly-url-shortener-heygauravshukla.netlify.app
source_code_url: https://github.com/heygauravshukla/shortly-url-shortener
tags:
  - React
  - Next.js
  - Tailwind CSS
  - Shadcn UI
---

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- Shorten any valid URL.
- See a list of their shortened links, even after refreshing the browser.
- Copy the shortened link to their clipboard in a single click.
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty.
  - The submitted URL has already been shortened.
  - The submitted URL is a previously generated shortened link.

## Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Open-source component library
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Spoo.me API](https://spoo.me/api) - API for URL shortening
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## What I learned

This project enhanced my understanding of several key concepts, including:

- Ensuring type safety and improving code reliability through TypeScript.
- Leveraging Shadcn UI to create a reusable and maintainable component library.
- Utilizing the `cn` utility function to apply conditional classes efficiently in Tailwind CSS.
- Implementing SVG icons as React components to enable dynamic property modifications, such as hover states.
- Employing the `localStorage` object to persist shortened URLs as key-value pairs in the browser.
