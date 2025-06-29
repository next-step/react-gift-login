import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react'
import { globalReset } from '@/styles/reset'
import { theme } from '@/styles/theme'
import { Layout } from '@/components/Layout'
import { Navbar } from '@/components/Navbar'
import styled from '@emotion/styled'

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;


interface LocationState {
  from?: {
    pathname: string;
  };
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPath = location.state?.from?.pathname || '/';

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    navigate(fromPath);
  };

  return (
    <ThemeProvider theme={theme}>
          <Global styles={globalReset} />
          <AppWrapper>
            <Layout>
              <Navbar />
              <main>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">로그인</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700">이메일</label>
                      
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
                      
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      로그인
                    </button>
                  </form>
                </div>
    
                
    
    
              </main>
            </Layout>
          </AppWrapper>
        </ThemeProvider>
  );
};

export default LoginPage;
