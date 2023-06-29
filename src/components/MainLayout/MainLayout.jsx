import { Outlet } from 'react-router';
import { useState, Suspense } from 'react';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Wrapper, Main, Box, Container } from './MainLayout.styled';
import AsideBar from 'components/SideBar/SideBar';
import { useSelector } from 'react-redux';
import { useAdaptiveImage } from 'hooks/useAdaptiveImage';
import { Header } from 'components/Header/Header';
import Spinner from 'components/Spinner/spinner';

export const MainLayout = () => {
  const { isDesktop } = useAdaptiveImage();
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onSidebarShow = () => {
    setSideBarIsVisible(state => !state);
  };

  return (
    <Wrapper>
      <main>
        <Container style={{ display: 'flex' }}>
          {(isDesktop || sideBarIsVisible) && (
            <AsideBar onSidebarShow={onSidebarShow} />
          )}

          <Box>
            <Header onSidebarShow={onSidebarShow} />
            <Main>
              <Suspense fallback={<Spinner />}>
                <Outlet />
              </Suspense>
            </Main>
          </Box>
        </Container>
      </main>
    </Wrapper>
  );
};
