import styled from "@emotion/styled";

const CheerUpSectionWrapper = styled.section(props => ({
  display: "flex",
  backgroundColor: `${props.theme.color.gray[0]}`,
  padding: `0 ${props.theme.spacing4}`,
}));

const CheerUpSectionContainer = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "67px",
  padding: `${props.theme.spacing4}`,
  borderRadius: "16px",
  backgroundColor: `${props.theme.color.yellow[600]}`,
}));

const CheerUpSubject = styled.p(props => ({
  fontSize: `${props.theme.typography.label2Regular.fontSize}`,
  lineHeight: `${props.theme.typography.label2Regular.lineHeight}`,
  fontWeight: `${props.theme.typography.label2Regular.fontWeight}`,
  color: `${props.theme.color.gray[700]}`,
}));

const CheerUpDescription = styled.p(props => ({
  fontSize: `${props.theme.typography.body2Bold.fontSize}`,
  lineHeight: `${props.theme.typography.body2Bold.lineHeight}`,
  fontWeight: `${props.theme.typography.body2Bold.fontWeight}`,
  color: `${props.theme.color.gray[900]}`,
}));

const CheerUpSectionPadding = styled.div(props => ({
  display: "flex",
  height: "40px",
  backgroundColor: `${props.theme.color.gray[0]}`,
}));

export const CheerUpSection = () => {
  return (
    <>
      <CheerUpSectionWrapper>
        <CheerUpSectionContainer>
          <CheerUpSubject>카카오테크 캠퍼스 3기 여러분</CheerUpSubject>
          <CheerUpDescription>
            프론트엔드는 재밌어요 화이팅⭐️
          </CheerUpDescription>
        </CheerUpSectionContainer>
      </CheerUpSectionWrapper>
      <CheerUpSectionPadding />
    </>
  );
};
