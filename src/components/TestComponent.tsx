import React from 'react';
import styled from '@emotion/styled';

const TestContainer = styled.div`
  font-family: 'Pretendard', sans-serif;
  margin: 1rem 0;
`;

const TestText = styled.p`
  color: #495057;
  font-size: 1rem;
  font-weight: 400;
`;

const TestComponent: React.FC = () => {
  return (
    <TestContainer>
      <TestText>This is a test component using absolute path import!</TestText>
    </TestContainer>
  );
};

export default TestComponent; 