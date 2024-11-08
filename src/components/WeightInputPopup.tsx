import React, { useEffect, useState } from 'react';
import '../styles/WeightInputPopup.css';
import api from '../services/api';

interface WeightInputPopupProps {
  onClose: (userData: any) => void;
}

const WeightInputPopup: React.FC<WeightInputPopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [age, setAge] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [weightGoal, setWeightGoal] = useState<number | null>(null);
  



  const handleSubmit = async () => {
    if (age && weight && height && weightGoal) {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          console.error('User ID não encontrado no localStorage');
          return;
        }
  
        // Dados a serem enviados ao backend (convertidos para string)
        const userData = {
          user_id: userId,
          age: age.toString(),
          weigth: weight.toString(),
          heigth: height.toString(),
          weigthGoal: weightGoal.toString(),
        };
  
        await api.post('/goals', userData);
        onClose(userData);
        setIsVisible(false);
      } catch (error) {
        console.error('Erro ao salvar as informações do usuário:', error);
      }
    }
  };
  

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup">
          <h2>Insira suas informações</h2>
          <input
            type="number"
            value={age ?? ''}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Idade"
          />
          <input
            type="number"
            value={weight ?? ''}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="Peso em kg"
          />
          <input
            type="number"
            value={height ?? ''}
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder="Altura em cm"
          />
          <input
            type="number"
            value={weightGoal ?? ''}
            onChange={(e) => setWeightGoal(Number(e.target.value))}
            placeholder="Meta de peso em kg"
          />

          <button className="weight-button" onClick={handleSubmit}>Salvar</button>
        </div>
      </div>
    )
  );
};

export default WeightInputPopup;
