import styled from '@emotion/styled';
import React from 'react';

interface CTAButtonProps {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function CTAButton({
  size = 'medium',
  children,
  onClick,
  type = 'button',
  disabled = false,
}: CTAButtonProps) {
  return (
    <Button size={size} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </Button>
  );
}

const Button = styled.button<CTAButtonProps>`
  width: 100%;
  padding: ${({ size }) =>
    size === 'small'
      ? '8px 12px'
      : size === 'large'
        ? '16px 24px'
        : '12px 20px'};
  font-size: ${({ size }) =>
    size === 'small' ? '14px' : size === 'large' ? '18px' : '16px'};
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  &:hover {
    background-color: ${({ theme }) => theme.colors.kakaoYellowHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.kakaoYellowPressed};
  }
`;
