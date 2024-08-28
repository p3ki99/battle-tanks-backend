export interface ICoreMapper {
  map<SRC, DST>(src: SRC, srcClass: new (...args: any[]) => SRC, dstClass: new (...args: any[]) => DST): DST;
  mapArray<SRC, DST>(
    srcArray: SRC[],
    srcClass: new (...args: any[]) => SRC,
    dstClass: new (...args: any[]) => DST,
  ): DST[];
}

export const ICoreMapperToken = "ICoreMapper";
