import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from "@nestjs/swagger";
import { INestApplication, LoggerService } from "@nestjs/common";
import { IConfigService, IConfigServiceToken, ILoggerService, ILoggerServiceToken } from "@core/interfaces";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get<ILoggerService>(ILoggerServiceToken));

  const configService = app.get<IConfigService>(IConfigServiceToken);
  const port = configService.getPort();

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
