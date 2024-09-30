import { Alignment } from "../../../components/Alignment";
import { BaseWindow } from "../../../components/BaseWindow";
import { ButtonLink } from "../../../components/ButtonLink";
import { ImageWithText } from "../../../components/ImageWithText";
import { Paragraph } from "../../../components/Paragraph";
import { Title } from "../../../components/Title";

export function Sisdle() {
    const variant = "blue";

    return (
        <BaseWindow title="SISDLE" variant={variant} close_to="/projects">
            <Title variant={variant}>SISDLE</Title>
            <ImageWithText src="/sisdle.webp" description="Apresentação do SISDLE na feira de cursos do IFPR." />
            
            <Paragraph>
                O SISDLE, que significa Sistema Inteligente de Suporte ao Descarte de Lixo Eletroquímico, era um sistema de gerenciamento de lixeiras inteligentes. A partir de uma lixeira equipada com sensores, era possível saber o quanto aquela lixeira estava cheia. Essa informação podia ser acessada tanto pelos cidadãos que buscavam uma lixeira, quanto pelo serviço de limpeza, e o aplicativo até criava a rota ideal para limpar todas as lixeiras cheias. <br/><br/>

                Fui convidado por um veterano para ser voluntário no projeto do SISDLE. Este projeto foi minha primeira experiência desenvolvendo em grupo. Aprendi muito sobre como mexer no GitHub de forma colaborativa e também sobre boas práticas. Hoje em dia, quando trabalho em grupo, tento repassar o que aprendi.<br/><br/>
            </Paragraph>

            <Alignment>
                <ButtonLink variant="blue" to="https://drive.google.com/file/d/1ajDIUGxtxGgmwYUEkd4cT4qPt9nLphM1/view?usp=drive_link" content="Entidades" />
                <ButtonLink variant="blue" to="https://github.com/Imenatrix/sisdle_web" content="GitHub" />
            </Alignment>
        </BaseWindow>
    )
}
