import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
const app = await NestFactory.create(AppModule);

const config = new DocumentBuilder()
.setTitle('My API documentation')
.setDescription('API-REST description')
.setVersion('1.0')
.addTag('items')
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('documentation', app, document);
app.useGlobalPipes(new ValidationPipe())

  await app.listen(3001);
}
bootstrap();

// Developed by JColamaio