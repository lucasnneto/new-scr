import { AxiosRequestConfig } from 'axios';
import http from './axios';
import { RootState } from '@/store';

class scrAPIService {
  private async axiosCall<T>(config: AxiosRequestConfig): Promise<any> {
    try {
      const { data } = await http.request<T>(config);
      return [null, data];
    } catch (error) {
      return [error];
    }
  }

  async getSCRData(termId?: string): Promise<[any, RootState?]> {
    return await this.axiosCall<any>({
      method: 'get',
      url: `/assinar/${termId}`,
    });
  }

  async validAnswers(body: {
    termId: string;
    answers: {
      id: string;
      answer: Record<string, any>;
    };
  }): Promise<[any, { message: string }?]> {
    return await this.axiosCall<any>({
      method: 'post',
      url: `/validar/respostas`,
      data: body,
    });
  }
  async validCPF(body: {
    termId: String;
    signerTaxId: String;
  }): Promise<[any, { message: string }?]> {
    return await this.axiosCall<any>({
      method: 'post',
      url: `/validar/signatario`,
      data: body,
    });
  }
}
export const SCR_API = new scrAPIService();
