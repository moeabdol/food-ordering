import type { Product } from '@/types';
import Colors from '@constants/Colors';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

type ProductListItemProps = {
	product: Product;
};

export const defaultPizzaImage =
	'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

function ProductListItem({ product }: ProductListItemProps) {
	return (
		<Link href={`/menu/${product.id}`} asChild>
			<Pressable style={styles.container}>
				<Image
					style={styles.image}
					source={{ uri: product.image ?? defaultPizzaImage }}
				/>
				<Text style={styles.title}>{product.name}</Text>
				<Text style={styles.price}>${product.price}</Text>
			</Pressable>
		</Link>
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
