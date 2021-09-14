import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { AxiosRequestConfig } from 'axios';
import { RootState } from '@/store';

export default class scrAPIService {
  private http: NuxtAxiosInstance;

  constructor(axios: NuxtAxiosInstance) {
    this.http = axios;
  }

  private async axiosCall<T>(config: AxiosRequestConfig): Promise<any> {
    try {
      const { data } = await this.http.request<T>(config);
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
}
