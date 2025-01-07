/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

function StoreProvider({ children }) {
  const [unreadAlerts, setUnreadAlerts] = useState(0);
  const [showModal, setShowModal] = useState(false);
  return (
    <StoreContext.Provider
      value={{
        unreadAlerts,
        setUnreadAlerts,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

function useStores() {
  const context = useContext(StoreContext);
  if (context === undefined) throw new Error("context used outside of scope");
  return context;
}

export { StoreProvider, useStores };
