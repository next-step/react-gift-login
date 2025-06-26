/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export default function Fighting() {
  return (
    <Wrapper>
      <Card>
        <Text1>카카오테크 캠퍼스 3기여러분</Text1>
        <Text2>프론트엔드 2단계 과제 화이팅! 🎉</Text2>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.default};
  padding: 12px 12px;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border-radius: 20px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.p`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray600};
  line-height: 1.3;
  margin-bottom: 4px;
`;

const Text2 = styled.p`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.textDefault};
  line-height: 1.3;
  margin-top: 0;
`;
