import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [messageDb, setMessagesDb] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPin, setIsPin] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const fetchMessage = async () => {
    const data = await fetch("/api/v1/message/get-our-messages");
    const user = await data.json();
    if (!user) return setMessagesDb({});
    console.log(user.data);
    setMessagesDb(user.data.slice(-8));
    setLoading(true);
  };

  const verifyFunc = () => {
    const sender = sessionStorage.getItem("sender");
    if (!sender) {
      setIsPin(true);
      setLoading(true);
    }

    if (sender) {
      console.log(sender);
      setLoading(true);
      setIsPin(false);
      setIsHome(true);
      fetchMessage();
    }
  };

  useEffect(() => {
    verifyFunc();
  }, []);

  return (
    <Context.Provider
      value={{
        messageDb,
        setMessagesDb,
        verifyFunc,
        isPin,
        loading,
        isHome,
        setIsHome,
        setIsPin,
        fetchMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
}
