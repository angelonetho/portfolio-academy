import { BaseWindow } from "../../components/BaseWindow";
import { ImageWithText } from "../../components/ImageWithText";
import { Paragraph } from "../../components/Paragraph";
import { Title } from "../../components/Title";

export function Collection() {
    return (
        <BaseWindow title="Minha Coleção" variant="orange" close_to="/">
            <Title variant="orange">Smart Harpia</Title>
            <ImageWithText src="/smart.jpg" description="Descrição da imagem"/>
            <Paragraph>teste</Paragraph>
        </BaseWindow>
    )
}