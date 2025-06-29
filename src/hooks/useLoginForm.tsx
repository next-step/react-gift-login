import { useState } from 'react';

export const useLoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return {
    id,
    setId,
    password,
    setPassword,
  };
};
