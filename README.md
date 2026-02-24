# manasseh.dev

Personal website and blog for Manasseh Changachirere — Software Engineer and Founder.

## About Me

I'm a software engineer and founder based in Harare, Zimbabwe. I'm currently the founder of **Nextsoft**, where we build software and infrastructure for Africa, and **Piro LLC**.

Outside of coding, I study Christian theology, run to stay sharp, and am learning to play the piano.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router & Standalone mode)
- **Runtime**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Local Development

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.

### Installation

```bash
bun install
```

### Running Development Server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Self-Hosting (Docker)

The project is configured for standalone output, making it easy to deploy via Docker.

1. **Build and run with Docker Compose**:

```bash
docker-compose up --build
```

The application will be available at `http://localhost:3000`.

### Manual Production Build

To build and run without Docker:

```bash
# Build the application
bun run build

# Start the production server
bun start
```

## License

feel free to explore and use the code for inspiration.
