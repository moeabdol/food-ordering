import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';
import React from 'react';
import { View } from 'react-native';

function MenuScreen() {
	return (
		<View>
			<ProductListItem product={products[0]} />
			<ProductListItem product={products[1]} />
		</View>
	);
}

export default MenuScreen;
