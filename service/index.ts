import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosRequestConfig } from 'axios'
import { RootState } from '@/store'

export default class scrAPIService {
  private url: string
  private http: NuxtAxiosInstance

  constructor(axios: NuxtAxiosInstance) {
    this.url = '/validar'
    this.http = axios
  }

  private async axiosCall<T>(config: AxiosRequestConfig): Promise<any> {
    try {
      const { data } = await this.http.request<T>(config)
      return [null, data]
    } catch (error) {
      return [error]
    }
  }

  async getSCRData(termId?: string): Promise<[any, RootState?]> {
    return await this.axiosCall<any>({
      method: 'get',
      url: `/assinar/${termId}`,
    })
  }
}
