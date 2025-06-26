import styled from '@emotion/styled';
import leftArrow from '@/assets/left-arrow.png';
import user from '@/assets/user.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <HeaderWrapper>
      <Icon src={leftArrow} alt="left arrow" onClick={handleBack}/>
      <Title><StyledLink to="/">선물하기</StyledLink></Title>
      <Link to="/login"><Icon src={user} alt="user" /></Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 56px;
    background-color: #FFFFFFFF;
`;

const Icon = styled.img`
  width: 24px;    /* 적당한 크기로 조절 */
  height: 24px;
  object-fit: contain;
  cursor: pointer; /* 클릭 가능한 아이콘처럼 보이게 */
`;

const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  flex-grow: 1;            /* 제목이 남은 공간 꽉 채우기 */
  text-align: center;      /* 가운데 정렬 */
  user-select: none;       /* 텍스트 선택 방지 (선택사항) */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;