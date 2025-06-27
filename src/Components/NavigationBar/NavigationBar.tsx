import styled from '@emotion/styled';

import backIcon from '@/assets/icons/back.png';
import userIcon from '@/assets/icons/user.png';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 50px;

  background-color: ${({theme})=>theme.color.semantic.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.default};
`;

const Back = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${backIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) =>theme.color.semantic.text.default};
`;

const User = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${userIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;

const NavigationBar = () => {

    return (
        <Container>
            <Back/>
            <Title>선물하기</Title>
            <User/>
        </Container>
    );
};

export default NavigationBar;
