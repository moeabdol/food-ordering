import type { Product } from '@/types';
import Colors from '@constants/Colors';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type ProductListItemProps = {
	product: Product;
};

const defaultPizzaImage =
	'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

function ProductListItem({ product }: ProductListItemProps) {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: product.image ?? defaultPizzaImage }}
			/>
			<Text style={styles.title}>{product.name}</Text>
			<Text style={styles.price}>${product.price}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 20,
		maxWidth: '50%',
	},
	image: {
		width: '100%',
		aspectRatio: 1,
		resizeMode: 'contain',
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
		marginVertical: 10,
	},
	price: {
		color: Colors.light.tint,
		fontWeight: 'bold',
	},
});

export default ProductListItem;
