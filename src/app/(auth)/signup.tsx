import Button from '@components/Button';
import Colors from '@constants/Colors';
import { Link, Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function SignUp() {
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'Sign up' }} />

			<Text style={styles.label}>Email</Text>
			<TextInput
				style={styles.input}
				placeholder="jon@gmail.com"
				value={email}
				onChangeText={setEmail}
			/>

			<Text style={styles.label}>Password</Text>
			<TextInput
				style={styles.input}
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>

			<Button text="Create account" />
			<Link href="/signin" style={styles.textButton}>
				Sign in
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},
	label: {
		color: 'gray',
	},
	input: {
		borderWidth: 1,
		borderColor: 'gray',
		padding: 10,
		marginTop: 5,
		marginBottom: 20,
		backgroundColor: 'white',
		borderRadius: 5,
	},
	textButton: {
		alignSelf: 'center',
		fontWeight: 'bold',
		color: Colors.light.tint,
		marginVertical: 10,
	},
});

export default SignUp;
