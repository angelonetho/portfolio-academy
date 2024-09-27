import { ImageContainer } from "./style";

interface ImageWithTextProps {
    src: string;
    description: string;
}

export function ImageWithText({src, description}: ImageWithTextProps) {
    return (
        <ImageContainer>
            <img src={src}/>
            <span>{description}</span>
        </ImageContainer>
    )
}