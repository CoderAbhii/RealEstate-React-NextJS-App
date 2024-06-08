import { useState } from 'react';

export default function useReactSelectCustomStyle () {
  const [selectBoxCustomStyles] = useState({
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused || state.isActive ? '1px solid #FFA920' : provided.border,
      borderRadius: '1px',
      boxShadow: state.isFocused || state.isActive ? '1px solid #FFA920' : provided.boxShadow,
      '&:hover': {
        border: '1px solid #FFA920',
      },
      '@media (max-width: 768px)': {
        fontSize: '14px', 
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#000' : '#000',
      backgroundColor: state.isFocused ? 'none' : '#fff',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#000',
      },
      '&:active': {
        backgroundColor: '#fff',
        color: '#000',
      },
      fontSize: '16px', 
      '@media (max-width: 768px)': {
        fontSize: '15px', 
      },
    }),
  });

  return selectBoxCustomStyles;
};