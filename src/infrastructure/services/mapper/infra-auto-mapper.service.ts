import { Injectable } from "@nestjs/common";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";
import { IInfraMapper } from "@core/application/interfaces/infra-services/infra-mapper.interface";

@Injectable()
export class InfraAutoMapperService implements IInfraMapper {
  constructor(@InjectMapper() private readonly mapper: Mapper) {}

  map<SRC, DST>(src: SRC, srcClass: new () => SRC, dstClass: new () => DST): DST {
    console.log("mapping");
    return this.mapper.map(src, srcClass, dstClass);
  }

  mapArray<SRC, DST>(
    srcArray: SRC[],
    srcClass: new (...args: any[]) => SRC,
    dstClass: new (...args: any[]) => DST,
  ): DST[] {
    return this.mapper.mapArray(srcArray, srcClass, dstClass);
  }
}
