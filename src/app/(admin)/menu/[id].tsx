import { defaultPizzaImage } from '@/components/ProductListItem';
import products from '@assets/data/products';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function ProductDetailsScreen() {
	const { id } = useLocalSearchParams();
	const product = products.find(p => p.id.toString() === id);

	if (!product) {
		return <Text>Product not found!</Text>;
	}

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: product.name }} />
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
	},
	image: {
		width: '100%',
		aspectRatio: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	price: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default ProductDetailsScreen;
