import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 15px;
  max-width: 900px;
  margin: 0 auto;
`;

export const AppLayout = () => {
  return <Container></Container>;
};
