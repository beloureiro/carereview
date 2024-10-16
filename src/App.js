import React from 'react';
import styled from 'styled-components';
import ProfessionalsList from './components/ProfessionalsList';
import ProfessionalProfile from './components/ProfessionalProfile';
import { useProfessionalsContext } from './context/ProfessionalsContext';
import logoFull from './assets/Logo_full.png'; // Certifique-se de que o caminho está correto

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #00c3a5;
  color: var(--white);
  padding: 5px 0;
  margin-bottom: 20px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 50px;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const AppTitle = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  flex-grow: 1;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
`;

const MainContent = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ListColumn = styled.div`
  flex: 1;
`;

const ProfileColumn = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <>
      <Header>
        <AppContainer>
          <HeaderContent>
            <Logo src={logoFull} alt="Docplanner" />
            <AppTitle>Care Review-app</AppTitle>
            <div style={{ width: '50px' }}></div> {/* Espaçador para centralizar o título */}
          </HeaderContent>
        </AppContainer>
      </Header>
      <AppContainer>
        <MainContent>
          <ListColumn>
            <ProfessionalsList />
          </ListColumn>
          <ProfileColumn>
            <ProfessionalProfile />
          </ProfileColumn>
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App;
