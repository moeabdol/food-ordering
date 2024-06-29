import Button from '@/components/Button';
import { defaultPizzaImage } from '@/components/ProductListItem';
import products from '@assets/data/products';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const sizes = ['S', 'M', 'L', 'XL'];

function ProductDetailsScreen() {
	const { id } = useLocalSearchParams();
	const product = products.find(p => p.id.toString() === id);
	const [selectedSize, setSelectedSize] = useState('M');

	const addToCart = () => {};

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

			<Text>Select size</Text>
			<View style={styles.sizes}>
				{sizes.map((size, index) => (
					<Pressable
						key={index}
						style={[
							styles.size,
							{
								backgroundColor: selectedSize === size ? 'gainsboro' : 'white',
							},
						]}
						onPress={() => setSelectedSize(size)}
					>
						<Text
							style={[
								styles.sizeText,
								{ color: selectedSize === size ? 'black' : 'gray' },
							]}
						>
							{size}
						</Text>
					</Pressable>
				))}
			</View>

			<Text style={styles.price}>${product.price}</Text>
			<Button text="Add to cart" onPress={addToCart} />
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
	price: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 'auto',
	},
	sizes: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 10,
	},
	size: {
		backgroundColor: 'gainsboro',
		width: 50,
		aspectRatio: 1,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sizeText: {
		fontSize: 20,
		fontWeight: '500',
	},
});

export default ProductDetailsScreen;