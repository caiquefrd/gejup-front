// App.tsx
import React from 'react';
import LoginForm from '../components/LoginForm';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: '#12181b', height: '100vh', width:'1000vh' }}>
      <LoginForm />
    </div>
    </ThemeProvider>
  );
};

export default App;
