import type { CardProps } from './card.types';
import { CardContainer, CardImage, CardTitle, CardDescription } from '../../Generic.styles.js';

export function Card({ imageSrc, imageAlt = "Image", title, description }: CardProps) {
  return (
    <div>
      <CardContainer>
        <CardImage src={imageSrc} alt={imageAlt} />
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardContainer>
    </div>
  );
}