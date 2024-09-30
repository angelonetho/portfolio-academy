import { Alignment } from "../../../components/Alignment";
import { BaseWindow } from "../../../components/BaseWindow";
import { ButtonLink } from "../../../components/ButtonLink";
import { ImageWithText } from "../../../components/ImageWithText";
import { Paragraph } from "../../../components/Paragraph";
import { Title } from "../../../components/Title";

export function ProjetoJupiter() {
    const variant = "blue"

    return (
        <BaseWindow title="Projeto Jupiter" variant={variant} close_to="/projects">
            <Title variant={variant}>Projeto Jupiter</Title>
            <ImageWithText src="/jupiter.webp" description="Apresentação do plano de negócio em 2023."/>
            <Paragraph>
                O Projeto Júpiter é o que está em desenvolvimento há mais tempo. <br/><br/>

                Ele surgiu com a ideia simples de ser um diário das emoções que você sente durante o dia, assim seu psicólogo poderia ter acesso a como você se sentiu ao longo da semana, e não apenas no dia da consulta.<br/><br/>

                Porém, certo dia, conversando com minha psicóloga sobre a ideia, ela comentou que simplesmente não existe uma opção realmente boa no mercado para o gerenciamento de uma clínica de psicologia. Todos os produtos atuais têm deficiências, e quem sai perdendo são os consumidores. Então, a ideia do Projeto Júpiter foi expandida para se tornar todo um ecossistema de comunicação entre o psicólogo e o paciente. Dessa forma, o paciente poderia agendar sessões, registrar o diário das emoções e consultar o financeiro, enquanto o psicólogo teria um impacto ambiental positivo ao economizar as milhares de folhas de registros que normalmente são armazenadas.<br/><br/>

                O primeiro protótipo do projeto foi desenvolvido ainda no IFPR como trabalho bimestral.
                O desenvolvimento do projeto ficou pausado desde então, pois eu queria adquirir mais conhecimento para entregar um software de qualidade e seguro, já que ele lidaria com informações sensíveis dos pacientes.<br/><br/>

                Em 2023, foi criado um plano de negócios na matéria de Empreendedorismo do IFPR.<br/><br/>
            </Paragraph>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/VP3wTR4X-vE?si=9RqLrRxRawN653GH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IuPBO0MUqmw?si=x0iUCfDtO0zLjcWH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
            <Alignment>
                <ButtonLink variant="blue" to="https://drive.google.com/file/d/1fL60592qlA2PHlICkL17qxbMLuRJuMcT/view?usp=drive_link" content="Plano de negócio" />
                <ButtonLink variant="blue" to="https://github.com/angelonetho/projeto-integrador-Angelo-Netho" content="GitHub Protótipo" />
            </Alignment>
        </BaseWindow>
    )
}
