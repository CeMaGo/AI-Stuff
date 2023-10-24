import'dotenv/config'
import openAI, { OpenAI } from 'openai'
const openAi = new OpenAI()

const results = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', 
    messages: [
        {role: 'system',
    content: ' you are an ai assistant, answer any questions to the best of your ability.',
},
{
    role: 'user',
    content:'Hi! Can you tell me what is the best way tpo learn maths?'
}
    ]
})

console.log(results);