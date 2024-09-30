import { Alignment } from "../../../components/Alignment";
import { BaseWindow } from "../../../components/BaseWindow";
import { ButtonLink } from "../../../components/ButtonLink";
import { ImageWithText } from "../../../components/ImageWithText";
import { Paragraph } from "../../../components/Paragraph";
import { Title } from "../../../components/Title";

export function SmartHarpia() {
    const variant = "blue";

    return (
        <BaseWindow title="Smart Harpia" variant={variant} close_to="/projects">
            <Title variant={variant}>Smart Harpia</Title>
            <ImageWithText src="/smart.webp" description="Foto com a banca do TCC." />

            <Paragraph>
                O Smart Harpia foi o meu maior projeto até agora.<br/><br/>

                Comecei o desenvolvimento dele em 2022, quando consegui ser bolsista da Incubadora do IFPR.<br/><br/>

                Eu me envolvi tanto no projeto que os professores falaram para eu utilizá-lo como TCC, e foi o que eu fiz.<br/><br/>

                O Smart Harpia surgiu como uma ideia de monitoramento de áreas de conservação ambiental, mas eu quis expandir essa ideia para todo um meio urbano ligado às cidades inteligentes, visto sua capacidade de coletar dados em massa.<br/><br/>
            </Paragraph>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/3i18kBwYwgM?si=uQVpg617tQMISzrg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
            <Paragraph>
                Com este projeto, eu aprendi muita coisa; foi o meu primeiro "estágio", então pela primeira vez na minha vida eu tinha esse compromisso de entrega e a disciplina de trabalhar 20 horas semanais. Aprendi também sobre privacidade; na pré-banca surgiram questionamentos em relação à Lei de Proteção de Dados e até questões éticas, então reformulei todo o sistema de tal modo que ele não pudesse ser utilizado com o intuito de rastrear pessoas. Eu também tive que desenvolver minhas habilidades de apresentação; era minha primeira vez na frente de uma banca, e eu precisava controlar a ansiedade para fazer uma boa apresentação. <br/><br/>
                
                Foi nesse projeto também que eu assisti um vídeo chamado "world's shortest UI/UX design course" e aprendi utilizar o Figma, então esse projeto conta com um plano de estilização.
            </Paragraph>

            <Alignment>
                <ButtonLink variant="blue" to="https://drive.google.com/file/d/1PFy_d6JaoUobzE3xtLYFpQk8Pn2lZSym/view?usp=sharing" content="Artigo" />
                <ButtonLink variant="blue" to="https://alba.ac.mz/index.php/alba/article/view/182" content="Revista ALBA" />
                <ButtonLink variant="blue" to="https://github.com/angelonetho/smart-harpia-api" content="GitHub API" />
                <ButtonLink variant="blue" to="https://github.com/angelonetho/smart-harpia-web" content="GitHub Web" />
                <ButtonLink variant="blue" to="https://www.figma.com/design/TvTWUWCfLfaUPMQAnBo6em/Smart-Harpia-Style-Book?node-id=28-712&t=QrUl04JiiY1JWAdt-1" content="Style Book Figma" />
            </Alignment>
        </BaseWindow>
    )
}
