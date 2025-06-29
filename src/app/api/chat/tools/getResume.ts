import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'This tool provides a link to download my resume.',
  parameters: z.object({}),
  execute: async () => {
    return {
      message: "Here's my resume! You can download it using the link below.",
      downloadLink: "/Aravind_Resume.pdf",
      filename: "Aravind_Resume.pdf"
    };
  },
});
