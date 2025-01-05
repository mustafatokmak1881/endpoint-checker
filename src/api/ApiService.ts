import { AxiosResponse } from 'axios';
import httpClient from './HttpClient';
import { ApiResponseDTO } from '../dto/ApiResponse';

class ApiService {
    private client = httpClient;

    public async fetchData(): Promise<ApiResponseDTO> {
        try {
            const response: AxiosResponse<ApiResponseDTO> = await this.client.get<ApiResponseDTO>('/posts/1');
            return response.data;
        } catch (error) {
            throw new Error('Cannot getting data');
        }
    }
}

export default new ApiService();
