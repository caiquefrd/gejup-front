import React, { useEffect, useState } from 'react';
import '../styles/WeightInputPopup.css';
import api from '../services/api';

interface WeightInputPopupProps {
  onClose: (userData: any) => void;
}

const WeightInputPopup: React.FC<WeightInputPopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [age, setAge] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [weightGoal, setWeightGoal] = useState<number | null>(null);

  // Metas calculadas automaticamente
  const [dailyCaloriesGoal, setDailyCaloriesGoal] = useState<number | null>(null);
  const [proteinGoal, setProteinGoal] = useState<number | null>(null);
  const [fatGoal, setFatGoal] = useState<number | null>(null);
  const [carbGoal, setCarbGoal] = useState<number | null>(null);
  const [waterGoal, setWaterGoal] = useState<number | null>(null);

  useEffect(() => {
    if (age && weight && height) {
      // Cálculo baseado nas recomendações da OMS (valores aproximados)
      const calories = 25 * weight; // Exemplo: 25 kcal por kg de peso
      setDailyCaloriesGoal(calories);

      // Metas de macronutrientes
      setProteinGoal(Math.round(0.15 * calories / 4)); // 15% das calorias de proteínas (4 kcal/g)
      setFatGoal(Math.round(0.25 * calories / 9)); // 25% das calorias de gorduras (9 kcal/g)
      setCarbGoal(Math.round(0.60 * calories / 4)); // 60% das calorias de carboidratos (4 kcal/g)
      setWaterGoal(Math.round(weight * 35)); // 35 ml de água por kg de peso
    }
  }, [age, weight, height]);

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
          dailyCaloriesGoal: dailyCaloriesGoal?.toString() || '',
          proteinGoal: proteinGoal?.toString() || '',
          fatGoal: fatGoal?.toString() || '',
          carbGoal: carbGoal?.toString() || '',
          waterGoal: waterGoal?.toString() || '',
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
