import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuComponent = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  const valueProvider = { isLogin: isLogin, setIsLogin: setIsLogin };
  return (
    <MenuContext.Provider value={valueProvider}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuComponent;
