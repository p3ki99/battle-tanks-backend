import { ValidationPipe, BadRequestException, ValidationError, ValidationPipeOptions } from "@nestjs/common";

export class CustomValidationPipe extends ValidationPipe {
  constructor(options: ValidationPipeOptions) {
    super(options);
  }

  // protected flattenValidationErrors(validationErrors: ValidationError[]): string[] {
  //   console.log("FLATTENING");
  //   return validationErrors.map((error) => Object.values(error.constraints || {}).join(", "));
  // }
}
