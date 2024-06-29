import type { CartItem, Product } from '@/types';
import React, {
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from 'react';

type CartType = {
	items: CartItem[];
	addItem: (product: Product, size: CartItem['size']) => void;
};

export const CartContext = createContext<CartType>({
	items: [],
	addItem: () => {},
});

function CartProvider({ children }: PropsWithChildren) {
	const [items, setItems] = useState<CartItem[]>([]);

	const onAddItem = (product: Product, size: CartItem['size']) => {
		// TODO: if already in cart implement quantity

		const newCartItem: CartItem = {
			id: '1', // should be auto generated
			product,
			product_id: product.id,
			size,
			quantity: 1,
		};
		setItems([newCartItem, ...items]);
	};

	// TODO: updateQuantity()

	return (
		<CartContext.Provider value={{ items, addItem: onAddItem }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;

export const useCart = () => useContext(CartContext);
