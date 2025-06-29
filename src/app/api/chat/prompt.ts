// Load the entire system prompt from environment variable
const SYSTEM_PROMPT_CONTENT = process.env.SYSTEM_PROMPT_CONTENT;

if (!SYSTEM_PROMPT_CONTENT) {
  throw new Error('SYSTEM_PROMPT_CONTENT environment variable is not set. Please check your .env file.');
}

export const SYSTEM_PROMPT = {
  role: 'system',
  content: SYSTEM_PROMPT_CONTENT,
};
