
import React, { useEffect, useState } from 'react';
import '../styles/WeightInputPopup.css';

const WeightInputPopup = ({ onClose }: { onClose: (weight: number) => void }) => {
  const [weight, setWeight] = useState<number | ''>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedWeight = localStorage.getItem('userWeight');
    if (!savedWeight) {
      setIsVisible(true);
    }
  }, []);

  const handleSubmit = () => {
    if (weight) {
      localStorage.setItem('userWeight', weight.toString());
      onClose(weight);
      setIsVisible(false);
    }
  };

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup">
          <h2>Insira seu peso atual</h2>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="Peso em kg"
          />
          <button className='weight-button' onClick={handleSubmit}>Salvar</button>
        </div>
      </div>
    )
  );
};

export default WeightInputPopup;
