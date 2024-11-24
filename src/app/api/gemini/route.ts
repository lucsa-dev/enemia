import { NextRequest } from 'next/server';
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
    } from "@google/generative-ai";

export async function POST(req: NextRequest) {
    const prompt = await req.json();
    console.log("🚀 ~ POST ~ prompt:", prompt)

    
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    });
    
    const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
    };
    
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });
    try {
    const result = await chatSession.sendMessage(prompt.prompt);

    // Remover as aspas extras
    const jsonString = result.response.text().replace(/```json|```/g, '').trim();

    console.log("🚀 ~ POST ~ jsonString:", jsonString)
    return new Response(jsonString, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error:", error);
        return new Response(JSON.stringify({ message: "Error" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
            });
        }
}