import { Injectable } from "@nestjs/common";
import { IHashingService, IHashPasswordResponse } from "@core/application/interfaces";
import * as crypto from "crypto";

@Injectable()
export class CryptoHashingService implements IHashingService {
  hashPassword(plainPassword: string, saltSizeInBytes: number): Promise<IHashPasswordResponse> {
    return new Promise((resolve, reject) => {
      const salt = crypto.randomBytes(saltSizeInBytes).toString("hex");

      crypto.scrypt(plainPassword, salt, 64, (err, derivedKey) => {
        if (err) reject(err);
        resolve({
          hashedPassword: derivedKey.toString("hex"),
          salt: salt,
        });
      });
    });
  }
}
