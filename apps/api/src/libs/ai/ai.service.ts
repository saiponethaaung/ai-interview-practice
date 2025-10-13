import {
  createGoogleGenerativeAI,
  GoogleGenerativeAIProvider,
} from '@ai-sdk/google';
import { Injectable } from '@nestjs/common';
import { generateObject, ModelMessage } from 'ai';
import { createOllama, OllamaProvider } from 'ollama-ai-provider-v2';
import { ZodType } from 'zod';

type ProviderType = ReturnType<typeof createOllama>;
type ModelType = ReturnType<ProviderType>;
type DoGenerateMethod = ModelType['doGenerate'];
type LanguageModelV2Props = Parameters<DoGenerateMethod>[0];

@Injectable()
export class AIService {
  private createOllamaInstance() {
    return createOllama({
      baseURL: process.env.OLLAMA_API_URL,
    });
  }

  private createGoogleGenerativeAIInstance() {
    return createGoogleGenerativeAI({
      apiKey: `${process.env.GEMINI_API_KEY}`,
    });
  }

  getModel(type: 'prompt' | 'file' = 'prompt'): ModelType {
    const models = this.createGoogleGenerativeAIInstance();
    return models('gemini-2.5-flash');
    let model: GoogleGenerativeAIProvider | OllamaProvider;
    const provider =
      type === 'prompt'
        ? process.env.LLM_PROVIDER
        : process.env.FILE_LLM_PROVIDER;

    switch (provider) {
      case 'openai':
        throw new Error('OpenAI not implemented yet');

      case 'gemini':
        model = this.createGoogleGenerativeAIInstance();
        break;

      case 'ollama':
        model = this.createOllamaInstance();
        break;

      case 'perplexity':
        throw new Error('Perplexity not implemented yet');

      default:
        throw new Error('No LLM provider configured');
    }

    if (type === 'prompt') {
      return model(`${process.env.LLM_MODEL}`);
    }

    return model(`${process.env.FILE_LLM_MODEL}`);
  }

  async callAI(props: LanguageModelV2Props, includeFileProcessing = false) {
    const model = this.getModel(includeFileProcessing ? 'file' : 'prompt');

    const response = await model.doGenerate(props);

    return (response.response?.body as { message?: string })?.message;
  }

  async generateObject<T, O>(
    schema: T,
    prompt: string | ModelMessage[],
    includeFileProcessing = false,
  ): Promise<O> {
    const model = this.getModel(includeFileProcessing ? 'file' : 'prompt');

    const { object } = await generateObject<ZodType<O>>({
      model,
      schema,
      prompt,
    });

    return object;
  }
}
