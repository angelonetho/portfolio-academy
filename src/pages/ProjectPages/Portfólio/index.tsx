import { Alignment } from "../../../components/Alignment";
import { BaseWindow } from "../../../components/BaseWindow";
import { ButtonLink } from "../../../components/ButtonLink";
import { ImageWithText } from "../../../components/ImageWithText";
import { Paragraph } from "../../../components/Paragraph";
import { Title } from "../../../components/Title";

export function Portfolio() {
    const variant = "blue"

    return (
        <BaseWindow title="Portfolio" variant={variant} close_to="/projects">
            <Title variant={variant}>Portfolio</Title>
            <ImageWithText src="/portfolio.webp" description="(Eu já vi isso em algum lugar)"/>
            <Paragraph>

                Este portfólio foi desenvolvido especialmente para o processo seletivo da Apple Developer Academy da PUCPR.<br/><br/>

                O processo de desenvolvimento deste portfólio começou pelo design no Figma.<br/><br/>

                A ideia era criar um projeto onde eu pudesse destacar minha criatividade e minhas habilidades, inclusive no design. Então, embora a página principal seja minimalista, lembrando um terminal, ela cria justamente o contraste com as páginas seguintes, que simulam um sistema operacional. Esse sistema foi inspirado no estilo "KpopOS", um retrô moderno utilizado pelo Spotify em campanhas de Kpop. Todas as cores foram pensadas com um propósito para causar impactos diferentes aos leitores do site.<br/><br/>
                
            </Paragraph>
            <ImageWithText src="/inspiration.webp" description="Design de inspiração do KpopOS"/>
            <Paragraph>
                O rascunho do projeto foi criado em HTML e CSS puros, mas foi decidido migrar para o React para melhorar a performance e diminuir a repetição de código.<br/><br/>

                Atualmente, o portfólio está sendo hospedado pela Vercel (<a href="portfolio.netho.dev">portfolio.netho.dev</a>) e pela Netlify (<a href="academy.netho.dev">academy.netho.dev</a>).<br/><br/>

                Eu nunca tinha feito um portfólio antes, e embora não tenha sido um desafio muito técnico, é interessante poder olhar para trás e ver o quanto você evoluiu ao longo dos anos.<br/><br/>

            </Paragraph>

            <Alignment>
                <ButtonLink variant="blue" to="https://www.figma.com/design/vBw7TPvGhz3j1RQja1erm0/Portfolio-Prototype?node-id=0-1&t=fKqJWWYIpaDp1M11-1" content="Projeto Figma" />
                <ButtonLink variant="blue" to="https://github.com/angelonetho/portfolio-academy" content="GitHub" />
            </Alignment>
        </BaseWindow>
    )
}
