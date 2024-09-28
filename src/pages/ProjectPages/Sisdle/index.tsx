import { BaseWindow } from "../../../components/BaseWindow";
import { ImageWithText } from "../../../components/ImageWithText";
import { Paragraph } from "../../../components/Paragraph";
import { Title } from "../../../components/Title";

export function Sisdle() {
    const variant = "blue"

    return (
        <BaseWindow title="Sisdle" variant={variant} close_to="/projects">
            <Title variant={variant}>Smart Harpia</Title>
            <ImageWithText src="/smart.jpg" description="Descrição da imagem"/>
            <Paragraph>teste</Paragraph>
        </BaseWindow>
    )
}