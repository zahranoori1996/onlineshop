import { createContext, useContext, useState } from "react";
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
  cartQTY : number
}

// export const ShoppingCartContext = createContext<ShoppingCartContext>({
//     cartItems: []
// });
export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

  const cartQTY = cartItems.reduce((totalQTY , item)=> totalQTY + item.qty , 0)
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQTY,
        handleDecreaseProductQTY,
        getProductQTY,
        handleRemoveProduct,
        cartQTY
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
