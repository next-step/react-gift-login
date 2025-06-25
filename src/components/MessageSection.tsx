/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';

const MessageSection = () => {
  const theme = useTheme();
  
  const sectionStyle = css`
    padding: ${theme.spacing.spacing4};
    background-color: white;
  `;

  const messageContainerStyle = css`
    padding: ${theme.spacing.spacing4};
    background-color: ${theme.semantic.brand.kakaoYellow};
    border-radius: 12px;
  `;

  const titleStyle = css`
    ${theme.typography.body2Bold}
    color: ${theme.semantic.text.default};
    margin-bottom: ${theme.spacing.spacing1};
  `;

  const subtitleStyle = css`
    ${theme.typography.label1Regular}
    color: ${theme.colors.gray[700]};
  `;

  return (
    <section css={sectionStyle}>
      <div css={messageContainerStyle}>
        <p css={subtitleStyle}>카카오테크 캠퍼스 3기여러분</p>
        <p css={titleStyle}>프론트엔드 2단계 과제 화이팅! 🎉</p>
      </div>
    </section>
  );
};

export default MessageSection; 