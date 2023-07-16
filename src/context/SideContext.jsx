import { createContext, useState } from 'react';

const InitialState = {
  isSideOpen: 0,
  setIsSideOpen: () => {},
};

const SideContext = createContext(InitialState);

export const SideContextProvider = ({ children }) => {
  const [isSideOpen, setIsSideOpen] = useState(1);

  return (
    <SideContext.Provider value={{ isSideOpen: isSideOpen, setIsSideOpen: setIsSideOpen }}>
      {children}
    </SideContext.Provider>
  );
};

export default SideContext;
