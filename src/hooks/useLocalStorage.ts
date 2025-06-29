import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const getStoredValue = (): T => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        return initialValue;
      }
      return JSON.parse(item);
    } catch (error) {
      console.warn(`${key} 값 불러오기 실패:`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`${key} 값 저장 실패:`, error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
