import { IConfigService, IConfigServiceToken } from "@core/application/interfaces/infra-services";
import { Controller, Get, HttpException, HttpStatus, Inject, Logger } from "@nestjs/common";

@Controller("ping")
export class PingController {
  private readonly logger = new Logger(PingController.name);

  constructor(@Inject(IConfigServiceToken) private readonly configService: IConfigService) {}

  @Get()
  ping(): string {
    // const abc = {} as any;
    // return abc.a.b;
    // throw new HttpException("Error occured", HttpStatus.CONFLICT, { cause: PingController.name });
    return `pong - ${this.configService.getEnv()}`;
  }
}
