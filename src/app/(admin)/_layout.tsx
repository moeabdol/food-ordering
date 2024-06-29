import Colors from '@/constants/Colors';
import { useClientOnlyValue } from '@components/useClientOnlyValue';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: useClientOnlyValue(false, true),
				tabBarActiveTintColor: Colors.light.background,
				tabBarInactiveTintColor: 'gainsboro',
				tabBarStyle: {
					backgroundColor: Colors.light.tint,
				},
			}}
		>
			<Tabs.Screen name="index" options={{ href: null }} />
			<Tabs.Screen
				name="menu"
				options={{
					title: 'Menu',
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="cutlery" color={color} />
					),
					headerRight: () => (
						<Link href="/modal" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="info-circle"
										size={25}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: 'Orders',
					tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
				}}
			/>
		</Tabs>
	);
}
