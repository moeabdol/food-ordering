import { useCart } from '@/providers/CartProvider';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, FlatList, View } from 'react-native';

function Cart() {
	const { items } = useCart();

	return (
		<View>
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	);
}

export default Cart;
