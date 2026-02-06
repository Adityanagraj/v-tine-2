
import { GoogleGenAI, Type } from "@google/genai";
import type { QuizQuestion } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const quizSchema = {
  type: Type.OBJECT,
  properties: {
    quizzes: {
      type: Type.ARRAY,
      description: "An array of 5 to 7 quiz questions.",
      items: {
        type: Type.OBJECT,
        properties: {
          question: {
            type: Type.STRING,
            description: "The question text."
          },
          options: {
            type: Type.ARRAY,
            description: "An array of 4 strings representing the multiple choice options.",
            items: { type: Type.STRING }
          },
          correctAnswer: {
            type: Type.STRING,
            description: "The correct answer, which must be one of the strings in the options array."
          }
        },
        required: ["question", "options", "correctAnswer"]
      }
    }
  }
};

export const generateQuizQuestions = async (keywords: string): Promise<QuizQuestion[]> => {
  try {
    const prompt = `
      You are a romantic and playful quiz master for Valentine's Day. 
      Based on the following user-provided memories, create a fun, sweet, and personalized quiz for a couple.
      The tone should be lighthearted, loving, and a little bit cheeky.
      The questions should be multiple choice with 4 options. Ensure the correct answer is one of the options.

      Memories: "${keywords}"

      Generate between 5 and 7 unique questions.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: quizSchema,
        temperature: 0.8,
      },
    });

    const jsonText = response.text?.trim();
    if (!jsonText) {
      throw new Error("API returned an empty response.");
    }

    const parsed = JSON.parse(jsonText);
    return parsed.quizzes || [];

  } catch (error) {
    console.error("Error generating quiz questions:", error);
    throw new Error("Failed to create your romantic quiz. Please check your memories and try again.");
  }
};
