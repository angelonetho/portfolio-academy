import { BaseWindow } from "../../components/BaseWindow";
import { ImageWithText } from "../../components/ImageWithText";
import { Paragraph } from "../../components/Paragraph";
import { Title } from "../../components/Title";

export function Collection() {
    return (
        <BaseWindow>
            <Title>Smart Harpia</Title>
            <ImageWithText src="/smart.jpg" description="Descrição da imagem"/>
            <Paragraph>teste</Paragraph>
        </BaseWindow>
    )
}