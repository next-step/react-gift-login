import styled from '@emotion/styled';
import { colors, fontSizes, spaces, } from '@/tokens/designTokens';

const Wrap = styled.section`
  padding: ${spaces.lg} ${spaces.md};
  background: ${colors.bg};
`;

const Title = styled.h2`
  font-size: ${fontSizes.h2};
  margin-bottom: ${spaces.md};
  color: ${colors.text};
`;

const List = styled.ol`
  padding-left: ${spaces.md};
  margin: 0;
`;

const Item = styled.li`
  margin-bottom: ${spaces.sm};
  font-size: ${fontSizes.body};
  color: ${colors.text};
  &::marker {
    color: ${colors.primary};
    font-weight: bold;
  }
`;

const RANKS = ['꽃다발', '초콜릿', '커피', '케이크', '와인'];

export default function LiveRanking() {
  return (
    <Wrap>
      <Title>실시간 급상승 선물</Title>
      <List>
        {RANKS.map(name => (
          <Item key={name}>{name}</Item>
        ))}
      </List>
    </Wrap>
  );
}
