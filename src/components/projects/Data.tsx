import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'AI Portfolio | Interactive AI-Powered Resume',
    description:
      'Developed a dynamic AI-based portfolio enabling recruiters to interact with a chatbot and inquire about my projects, experience, skills, and resume in real time.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Vercel',
      'LLM Integration',
      'AI Chatbot'
    ],
    date: '2025',
    category: 'AI-Powered Web Application',
  },
  {
    title: 'TalkWithYourDB | Natural Language Database Query Tool',
    description:
      'Engineered a web application that allows users to connect to any database via connection string and query it using natural language.',
    techStack: [
      'Next.js',
      'TypeScript',
      'AI Prompt Engineering',
      'SQL Generation',
      'Database Connectivity'
    ],
    date: '2025',
    category: 'AI-Powered Database Tool',
  },
  {
    title: 'Microservices E-commerce Platform',
    description:
      'A comprehensive microservices-based e-commerce application built with Spring Boot that handles user management, order processing, and inventory control. Features include user authentication, product catalog management, order lifecycle management, payment integration, and real-time inventory tracking. Designed with scalability and fault tolerance in mind.',
    techStack: [
      'Spring Boot',
      'Microservices Architecture',
      'Java',
      'Spring Security',
      'Spring Data JPA',
      'MySQL',
      'Redis',
      'Docker',
      'Kubernetes',
      'RESTful APIs',
      'JWT Authentication'
    ],
    date: '2024',
    category: 'Microservices Architecture',
  },
  {
    title: 'StudRoll - Attendance Proctoring System',
    description:
      'An intelligent attendance monitoring system for educational institutions that captures Google Meet attendance data through browser extensions and provides comprehensive attendance analytics. Features automated attendance tracking, CSV data processing, real-time notifications for low attendance, and a user-friendly dashboard for students and administrators.',
    techStack: [
      'React',
      'Flask',
      'Python',
      'JavaScript',
      'Chrome Extension',
      'CSV Processing',
      'Email Notifications',
      'SQLite',
      'Bootstrap',
      'Chart.js'
    ],
    date: '2022',
    category: 'Web Application',
  },
  {
    title: 'LDF to DBC Converter',
    description:
      'A specialized tool for automotive software development that converts LIN Description Format (LDF) files to CAN Database Format (DBC). Provides RESTful API endpoints using Spring Boot for seamless integration into automotive development workflows. Essential for vehicle network configuration and CAN bus communication setup.',
    techStack: [
      'Python',
      'Spring Boot',
      'Java',
      'RESTful APIs',
      'LIN Protocol',
      'CAN Protocol',
      'File Processing',
      'JSON',
      'Swagger',
      'Maven'
    ],
    date: '2023',
    category: 'Automotive Tools',
  },
];

// Export projects in the format expected by the new AllProjects component
export const projects = PROJECT_CONTENT.map(project => ({
  title: project.title,
  description: project.description,
  category: project.category,
  tools: project.techStack.map(tech => ({ name: tech })),
  date: project.date,
}));

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
