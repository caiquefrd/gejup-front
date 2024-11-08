import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';  
import theme from '../styles/theme';  
import SideBar from '../components/SideBar';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress'; 
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import WaterIcon from '@mui/icons-material/Water';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import TerrainIcon from '@mui/icons-material/Terrain';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import StarIcon from '@mui/icons-material/Star';

const PageContainer = styled.div`
  display: flex;
  height: 100%; 
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
`;

const WhiteSquare = styled.div`
  width: 90vw;
  max-width: 1400px;
  height: 90vh;
  max-height: 1000px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  overflow-x: auto;
  overflow-y: auto;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px; 
`;

const Title = styled(Typography)`
  font-size: 36px; 
  font-weight: bold;
  color: #024059;
`;

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const BadgeCard = styled(Card)`
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const BadgeIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-color: #04BF8A;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const BadgeTitle = styled(Typography)`
  font-weight: bold;
  color: #024059;
  font-size: 18px;
  margin: 10px 0;
`;

const BadgeDescription = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #555;
  margin: 0;
`;

const ProgressContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const ProgressLabel = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #555;
  margin-top: 5px;
`;

const badges = [
  { title: 'Primeiro Passo', description: 'Realizou a primeira atividade física.', progress: Math.random() * 100 },
  { title: 'Consistência', description: 'Completando uma semana de atividades sem interrupções.', progress: Math.random() * 100 },
  { title: 'Metas de Peso', description: 'Atingiu uma meta de perda de peso específica.', progress: Math.random() * 100 },
  { title: 'Hidratação', description: 'Atingiu a meta diária de consumo de água por uma semana.', progress: Math.random() * 100 },
  { title: 'Maratonista', description: 'Completou 100km de caminhada ou corrida.', progress: Math.random() * 100 },
  { title: 'Nutrição Balanceada', description: 'Completou todas as refeições saudáveis por um período de 30 dias.', progress: Math.random() * 100 },
  { title: 'Desafio de 30 Dias', description: 'Completou um desafio de atividade física de 30 dias.', progress: Math.random() * 100 },
  { title: 'Escada Abaixo', description: 'Evitou o uso do elevador e usa as escadas por 10 vezes.', progress: Math.random() * 100 },
  { title: 'Primeiro Check-in', description: 'Registrou seu peso no aplicativo.', progress: Math.random() * 100 },
  { title: 'Super Treino', description: 'Completou um treino de alta intensidade.', progress: Math.random() * 100 },
  { title: 'Estrela do Sono', description: 'Dormiu bem e tem uma rotina regular de sono.', progress: Math.random() * 100 },
  { title: 'Amigo Fit', description: 'Convidou um amigo para usar o aplicativo.', progress: Math.random() * 100 },
];

const badgeIcons = {
  'Primeiro Passo': <DirectionsRunIcon style={{ color: 'white', fontSize: 80 }} />,
  'Consistência': <AccessAlarmIcon style={{ color: 'white', fontSize: 80 }} />,
  'Metas de Peso': <FitnessCenterIcon style={{ color: 'white', fontSize: 80 }} />,
  'Hidratação': <WaterIcon style={{ color: 'white', fontSize: 80 }} />,
  'Maratonista': <DirectionsRunIcon style={{ color: 'white', fontSize: 80 }} />,
  'Nutrição Balanceada': <LocalDiningIcon style={{ color: 'white', fontSize: 80 }} />,
  'Desafio de 30 Dias': <SelfImprovementIcon style={{ color: 'white', fontSize: 80 }} />,
  'Escada Abaixo': <TerrainIcon style={{ color: 'white', fontSize: 80 }} />,
  'Primeiro Check-in': <StarIcon style={{ color: 'white', fontSize: 80 }} />,
  'Super Treino': <FitnessCenterIcon style={{ color: 'white', fontSize: 80 }} />,
  'Estrela do Sono': <AccessAlarmIcon style={{ color: 'white', fontSize: 80 }} />,
  'Amigo Fit': <PersonAddIcon style={{ color: 'white', fontSize: 80 }} />,
  'Gurua da Nutrição': <LocalDiningIcon style={{ color: 'white', fontSize: 80 }} />,
  'Montanha Conquistada': <TerrainIcon style={{ color: 'white', fontSize: 80 }} />,
};

const Badges: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageContainer>
        <SideBar />
        <Container>
          <WhiteSquare>
            <TitleContainer>
              <Title variant="h4">EMBLEMAS CONQUISTADOS</Title>
            </TitleContainer>

            <BadgesContainer>
              {badges.map((badge, index) => (
                <BadgeCard key={index}>
                  <BadgeIconContainer>
                    {badgeIcons[badge.title] || <StarIcon style={{ color: 'white', fontSize: 80 }} />}
                  </BadgeIconContainer>
                  <BadgeTitle variant="h5">{badge.title}</BadgeTitle>
                  <BadgeDescription>{badge.description}</BadgeDescription>
                  <ProgressContainer>
                    <LinearProgress variant="determinate" value={badge.progress} />
                    <ProgressLabel variant="body2">{`${Math.round(badge.progress)}% / 100%`}</ProgressLabel>
                  </ProgressContainer>
                </BadgeCard>
              ))}
            </BadgesContainer>
          </WhiteSquare>
        </Container>
      </PageContainer>
    </ThemeProvider>
  );
};

export default Badges;