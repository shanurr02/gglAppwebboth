
import { GoogleGenAI } from "@google/genai";
import { Message, Role } from "../types";

// Always initialize the client with a named parameter using process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateGeminiResponse = async (
  prompt: string,
  history: Message[],
  attachments: { mimeType: string, data: string }[] = []
): Promise<string> => {
  const model = "gemini-3-flash-preview";
  
  // Format content parts for text and images as per SDK guidelines.
  const parts: any[] = [{ text: prompt }];
  
  attachments.forEach(att => {
    parts.push({
      inlineData: {
        mimeType: att.mimeType,
        data: att.data
      }
    });
  });

  const response = await ai.models.generateContent({
    model,
    contents: [
      ...history.map(msg => ({
        role: msg.role === Role.USER ? 'user' : 'model',
        parts: [{ text: msg.text }]
      })),
      { role: 'user', parts }
    ],
    config: {
      temperature: 0.7,
      topP: 0.95,
      topK: 64,
      // maxOutputTokens is omitted here to allow the model to manage thinking budget automatically.
    }
  });

  // Access the generated text content via the .text property (not a method).
  return response.text || "I'm sorry, I couldn't generate a response.";
};

export const generateTitle = async (message: string): Promise<string> => {
  const model = "gemini-3-flash-preview";
  const response = await ai.models.generateContent({
    model,
    contents: [{ 
      role: 'user', 
      parts: [{ text: `Summarize this message into a short 3-5 word title for a chat session: "${message}"` }] 
    }],
    config: {
        // When maxOutputTokens is specified, a thinkingBudget must also be set for models like Gemini 3.
        maxOutputTokens: 100,
        thinkingConfig: { thinkingBudget: 50 }
    }
  });
  // Access the text property directly.
  return (response.text || "New Chat").replace(/["']/g, "").trim();
};
