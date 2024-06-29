import Button from '@/components/Button';
import CartListItem from '@/components/CartListItem';
import { useCart } from '@/providers/CartProvider';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Platform, Text, View } from 'react-native';

function Cart() {
	const { items, total } = useCart();

	return (
		<View style={{ padding: 10 }}>
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
			<FlatList
				data={items}
				renderItem={({ item }) => <CartListItem cartItem={item} />}
				contentContainerStyle={{ gap: 10 }}
			/>
			<Text style={{ marginTop: 20, fontSize: 20, fontWeight: '500' }}>
				Total: ${total}
			</Text>
			<Button text="Checkout" />
		</View>
	);
}

export default Cart;
