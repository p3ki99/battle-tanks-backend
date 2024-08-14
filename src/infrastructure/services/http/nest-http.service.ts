import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { AxiosError, AxiosResponse } from "axios";
import { IHttpService } from "@core/interfaces/http.service";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class NestHttpService implements IHttpService {
  constructor(private readonly httpService: HttpService) {}

  async get<T>(url: string, options?: any): Promise<T> {
    const { data } = await firstValueFrom(
      this.httpService.get<T>(url, options).pipe(
        catchError((error: AxiosError) => {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR, { cause: NestHttpService.name });
        }),
      ),
    );

    return data;
  }

  async post<T>(url: string, data: any, options?: any): Promise<T> {
    const response: AxiosResponse<T> = await firstValueFrom(
      this.httpService.post<T>(url, data, options).pipe(
        catchError((error: AxiosError) => {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR, { cause: NestHttpService.name });
        }),
      ),
    );

    return response.data;
  }
}
