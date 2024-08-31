import { createMap, forMember, ignore, mapFrom, Mapper, MappingProfile } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { UserDto } from "@core/application/dtos";
import { User } from "@core/domain/entities";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, User, UserDto);
    };
  }
}
