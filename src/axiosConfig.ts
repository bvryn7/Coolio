interface AxiosResponse<T = any> {
  data: T;
}

interface AxiosInstance {
  get: (url: string) => Promise<AxiosResponse>;
  post: (url: string, data?: any) => Promise<AxiosResponse>;
  put: (url: string, data?: any) => Promise<AxiosResponse>;
  delete: (url: string) => Promise<AxiosResponse>;
}

const axios: AxiosInstance = {
  get: (url: string): Promise<AxiosResponse> => {
    switch (url) {
      case '/universities':
        return Promise.resolve({
          data: [
            { id: 1, name: 'University of Example', state: 'EX' },
            { id: 2, name: 'Sample State University', state: 'SS' }
          ]
        });
      case '/students':
        return Promise.resolve({
          data: [
            { id: 1, name: 'John Doe', university: 1, state: 'EX' },
            { id: 2, name: 'Jane Smith', university: 2, state: 'SS' }
          ]
        });
      default:
        return Promise.reject(new Error('Not Found'));
    }
  },
  post: (url: string, data: any): Promise<AxiosResponse> => {
    return Promise.resolve({
      data: { ...data, id: Math.floor(Math.random() * 1000) }
    });
  },
  put: (url: string, data: any): Promise<AxiosResponse> => {
    return Promise.resolve({
      data
    });
  },
  delete: (url: string): Promise<AxiosResponse> => {
    return Promise.resolve({
      data: {}
    });
  }
};

export default axios;
