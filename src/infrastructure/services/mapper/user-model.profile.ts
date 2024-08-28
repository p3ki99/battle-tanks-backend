import { createMap, forMember, ignore, mapFrom, Mapper, MappingProfile } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { User } from "@core/domain/entities";
import { UserModel } from "@infrastructure/databases/typeorm/models/user.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserModelProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(
        mapper,
        UserModel,
        User,
        forMember(
          (dst) => dst.hashedPassword,
          mapFrom((src) => src.password.split(":")[0]),
        ),
        forMember(
          (dst) => dst.salt,
          mapFrom((src) => src.password.split(":")[1]),
        ),
      );

      createMap(
        mapper,
        User,
        UserModel,
        forMember(
          (dst) => dst.password,
          mapFrom((src) => `${src.hashedPassword}:${src.salt}`),
        ),
      );
    };
  }
}
