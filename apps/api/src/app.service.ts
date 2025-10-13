import { Injectable } from '@nestjs/common';
import { createOllama } from 'ollama-ai-provider-v2';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getTest() {
    const ollama = createOllama({
      baseURL: 'http://127.0.0.1:11434/api',
    });

    const model = ollama('mistral');
    const response = await model.doGenerate({
      prompt: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Hello.',
            },
          ],
        },
      ],
    });

    // Inspect the response structure and log it for debugging
    console.log(response);

    // If you know the expected structure, you can use a type assertion:
    console.log((response.response?.body as { message?: string })?.message);

    return (response.response?.body as { message?: string })?.message;
  }
}
