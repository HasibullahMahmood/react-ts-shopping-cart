import { useState } from 'react';
import { useQuery } from 'react-query';

// components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

// custom components
import ProductItem from 'components/ProductItem/ProductItem';
import { Wrapper, StyledButton } from './App.styles';

// types
import CartItemType from 'models/ProductItemType';

const getProducts = async (): Promise<CartItemType[]> =>
	await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
	const { data, isLoading, error } = useQuery('products', getProducts);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState<CartItemType[]>([]);

	const getTotalItems = (items: CartItemType[]) => {
		return items.reduce((ack, item) => ack + item.amount, 0);
	};

	const handleAddToCart = (clickedItem: CartItemType) => {};

	const handleRemoveFromCart = () => {};

	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong...</div>;

	return (
		<Wrapper>
			<Drawer open={isCartOpen} onClose={() => setIsCartOpen(false)} anchor="right">
				this is drawer
			</Drawer>
			<StyledButton onClick={() => setIsCartOpen(true)}>
				<Badge color="error" badgeContent={getTotalItems(cartItems)}>
					<AddShoppingCart />
				</Badge>
			</StyledButton>
			<Grid container spacing={3}>
				{data?.map((item) => (
					<Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
						<ProductItem item={item} handleAddToCart={handleAddToCart} />
					</Grid>
				))}
			</Grid>
		</Wrapper>
	);
};

export default App;
