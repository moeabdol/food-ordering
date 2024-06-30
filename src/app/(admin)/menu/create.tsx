import Button from '@/components/Button';
import { defaultPizzaImage } from '@/components/ProductListItem';
import Colors from '@/constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

function CreateProductScreen() {
	const [name, setName] = useState<string>();
	const [price, setPrice] = useState<string>();
	const [errors, setErrors] = useState<string>();
	const [image, setImage] = useState<string>();

	const resetField = () => {
		setName(undefined);
		setPrice(undefined);
	};

	const validateInput = () => {
		setErrors(undefined);
		if (!name) {
			setErrors('Name is required!');
			return false;
		}
		if (!price) {
			setErrors('Price is required!');
			return false;
		}
		if (isNaN(parseFloat(price))) {
			setErrors('Price is not a number!');
			return false;
		}
		return true;
	};

	const onCreate = () => {
		if (!validateInput()) return;

		resetField();
	};

	const pickImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.canceled) setImage(result.assets[0].uri);
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'Create Product' }} />

			<Image
				style={styles.image}
				source={{ uri: image ?? defaultPizzaImage }}
			/>
			<Text style={styles.textButton} onPress={pickImage}>
				Select Image
			</Text>

			<Text style={styles.label}>Name</Text>
			<TextInput
				placeholder="Name"
				style={styles.input}
				value={name}
				onChangeText={setName}
			/>

			<Text style={styles.label}>Price ($)</Text>
			<TextInput
				placeholder="9.99"
				style={styles.input}
				keyboardType="numeric"
				value={price}
				onChangeText={setPrice}
			/>

			<Text style={{ color: 'red' }}>{errors}</Text>

			<Button onPress={onCreate} text="Create" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 10,
	},
	image: {
		width: '50%',
		aspectRatio: 1,
		alignSelf: 'center',
	},
	textButton: {
		alignSelf: 'center',
		fontWeight: 'bold',
		color: Colors.light.tint,
		marginVertical: 10,
	},
	label: {
		color: 'gray',
		fontSize: 16,
	},
	input: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 5,
		marginTop: 5,
		marginBottom: 20,
	},
});

export default CreateProductScreen;
