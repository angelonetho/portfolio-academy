import { Alignment } from "../../../components/Alignment";
import { BaseWindow } from "../../../components/BaseWindow";
import { ButtonLink } from "../../../components/ButtonLink";
import { ImageWithText } from "../../../components/ImageWithText";
import { Paragraph } from "../../../components/Paragraph";
import { Title } from "../../../components/Title";

export function HaruTickets() {
    const variant = "blue";

    return (
        <BaseWindow title="HaruTickets" variant={variant} close_to="/projects">
            <Title variant={variant}>Haru Tickets</Title>
            <ImageWithText src="/haru2.webp" description="Haru + Tickets = HaruTickets"/>
            <Paragraph>
                Esse foi um projeto pessoal que surgiu por vontade espontânea após eu ter ido ao show do Coldplay em 2023 e ao do Twice em 2024. Foram minhas primeiras experiências em shows e, por algum motivo, achei muito interessante imaginar a logística por trás dos ingressos, assim como toda a produção de um evento que reúne 50 mil pessoas em tão pouco tempo.<br/><br/>

                Quando começou o segundo semestre da PUC, comecei a ter aula de Arquitetura de Banco de Dados. O professor disse que a gente iria desenvolver um projeto livre, e foi aí que eu vi a oportunidade de desenvolver algo que eu queria enquanto ganhava nota na faculdade.<br/><br/>

                Eu incomodo aquele professor toda santa aula para continuar aprimorando o diagrama de banco de dados do projeto. Graças a algumas tarefas, já existe uma mini versão de protótipo do HaruTickets, feito em Python.<br/><br/>

                Com esse projeto, o professor de banco de dados me ajudou a expandir meu conhecimento sobre domínio, pensar em como realmente funcionam os sistemas que já existem e como "traduzir" isso para um software.
            </Paragraph>

            <Alignment>
                <ButtonLink variant="blue" to="https://excalidraw.com/#json=Pk1ZfdkxAbmV8sHwZVIRe,M4kbXtwqHAm9nblVAt4bUQ" content="Modelo Conceitual" />
                <ButtonLink variant="blue" to="https://github.com/angelonetho/tde-01-arquitetura-de-banco-de-dados" content="GitHub Protótipo" />
            </Alignment>
        </BaseWindow>
    );
}
