import React from 'react';
import styled from '@emotion/styled';

const TestContainer = styled.div`
  font-family: 'Pretendard', sans-serif;
  margin: ${props => props.theme.spacing.spacing4} 0;
`;

const TestText = styled.p`
  color: ${props => props.theme.semanticColors.text.sub};
  font-size: ${props => props.theme.typography.body2Regular.fontSize};
  font-weight: ${props => props.theme.typography.body2Regular.fontWeight};
  line-height: ${props => props.theme.typography.body2Regular.lineHeight};
`;

const TestComponent: React.FC = () => {
  return (
    <TestContainer>
      <TestText>Design Token과 Emotion Theme이 적용됨을 확인.</TestText>
    </TestContainer>
  );
};

export default TestComponent;