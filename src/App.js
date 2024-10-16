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
  padding: 5px 0; // Reduzido para diminuir a altura da barra
  margin-bottom: 20px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 50px;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
`;

const AppTitle = styled.h1`
  color: white;
  font-size: 3rem; // Aumentado o tamanho da fonte
  font-weight: 700; // Tornando a fonte mais negrita
  margin: 0;
  flex-grow: 1;
  text-align: center;
  font-family: 'Montserrat', sans-serif; // Uma fonte mais moderna (você precisará importá-la)
  text-transform: uppercase; // Transformando o texto em maiúsculas
  letter-spacing: 4px; // Adicionando espaçamento entre as letras
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1); // Adicionando uma sombra sutil
`;

const MainContent = styled.div`
  display: flex;
  gap: 20px;
`;

const ListColumn = styled.div`
  flex: 0 0 300px;
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
