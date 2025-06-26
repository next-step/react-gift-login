/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

const BannerSection = () => {
  const theme = useTheme();

  const sectionStyle = css`
    padding: ${theme.spacing[0]} ${theme.spacing[4]};
  `;

  const textWrapperStyle = css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.color.semantic.kakaoYellow};
    border-radius: 16px;
    padding: ${theme.spacing[4]};
  `;

  const topTextStyle = css`
    font-size: ${theme.typography.label.label2Regular.fontSize};
    font-weight: ${theme.typography.label.label2Regular.fontWeight};
    line-height: ${theme.typography.label.label2Regular.lineHeight};
    color: ${theme.color.gray[700]};
  `;

  const bottomTextStyle = css`
    font-size: ${theme.typography.label.label1Bold.fontSize};
    font-weight: ${theme.typography.label.label1Bold.fontWeight};
    line-height: ${theme.typography.label.label1Bold.lineHeight};
    color: ${theme.color.semantic.text.default};
  `;

  return (
    <section css={sectionStyle}>
      <div css={textWrapperStyle}>
        <p css={topTextStyle}>카카오테크 캠퍼스 3기여러분</p>
        <p css={bottomTextStyle}>프론트엔드 2단계 과제 화이팅! 🎉</p>
      </div>
    </section>
  );
};

export default BannerSection;
