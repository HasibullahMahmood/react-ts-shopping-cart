import { useState } from 'react';
import { useQuery } from 'react-query';

// components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

// custom components
import { Wrapper } from './App.styles';

// types
import CartItemType from 'models/ProductItemType';

const getProducts = async (): Promise<CartItemType[]> =>
	await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
	const { data, isLoading, error } = useQuery('products', getProducts);

	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong...</div>;

	return <div>Hello world</div>;
};

export default App;
