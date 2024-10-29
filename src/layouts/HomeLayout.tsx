import { Outlet, Link } from 'react-router-dom'

import styled from 'styled-components'

const ContainerHomeLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderHomeLayout = styled.header`
  height: 60px;
  padding-inline: 24px;
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    color: inherit;
  }
`;

const MainHomeLayout = styled.main`
  flex: 1;
`;

const FooterHomeLayout = styled.footer`
  display: flex;
  height: 60px;
`

export default function HomeLayout() {
  return (
    <ContainerHomeLayout>
      <HeaderHomeLayout>
        <Link to='/'>Home page</Link>
        <Link to='/about'>About page</Link>
      </HeaderHomeLayout>
      <MainHomeLayout>
        <Outlet />
      </MainHomeLayout>
      <FooterHomeLayout>
        <h2>Footer</h2>
      </FooterHomeLayout>
    </ContainerHomeLayout>
  )
}