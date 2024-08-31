import { Injectable } from "@nestjs/common";
import { ICoreMapper } from "@core/application/interfaces";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";

@Injectable()
export class CoreAutoMapperService implements ICoreMapper {
  constructor(@InjectMapper() private readonly mapper: Mapper) {}

  map<SRC, DST>(src: SRC, srcClass: new (...args: any[]) => SRC, dstClass: new (...args: any[]) => DST): DST {
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
