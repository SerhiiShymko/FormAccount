import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { AppNav } from './AppNav';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 15px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const AppLayout = () => {
  return (
    <Container>
      <AppNav />
      <hr />

      <Outlet />
      <Toaster />
    </Container>
  );
};
