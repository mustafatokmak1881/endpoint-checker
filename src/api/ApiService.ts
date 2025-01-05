import { AxiosResponse } from 'axios';
import httpClient from './HttpClient';
import { ApiResponseDTO } from '../dto/ApiResponse';

class ApiService {
    private client = httpClient;

    public async fetchData(): Promise<ApiResponseDTO> {
        try {
            const response: AxiosResponse<ApiResponseDTO> = await this.client.get<ApiResponseDTO>('/posts');
            return response.data;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default new ApiService();
