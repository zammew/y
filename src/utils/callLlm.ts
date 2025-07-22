import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import { HumanMessage } from '@langchain/core/messages'
import 'dotenv/config'
await import('../../secrets.ts')

export async function callLlm(prompt: string): Promise<string> {
  const apiKey = process.env.GOOGLE_API_KEY

  if (!apiKey) {
    throw new Error('GOOGLE_API_KEY environment variable is not set')
  }

  const model = new ChatGoogleGenerativeAI({
    temperature: 0,
    model: ['gemini-2.5-flash-preview-05-20'][0],
    //   model: 'gemini-pro',
    apiKey: process.env.GOOGLE_API_KEY,
    // apiKey: process.env.GOOGLE_API_KEY,
})

  const response = await model.invoke([new HumanMessage(prompt)])
  return response.content.toString()
}
