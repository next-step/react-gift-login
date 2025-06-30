import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import CTAButton from '../components/common/CTAButton';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <img
        src="https://gift-s.kakaocdn.net/dn/gift/webapp/images/m640/img_not_found.png"
        alt="not found"
      />
      <Title>페이지를 찾을 수 없습니다</Title>
      <Description>
        요청하신 페이지가 존재하지 않거나, 주소가 잘못되었습니다.
      </Description>
      <CTAButton size="medium" onClick={() => navigate('/')}>
        홈으로 이동
      </CTAButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 80px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1Regular.fontSize};
  margin-top: 20px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: 24px;
`;

export default NotFoundPage;
