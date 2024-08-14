import { IConfigService, IConfigServiceToken } from "@core/interfaces";
import { Controller, Get, Inject, Logger } from "@nestjs/common";

@Controller("ping")
export class PingController {
  private readonly logger = new Logger(PingController.name);

  constructor(@Inject(IConfigServiceToken) private readonly configService: IConfigService) {}

  @Get()
  ping(): string {
    return `pong - ${this.configService.getEnv()}`;
  }
}
