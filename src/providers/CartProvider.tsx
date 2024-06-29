import type { CartItem, Product } from '@/types';
import { randomUUID } from 'expo-crypto';
import React, {
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from 'react';

type CartType = {
	items: CartItem[];
	addItem: (product: Product, size: CartItem['size']) => void;
	updateQuantity: (itemId: string, amount: -1 | 1) => void;
};

export const CartContext = createContext<CartType>({
	items: [],
	addItem: () => {},
	updateQuantity: () => {},
});

function CartProvider({ children }: PropsWithChildren) {
	const [items, setItems] = useState<CartItem[]>([]);

	const onAddItem = (product: Product, size: CartItem['size']) => {
		const existingItem = items.find(
			item => item.product_id === product.id && item.size === size
		);

		if (existingItem) {
			updateQuantity(existingItem.id, 1);
			return;
		}

		const newCartItem: CartItem = {
			id: randomUUID(),
			product,
			product_id: product.id,
			size,
			quantity: 1,
		};
		setItems([newCartItem, ...items]);
	};

	const updateQuantity = (itemId: string, amount: -1 | 1) => {
		setItems(
			items
				.map(item =>
					item.id !== itemId
						? item
						: { ...item, quantity: item.quantity + amount }
				)
				.filter(item => item.quantity > 0)
		);
	};

	return (
		<CartContext.Provider value={{ items, addItem: onAddItem, updateQuantity }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;

export const useCart = () => useContext(CartContext);
