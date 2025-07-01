import React from "react";
import styled from "@emotion/styled";
import { Layout } from "@/Components/layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import LogoImg from '../assets/logo.svg';

const CenterBox = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 48px 32px 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const Logo = styled.img`
  width: 56px;
  height: 56px;
  margin-bottom: 36px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.1rem;
  padding: 14px 0 6px 0;
  border: none;
  border-bottom: 1.5px solid #e0e0e0;
  outline: none;
  color: #222;
  background: transparent;
  &::placeholder {
    color: #b0b3ba;
    font-size: 1.1rem;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background: #f7e244;
  color: #222;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding: 16px 0;
  margin-top: 24px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ffe14a;
  }
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const from = (location.state as any)?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return (
    <Layout>
      <CenterBox>
        <Logo
          alt="카카오 공식 로고"
          src={LogoImg}
        />
        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="이메일" autoComplete="username" />
          <Input type="password" placeholder="비밀번호" autoComplete="current-password" />
          <LoginButton type="submit">로그인</LoginButton>
        </Form>
      </CenterBox>
    </Layout>
  );
};

export default Login;