//src/database/database.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { IConfigService, IConfigServiceToken } from "@core/application/interfaces";
import { ApiConfigModule } from "@infrastructure/services/config/config.module";
import { DatabaseType, DataSource } from "typeorm";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ApiConfigModule],
      inject: [IConfigServiceToken],
      useFactory: (configService: IConfigService): TypeOrmModuleOptions => {
        const dbConfig = configService.getDatabaseConfiguration("default")!;

        return {
          type: dbConfig.type as DatabaseType as any,
          name: dbConfig.name,
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password: dbConfig.password,
          database: dbConfig.database,
          entities: [__dirname + "\\typeorm\\models\\**\\*.model{.ts,.js}"],
          migrations: [__dirname + "\\typeorm\\migrations\\*{.ts,.js}"],
          migrationsRun: false,
          synchronize: true,
          logging: "all",
        };
      },
    }),
  ],
  exports: [],
})
export class DatabaseModule {}
