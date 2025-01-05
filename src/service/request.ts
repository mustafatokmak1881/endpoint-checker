import { AxiosInstance, AxiosResponse } from 'axios';



// API yanıtı için bir DTO tanımla
interface ApiResponseDTO {
  data: string;
  status: number;
}

// Veriyi getiren bir servis oluştur
class ApiService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  public async fetchData(): Promise<ApiResponseDTO> {
    try {
      const response: AxiosResponse<ApiResponseDTO> = await this.client.get<ApiResponseDTO>('/posts/1');
      return response.data;
    } catch (error) {
      throw new Error('Veri getirilirken hata oluştu');
    }
  }
}

export default ApiService;

