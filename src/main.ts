import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>("port", 3000);

  configureSwagger(app);

  await app.listen(port);
}
bootstrap();

function configureSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle("Battle Tanks")
    .setDescription("The Battle Tanks API description")
    .setVersion("1.0")
    .addTag("battle-tanks")
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (_controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup("api", app, document);
}
