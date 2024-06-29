import { Stack } from 'expo-router';
import React from 'react';

function MenuStack() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: 'Menu' }} />
		</Stack>
	);
}

export default MenuStack;
