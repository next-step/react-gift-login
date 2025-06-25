import styled from '@emotion/styled/macro';
import { colors } from '@/styles/tokens';

const AppContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  background-color: ${colors.gray50};
  min-height: 100vh;
`;

export const GiftPage = () => {
  return <AppContainer></AppContainer>;
};
