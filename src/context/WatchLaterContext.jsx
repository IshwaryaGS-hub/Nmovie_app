import { createContext, useContext, useState } from "react";

const WatchLaterContext = createContext();

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);

  const addWatchLater = (movie) => {
    setWatchLater([...watchLater, movie]);
  };

  const removeWatchLater = (id) => {
    setWatchLater(watchLater.filter((m) => m.id !== id));
  };

  return (
    <WatchLaterContext.Provider
      value={{ watchLater, addWatchLater, removeWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchLaterContext);