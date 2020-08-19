import React from 'react';
import { BannerContainer, Container, ImageBanner } from './styles';
import banner from '../../assets/img/icon.png';

export default function MainWrapper() {
	return (
		<BannerContainer>
		<Container>
			<Container.Item>
				<Container.Title>
          			<Container.Span>Plataforma para compartilhamento de vídeos sobre{' '}</Container.Span>
					<Container.Span>Finanças</Container.Span>.
				</Container.Title>
			</Container.Item>

			<Container.Item>
				<ImageBanner src={banner} alt="Poupaflix" />
			</Container.Item>
		</Container>
	</BannerContainer>
	);
}
