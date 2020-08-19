import styled from 'styled-components';


export const Container = styled.section`
	margin-left: 5%;
	margin-right: 5%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	z-index: 10;
	@media (max-width: 800px) {
		padding-top: 100px;
		flex-direction: column;
	}
`;

export const ImageChat = styled.img`
  margin-top: 100px;
  margin-left: 70px;
  max-width:80%;
	
`;

export const ImageContainer = styled.section`
	height: 80vh;
	position: relative;
	color: #fff;
	background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
	background-size: cover;
	background-position: center;
	@media (max-width: 800px) {
		height: auto;
		min-width: 50vh;
		min-height: 100vh;
	}
	&:after,
	&:before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		height: 20%;
	}
	&:before {
		top: 0;
		height: 100%;
		/* background: rgba(0, 0, 0, 0.5); */
	}
	&:after {
		bottom: 0;
		/* background: linear-gradient(0deg, #141414 0%, transparent 100%); */
	}
`;