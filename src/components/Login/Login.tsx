import { useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import {
  LoginContainer,
  KakaoLogo,
  LoginForm,
  InputField,
  LoginButton,
  InputFieldGroup,
} from './Login.styles';
import { LOGIN_LABELS } from './constants/labels';
import Layout from '@/layout';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 로직 구현
    console.log('Login attempt:', { email, password });
  };

  return (
    <Layout>
      <NavigationBar />
      <LoginContainer>
        <KakaoLogo>kakao</KakaoLogo>
        <LoginForm onSubmit={handleSubmit}>
          <InputFieldGroup>
            <InputField
              type="email"
              placeholder={LOGIN_LABELS.EMAIL_PLACEHOLDER}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
            <InputField
              type="password"
              placeholder={LOGIN_LABELS.PASSWORD_PLACEHOLDER}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
          </InputFieldGroup>
          <LoginButton type="submit">{LOGIN_LABELS.LOGIN_BUTTON}</LoginButton>
        </LoginForm>
      </LoginContainer>
    </Layout>
  );
}

export default Login;
