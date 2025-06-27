import styled from '@emotion/styled';
//컴포넌트의 가독성을 좋게 하기 위해 styled방식으로 바꾸었습니다.

const Navigation = () => {
  return (
    <Nav>
      <IconButton>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </IconButton>
      
      <Logo 
        src="/카카오톡 선물하기.webp" 
        alt="카카오톡 선물하기" 
      />
      
      <IconButton>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5"/>
          <path d="M20 21a8 8 0 0 0-16 0"/>
        </svg>
      </IconButton>
    </Nav>
  );
};

export default Navigation;
const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
  `;

  const IconButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Logo = styled.img`
    height: 42px;
  `;

