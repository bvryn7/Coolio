// src/services/authService.ts
export const mockUser = {
    id: 1,
    name: 'Mock User',
    email: 'mock@example.com',
    token: 'mock-token',
  };
  
  export const signUp = async (name: string, email: string, password: string) => {
    console.log('Mock signUp called with:', { name, email, password });
    return mockUser;
  };
  
  export const login = async (email: string, password: string) => {
    console.log('Mock login called with:', { email, password });
    return mockUser;
  };
  