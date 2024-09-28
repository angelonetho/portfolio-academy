import { BaseWindow } from "../../../components/BaseWindow";
import { ImageWithText } from "../../../components/ImageWithText";
import { Paragraph } from "../../../components/Paragraph";
import { Title } from "../../../components/Title";

export function SmartHarpia() {
    const variant = "blue"

    return (
        <BaseWindow title="Smart Harpia" variant={variant} close_to="/projects">
            <Title variant={variant}>Smart Harpia</Title>
            <ImageWithText src="/smart.jpg" description="Descrição da imagem"/>
            <Paragraph>teste</Paragraph>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ueQODnPz-_M?si=kP1WmryDU-2OAL3U&amp;start=27" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex, ea sint commodi deleniti eligendi vitae saepe soluta quasi doloremque corrupti quisquam nostrum delectus explicabo dolorem hic est quia. Laboriosam?</Paragraph>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3i18kBwYwgM?si=uQVpg617tQMISzrg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </BaseWindow>
    )
}