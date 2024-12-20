import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateStudyPlan(preferences: UserPreferences) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Create a ${preferences.duration}-day study plan for ${preferences.focus} at ${preferences.difficulty} level. 
                 Format the response as a JSON object with topics, subtopics, and daily goals.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return JSON.parse(response.text());
}

