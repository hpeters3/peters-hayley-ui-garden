import type { CardProps } from './card.types';
import { CardContainer, CardImage, CardTitle, CardDescription } from '../../Generic.styles.js';

export function Card({imageSrc, imageAlt = "Image", title, description, backgroundColor, disabled,}: CardProps)
{
  return (
    <CardContainer style={{backgroundColor: disabled ? '#eee' : backgroundColor, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1}}>
      <CardImage src={imageSrc} alt={imageAlt} />
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CardContainer>
  );
}