import React from 'react';
<<<<<<< HEAD
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
=======
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/components/Layout';
const LoginWrapper = styled.main`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 16px;
  background: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 48px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
  margin-bottom: 32px;
  font-size: 16px;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background: #ffe812;
  color: #000;
  font-weight: bold;
  border: none;
  padding: 14px 0;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
`;
//NavBar가 맨 위에 고정되게

export default function LoginPage() {
>>>>>>> 5b4be5d (style: 로그인 화면 구현 완료)
  const navigate = useNavigate();
  const location = useLocation();
  const fromPath = location.state?.from?.pathname || '/';

<<<<<<< HEAD
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
=======
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 로그인 로직 자리!
>>>>>>> 5b4be5d (style: 로그인 화면 구현 완료)
    navigate(fromPath);
  };

  return (
<<<<<<< HEAD
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
=======
    <>
    <Layout>
    <LoginWrapper>
      
      <Title>kakao</Title>
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="이메일" required />
        <Input type="password" placeholder="비밀번호" required />
        <LoginButton type="submit">로그인</LoginButton>
      </form>
    </LoginWrapper>
    </Layout>
    </>
  );
}
>>>>>>> 5b4be5d (style: 로그인 화면 구현 완료)
