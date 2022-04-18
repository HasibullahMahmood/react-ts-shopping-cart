import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 20px;
	border: 1px solid lightblue;
	height: 100%;

	img {
		max-height: 250px;
		object-fit: contain;
		height: 100%;
		border-radius: 20px 20px 0 0;
	}

	div {
		padding: 15px;
	}

	button {
		border-radius: 0 0 20px 20px;
	}
`;

export default Wrapper;
