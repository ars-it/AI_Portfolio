# Aravind S - Portfolio

An interactive AI-powered portfolio built with Next.js, featuring an AI chatbot that can answer questions about my background, projects, and skills.

## Features

- 🤖 **AI Chatbot**: Interactive chat interface with AI-powered responses
- 📱 **Responsive Design**: Modern, mobile-friendly interface
- 🎨 **Beautiful UI**: Clean design with smooth animations
- 📊 **Project Showcase**: Detailed project presentations with images
- 🔗 **Social Links**: Easy access to professional profiles

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **AI**: OpenAI GPT-4, Vercel AI SDK
- **Styling**: Tailwind CSS, Framer Motion
- **Deployment**: Vercel

## Projects Featured

- **English2Query**: AI-powered natural language to database query converter
- **Microservices E-commerce Platform**: Spring Boot microservices architecture
- **StudRoll**: Attendance monitoring system with Chrome extension
- **LDF to DBC Converter**: Automotive protocol conversion tool

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ars-it/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp env.example .env.local

# Edit .env.local and add your OpenAI API key
# The SYSTEM_PROMPT_CONTENT is already included in the example file
# You can modify it with your own personal information
```

4. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Environment Variables

The portfolio uses environment variables to keep sensitive information secure:

- `OPENAI_API_KEY`: Your OpenAI API key for the AI chatbot
- `SYSTEM_PROMPT_CONTENT`: The entire system prompt containing your personal information

**Security Note**: The `SYSTEM_PROMPT_CONTENT` contains all your personal information, background, and projects. This is kept in the `.env.local` file (which is gitignored) to prevent it from being exposed in the repository.

## Contact

- **LinkedIn**: [Aravind S](https://www.linkedin.com/in/ars-it/)
- **GitHub**: [@ars-it](https://github.com/ars-it)
- **Twitter**: [@aravindddddd](https://x.com/aravindddddd)
- **Instagram**: [@0.5wind](https://www.instagram.com/0.5wind/)

## License

This project is open source and available under the [MIT License](LICENSE).
