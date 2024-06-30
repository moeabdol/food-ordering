import { Stack } from 'expo-router';
import React from 'react';

function MenuStack() {
	return (
		<Stack>
			<Stack.Screen name="list" options={{ headerShown: false }} />
		</Stack>
	);
}

export default MenuStack;
