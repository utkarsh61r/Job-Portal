import { createContext,useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

const [searchfilter, setSearchFilter] = useState({
  title: "",
  location: "",
})
const [issearched, setIsSearched] = useState(false)



  const value = {
    searchfilter,
    setSearchFilter,
    issearched,
    setIsSearched,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
