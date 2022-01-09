import React, { useState, useContext, createContext } from "react";
import { useCallback } from "react";

interface Drink {
  id: number;
  title: string;
  description: string;
  value: number;
  image_url: string;
}

interface DrinksData {
  listDrink: Drink[];
  addDrink(drink: Drink): void;
  addListDrink(drinks: Drink[]): void;
}

const DrinksContext = createContext<DrinksData>({} as DrinksData);

const DrinksProvider: React.FC = ({ children }) => {
  const [listDrink, setListDrink] = useState<Drink[]>([]);

  const addDrink = useCallback(
    (drink: Drink) => {
      setListDrink([...listDrink, drink]);
    },
    [listDrink]
  );

  const addListDrink = useCallback((drinks: Drink[]) => {
    setListDrink(drinks);
  }, []);

  return (
    <DrinksContext.Provider value={{ addDrink, listDrink, addListDrink }}>
      {children}
    </DrinksContext.Provider>
  );
};

const useDrinks = function (): DrinksData {
  const context = useContext(DrinksContext);

  if (!context) {
    throw new Error("useDrinks must be used within DrinksProvider");
  }

  return context;
};

export { useDrinks, DrinksProvider };
