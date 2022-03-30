import { createContext, useState } from 'react';

export const ObserverContext = createContext();

const UseObserver = ({ children }) => {
  const [activeTap, setActiveTap] = useState('home');

  return (
    <ObserverContext.Provider value={{ activeTap, setActiveTap }}>
      {children}
    </ObserverContext.Provider>
  );
};

export default UseObserver;
