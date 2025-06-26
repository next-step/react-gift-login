import styled from '@emotion/styled';

const Banner = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;

  margin: 10px 20px;
  padding: 20px 20px;
  background-color: #ffe713;
`;

function NoticeBanner() {
  return (
    <Banner>
      카카오테크 캠퍼스 3기 여러분
      <br />
      프론트엔드 2단계 과제 화이팅! 🎉
    </Banner>
  );
}

export default NoticeBanner;
