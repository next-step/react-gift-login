import styled from '@emotion/styled';
import { useState } from 'react';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 200px;
  background-color: white;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.title1Bold};
  margin-top: ${({ theme }) => theme.spacing.spacing7};
  margin-left: ${({ theme }) => theme.spacing.spacing3};
  color: black;
`;

const BtnContainer1 = styled.div`
  width: 100%;
  height: 42%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TargetBtn = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.blue200};
  border-radius: 15px;
`;

const ClickedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.blue700};
  border-radius: 15px;
`;

const Text = styled.div`
  ${({ theme }) => theme.typography.label1Regular}
  color: ${({ theme }) => theme.colors.gray700};
  margin-top: ${({ theme }) => theme.spacing.spacing2};
`;

const ClickedText = styled.div`
  ${({ theme }) => theme.typography.label1Bold}
  color: ${({ theme }) => theme.colors.blue700};
  margin-top: ${({ theme }) => theme.spacing.spacing2};
`;

const BtnContainer2 = styled.div`
  width: 100%;
  height: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopicBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 96%;
  height: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blue100};
`;

const TextBtn = styled.button`
  all: unset;
  cursor: pointer;
  ${({ theme }) => theme.typography.label1Bold}
  color: ${({ theme }) => theme.colors.blue400};
`;

const ClickedTextBtn = styled.button`
  all: unset;
  cursor: pointer;
  ${({ theme }) => theme.typography.label1Bold}
  color: ${({ theme }) => theme.colors.blue700};
`;

export const GiftRankingHeader = () => {
  const [allIsClicked, setAllIsClicked] = useState<boolean>(true);
  const [femaleIsClicked, setFemaleIsClicked] = useState(false);
  const [maleIsClicked, setMaleIsClicked] = useState(false);
  const [youthIsClicked, setYouthIsClicked] = useState(false);
  const [isWanted, setIsWanted] = useState(true);
  const [isMostGifted, setIsMostGifted] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Container>
      <Title>실시간 급상승 선물랭킹</Title>
      <BtnContainer1>
        <TargetBtn
          onClick={() => {
            setAllIsClicked(true);
            setFemaleIsClicked(false);
            setMaleIsClicked(false);
            setYouthIsClicked(false);
          }}
        >
          {allIsClicked ? (
            <ClickedIcon style={{ color: 'white', fontSize: 14, fontWeight: 600 }}>ALL</ClickedIcon>
          ) : (
            <Icon style={{ color: 'white', fontSize: 14, fontWeight: 600 }}>ALL</Icon>
          )}
          {allIsClicked ? <ClickedText>전체</ClickedText> : <Text>전체</Text>}
        </TargetBtn>
        <TargetBtn
          onClick={() => {
            setAllIsClicked(false);
            setFemaleIsClicked(true);
            setMaleIsClicked(false);
            setYouthIsClicked(false);
          }}
        >
          {femaleIsClicked ? <ClickedIcon>👩🏻</ClickedIcon> : <Icon>👩🏻</Icon>}
          {femaleIsClicked ? <ClickedText>여성이</ClickedText> : <Text>여성이</Text>}
        </TargetBtn>
        <TargetBtn
          onClick={() => {
            setAllIsClicked(false);
            setFemaleIsClicked(false);
            setMaleIsClicked(true);
            setYouthIsClicked(false);
          }}
        >
          {maleIsClicked ? <ClickedIcon>👨🏻</ClickedIcon> : <Icon>👨🏻</Icon>}
          {maleIsClicked ? <ClickedText>남성이</ClickedText> : <Text>남성이</Text>}
        </TargetBtn>
        <TargetBtn
          onClick={() => {
            setAllIsClicked(false);
            setFemaleIsClicked(false);
            setMaleIsClicked(false);
            setYouthIsClicked(true);
          }}
        >
          {youthIsClicked ? <ClickedIcon>👦🏻</ClickedIcon> : <Icon>👦🏻</Icon>}
          {youthIsClicked ? <ClickedText>청소년이</ClickedText> : <Text>청소년이</Text>}
        </TargetBtn>
      </BtnContainer1>
      <BtnContainer2>
        <TopicBtn>
          {isWanted ? (
            <ClickedTextBtn
              onClick={() => {
                setIsWanted(true);
                setIsMostGifted(false);
                setIsWishlisted(false);
              }}
            >
              받고 싶어한
            </ClickedTextBtn>
          ) : (
            <TextBtn
              onClick={() => {
                setIsWanted(true);
                setIsMostGifted(false);
                setIsWishlisted(false);
              }}
            >
              받고 싶어한
            </TextBtn>
          )}
          {isMostGifted ? (
            <ClickedTextBtn
              onClick={() => {
                setIsWanted(false);
                setIsMostGifted(true);
                setIsWishlisted(false);
              }}
            >
              많이 선물한
            </ClickedTextBtn>
          ) : (
            <TextBtn
              onClick={() => {
                setIsWanted(false);
                setIsMostGifted(true);
                setIsWishlisted(false);
              }}
            >
              많이 선물한
            </TextBtn>
          )}
          {isWishlisted ? (
            <ClickedTextBtn
              onClick={() => {
                setIsWanted(false);
                setIsMostGifted(false);
                setIsWishlisted(true);
              }}
            >
              위시로 받은
            </ClickedTextBtn>
          ) : (
            <TextBtn
              onClick={() => {
                setIsWanted(false);
                setIsMostGifted(false);
                setIsWishlisted(true);
              }}
            >
              위시로 받은
            </TextBtn>
          )}
        </TopicBtn>
      </BtnContainer2>
    </Container>
  );
};
