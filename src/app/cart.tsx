import CartListItem from '@/components/CartListItem';
import { useCart } from '@/providers/CartProvider';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Platform, View } from 'react-native';

function Cart() {
	const { items } = useCart();

	return (
		<View>
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
			<FlatList
				data={items}
				renderItem={({ item }) => <CartListItem cartItem={item} />}
				contentContainerStyle={{ padding: 10, gap: 10 }}
			/>
		</View>
	);
}

export default Cart;
