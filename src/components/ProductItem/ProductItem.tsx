import React from 'react';
import Button from '@material-ui/core/Button';
// types
import ProductItemType from 'models/ProductItemType';
// styles
import Wrapper from './productItem.styles';

type PropsType = {
	item: ProductItemType;
	handleAddToCart: (clickedItem: ProductItemType) => void;
};

const ProductItem: React.FC<PropsType> = ({ item, handleAddToCart }) => (
	<Wrapper>
		<img src={item.image} alt={item.title} />
		<div>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
			<h3>${item.price}</h3>
		</div>
		<Button onClick={handleAddToCart.bind(null, item)}>Add to cart</Button>
	</Wrapper>
);

export default ProductItem;
