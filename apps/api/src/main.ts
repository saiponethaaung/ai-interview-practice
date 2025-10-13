import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import multipart from '@fastify/multipart';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { join } from 'node:path';

async function bootstrap() {
  // Create the NestJS application with Fastify adapter
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );

  app.useStaticAssets({
    root: join(__dirname, '..', 'uploads'),
    prefix: '/uploads',
  });

  // Register @fastify/multipart
  await app.register(multipart);

  // Enable URI versioning
  app.enableVersioning({ type: VersioningType.URI });

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  // Start the application
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
