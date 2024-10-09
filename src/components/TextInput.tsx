// TextInput.tsx
import React from 'react';
import { TextField } from '@mui/material';

interface TextInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, type = 'text', value, onChange }) => {
  return (
    <TextField
      label={label}
      variant="filled"
      fullWidth
      margin="normal"
      type={type}
      value={value}
      onChange={onChange}
      InputProps={{
        style: { backgroundColor: '#d3d3d3', borderRadius: 20 },
      }}
    />
  );
};

export default TextInput;
