import { css, type SerializedStyles } from '@emotion/react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
  baseColor?: string;
  selectedColor?: string;
  css?: SerializedStyles;
  transparent?: boolean; 
};

const buttonStyle = (
  baseColor = '#5084ea',
  selectedColor = '#0047b3',
  selected = false
) => css`
  background-color: ${selected ? selectedColor : baseColor};
  color: ${selected ? selectedColor : baseColor};
  color: white;
  padding: 6px 12px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${selected ? selectedColor : baseColor + 'cc'};
  }
`;

const Button = ({
  children,
  onClick,
  selected = false,
  baseColor,
  selectedColor,
}: ButtonProps) => {
  return (
    <button
      css={buttonStyle(baseColor, selectedColor, selected)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
