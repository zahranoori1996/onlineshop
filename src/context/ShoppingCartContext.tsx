import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
interface ShoppingCartProvider {
  children: React.ReactNode;
}
interface CartItem {
  id: number;
  qty: number;
}
interface ShoppingCartContext {
  cartItems: CartItem[];
  handleIncreaseProductQTY: (id: number) => void;
  handleDecreaseProductQTY: (id: number) => void;
  getProductQTY: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQTY : number;
  isLogin: boolean;
  handleLogin : ()=> void;
  handleLogOut : ()=> void;
}

// export const ShoppingCartContext = createContext<ShoppingCartContext>({
//     cartItems: []
// });
export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  // const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cartItems',[]);
  
  

  const handleIncreaseProductQTY = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);
      //empty basket shop
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      }
      // be products
      else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const handleDecreaseProductQTY = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);
      //if delete item
      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      }
      // be products
      else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQTY = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id != id)
    );
  };

  const cartQTY = cartItems.reduce((totalQTY , item)=> totalQTY + item.qty , 0);

  const [isLogin,setIsLogin] = useState(false);
  const navigate = useNavigate()

// in doroste dar vaghe
// const handleLogin = ()=>{
//   login('zahra','Reza1109').then((res)=>{
//     let token = res.token
//     localStorage.setItem("token",token);
//     setIsLogin(true);
//   })
// }


const handleLogin = ()=>{
  login('zahra','Reza1109').finally( ()=>{
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ900";
    localStorage.setItem("token",token);
    setIsLogin(true);
   navigate('/cart')

  })
}
const handleLogOut = ()=>{
  setIsLogin(false)
  navigate('/login');
  localStorage.removeItem('token')

}

useEffect(()=>{
  let token = localStorage.getItem('token');
  if(token){
    setIsLogin(true)
  }
},[])

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQTY,
        handleDecreaseProductQTY,
        getProductQTY,
        handleRemoveProduct,
        cartQTY,
        isLogin,
        handleLogin,
        handleLogOut
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
