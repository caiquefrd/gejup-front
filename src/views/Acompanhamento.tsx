import React from 'react'; 
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';  
import theme from '../styles/theme';  
import SideBar from '../components/SideBar';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, LineChart, Line, PieChart, Pie, Cell, Label, ReferenceLine } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeightIcon from '@mui/icons-material/Height';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TargetIcon from '@mui/icons-material/Adjust';



const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; 
  width: 100%;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: calc(100% - 250px); 
    height: 100%; 
  }
`;

const WhiteSquare = styled.div`
  width: 90vw; 
  max-width: 1400px;
  height: 90vh; 
  max-height: 1000px; 
  background-color: white;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  padding: 20px; 
`;

const ScrollContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
`;

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  padding: 10px 0; 
`;

const HorizontalChartsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px; 
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const StyledCard = styled(Card)<{ bgcolor?: string }>`
  border-radius: 15px;
  border: 2px solid #D0CECE; // Adiciona a borda
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  background-color: transparent; // Torna o fundo transparente
`;

const IconContainer = styled.div`
  margin-right: 10px;
`;

const dataWeight = [
  { month: 'Nov', Peso: 100 },
  { month: 'Dez', Peso: 98 },
  { month: 'Jan', Peso: 95 },
  { month: 'Fev', Peso: 92 },
  { month: 'Mar', Peso: 95 },
  { month: 'Abr', Peso: 93 },
  { month: 'Mai', Peso: 90 },
  { month: 'Jun', Peso: 88 },
  { month: 'Jul', Peso: 85 },
  { month: 'Ago', Peso: 87 },
  { month: 'Set', Peso: 85 },
  { month: 'Out', Peso: 84 },
];

const dataCalories = [
  { month: 'Nov', meta: 2000, realizado: 2000 },
  { month: 'Dez', meta: 2000, realizado: 1850 },
  { month: 'Jan', meta: 2000, realizado: 1800 },
  { month: 'Fev', meta: 2000, realizado: 1830 },
  { month: 'Mar', meta: 2000, realizado: 2350 },
  { month: 'Abr', meta: 2000, realizado: 2250 },
  { month: 'Mai', meta: 2000, realizado: 2150 },
  { month: 'Jun', meta: 2000, realizado: 2050 },
  { month: 'Jul', meta: 2000, realizado: 2000 },
  { month: 'Ago', meta: 2000, realizado: 1900 },
  { month: 'Set', meta: 2000, realizado: 1750 },
  { month: 'Out', meta: 2000, realizado: 1650 },
];

const waterData = [
  { month: 'Nov', Consumido: 2.5, Consumir: 0.5 },
  { month: 'Dez', Consumido: 2.0, Consumir: 1.0 },
  { month: 'Jan', Consumido: 2.8, Consumir: 0.2 },
  { month: 'Fev', Consumido: 3.0, Consumir: 0.0 },
  { month: 'Mar', Consumido: 2.7, Consumir: 0.3 },
  { month: 'Abr', Consumido: 2.9, Consumir: 0.1 },
  { month: 'Mai', Consumido: 2.4, Consumir: 0.6 },
  { month: 'Jun', Consumido: 2.6, Consumir: 0.4 },
  { month: 'Jul', Consumido: 3.0, Consumir: 0.0 },
  { month: 'Ago', Consumido: 2.5, Consumir: 0.5 },
  { month: 'Set', Consumido: 2.7, Consumir: 0.3 },
  { month: 'Out', Consumido: 2.8, Consumir: 0.2 },
];

const protein = [
  { month: 'Jan', consumido: 80, meta: 120 },
  { month: 'Fev', consumido: 85, meta: 120 },
  { month: 'Mar', consumido: 70, meta: 120 },
  { month: 'Abr', consumido: 80, meta: 120 },
  { month: 'Mai', consumido: 75, meta: 120 },
  { month: 'Jun', consumido: 130, meta: 120 },
  { month: 'Jul', consumido: 75, meta: 120 },
  { month: 'Ago', consumido: 76, meta: 120 },
  { month: 'Set', consumido: 84, meta: 120 },
  { month: 'Out', consumido: 65, meta: 120 },
  { month: 'Nov', consumido: 86, meta: 120 },
  { month: 'Dez', consumido: 70, meta: 120 },
];

const pieData = [
  { name: 'Meta 1', value: 80 },
  { name: 'Meta 2', value: 128 },
];

interface CustomLabelProps {
  value: string | number;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ value }) => (
  <text fill="black" textAnchor="middle" dominantBaseline="middle" y={10}>
    {value}
  </text>
);


const Acompanhamento: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageContainer>
        <SideBar />
        <Container>
          <WhiteSquare>
            <CardsContainer>
            <StyledCard>
                <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                  <IconContainer>
                    <AccountCircleIcon fontSize="large" />
                  </IconContainer>
                  <div>
                    <Typography variant="h5">Idade</Typography>
                    <Typography variant="body2">21</Typography>
                  </div>
                </CardContent>
              </StyledCard>
              <StyledCard bgcolor="#D0CECE">
                <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                  <IconContainer>
                    <HeightIcon fontSize="large" />
                  </IconContainer>
                  <div>
                    <Typography variant="h5">Altura</Typography>
                    <Typography variant="body2">1,80 m</Typography>
                  </div>
                </CardContent>
              </StyledCard>
              <StyledCard bgcolor="#D0CECE">
                <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                  <IconContainer>
                    <FitnessCenterIcon fontSize="large" />
                  </IconContainer>
                  <div>
                    <Typography variant="h5">Peso Atual</Typography>
                    <Typography variant="body2">88 kg</Typography>
                  </div>
                </CardContent>
              </StyledCard>
              <StyledCard bgcolor="#D0CECE">
                <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                  <IconContainer>
                    <TargetIcon fontSize="large" />
                  </IconContainer>
                  <div>
                    <Typography variant="h5">Meta</Typography>
                    <Typography variant="body2">80 kg</Typography>
                  </div>
                </CardContent>
              </StyledCard>
            </CardsContainer>

            <ScrollContainer>
              <HorizontalChartsContainer>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <h3>Meta Peso (%)</h3>
                  <ResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie 
                        data={[
                          { name: 'Meta', value: 95 },
                          { name: 'Faltante', value: 5 },
                        ]}
                        dataKey="value" 
                        nameKey="name" 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={80} 
                        innerRadius={40}
                        fill="#8884d8"
                      >
                        {['#04BF8A', '#414141'].map((color, index) => (
                          <Cell key={`cell-${index}`} fill={color} />
                        ))}
                      </Pie>
                      <Label value="95%" position="center" fontSize={20} fontWeight="bold" />
                    </PieChart>
                  </ResponsiveContainer>
                  <CustomLabel value="Meta: 95%" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <h3>Média de Calorias</h3>
                  <ResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie 
                        data={[
                          { name: 'Realizado', value: 1965 },
                          { name: 'Meta', value: 35 },
                        ]}
                        dataKey="value" 
                        nameKey="name" 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={80} 
                        innerRadius={40}
                        fill="#8884d8"
                      >
                        {['#F04F76', '#414141'].map((color, index) => (
                          <Cell key={`cell-${index}`} fill={color} />
                        ))}
                      </Pie>
                      <Label value="1965" position="center" fontSize={20} fontWeight="bold" />
                    </PieChart>
                  </ResponsiveContainer>
                  <CustomLabel value="Realizado: 1965" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <h3>Média de Consumo de Água (L)</h3>
                  <ResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie 
                        data={[
                          { name: 'Consumido', value: 2.65 },
                          { name: 'Meta', value: 0.35 },
                        ]}
                        dataKey="value" 
                        nameKey="name" 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={80} 
                        innerRadius={40}
                        fill="#8884d8"
                      >
                        {['#024059', '#414141'].map((color, index) => (
                          <Cell key={`cell-${index}`} fill={color} />
                        ))}
                      </Pie>
                      <Label value="2.65" position="center" fontSize={20} fontWeight="bold" />
                    </PieChart>
                  </ResponsiveContainer>
                  <CustomLabel value="Consumido: 2.65" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <h3>Consumo de Proteínas</h3>
                  <ResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie 
                        data={pieData} 
                        dataKey="value" 
                        nameKey="name" 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={80} 
                        innerRadius={40}
                        fill="#8884d8"
                      >
                        {pieData.map((_entry, index) => (
                          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#414141' : '#F0931E'} />
                        ))}
                      </Pie>
                      <Label value={pieData.reduce((max, entry) => Math.max(max, entry.value), 0)} position="center" fontSize={20} fontWeight="bold" />
                    </PieChart>
                  </ResponsiveContainer>
                  <CustomLabel value={`Média: 80g`} />
                </div>
              </HorizontalChartsContainer>

              <ChartContainer>
                <h2>Evolução na Perda de Peso</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={dataWeight}
                    margin={{
                      top: 20, right: 30, left: 20, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Peso" fill="#04BF8A">
                      <LabelList dataKey="Peso" position="top" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                <h2>Calorias Consumidas - Meta vs Realizado</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart
                    data={dataCalories}
                    margin={{
                      top: 20, right: 30, left: 20, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="meta" stroke="#F04F76" />
                    <Line type="monotone" dataKey="realizado" stroke="#04BF8A">
                      <LabelList dataKey="realizado" position="bottom" />
                    </Line>
                  </LineChart>
                </ResponsiveContainer>

                <h2>Consumo de Água nos Últimos 12 Meses</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={waterData}
                    margin={{
                      top: 20, right: 30, left: 20, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Consumido" stackId="a" fill="#024059">
                      <LabelList dataKey="Consumido" position="center" fill="#FFFFFF" />
                    </Bar>
                    <Bar dataKey="Consumir" stackId="a" fill="#414141" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>

              <h2>Acompanhamento do Consumo de Proteína</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={protein}
                    margin={{
                      top: 20, right: 30, left: 20, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="consumido" fill="#F0931E">
                      <LabelList dataKey="consumido" position="top" />
                    </Bar>
                    <Line type="monotone" dataKey="meta" stroke="#F04F76" strokeWidth={2} />
                    <ReferenceLine y={120} stroke="red" strokeDasharray="3 3" label="Meta (120)" />
                  </BarChart>
                </ResponsiveContainer>

            </ScrollContainer>
          </WhiteSquare>
        </Container>
      </PageContainer>
    </ThemeProvider>
  );
};

export default Acompanhamento;
