import OrderListItem from '@/components/OrderListItem';
import orders from '@assets/data/orders';
import React from 'react';
import { FlatList } from 'react-native';

function Orders() {
	return (
		<FlatList
			data={orders}
			renderItem={({ item }) => <OrderListItem order={item} />}
			contentContainerStyle={{ gap: 10, padding: 10 }}
		/>
	);
}

export default Orders;
