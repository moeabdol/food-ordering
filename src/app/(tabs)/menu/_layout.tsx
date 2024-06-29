import { Stack } from 'expo-router';
import React from 'react';

function MenuStack() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: 'Menu' }} />
			<Stack.Screen name="[id]" options={{ title: 'Details' }} />
		</Stack>
	);
}

export default MenuStack;
