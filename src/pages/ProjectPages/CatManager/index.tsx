import { Alignment } from "../../../components/Alignment";
import { BaseWindow } from "../../../components/BaseWindow";
import { ButtonLink } from "../../../components/ButtonLink";
import { ImageWithText } from "../../../components/ImageWithText";
import { Paragraph } from "../../../components/Paragraph";
import { Title } from "../../../components/Title";

export function CatManager() {
    const variant = "blue";

    return (
        <BaseWindow title="Cat Manager" variant={variant} close_to="/projects">
            <Title variant={variant}>Cat Manager</Title>
            <ImageWithText src="/catmanager.webp" description="Dia da apresentação dos conceitos."/>
            <Paragraph>

                O Cat Manager foi o melhor projeto para se apresentar, pois era uma solução para um problema real que precisávamos resolver em Experiência Criativa. <br/><br/>

                Nosso cliente era a ONG Crazy Cat Gang. O professor chegou com uma lista de problemas que eles precisavam resolver, e escolhemos desenvolver um sistema para o gerenciamento dos voluntários da ONG.<br/><br/>

                Os designs entregues não estavam de acordo com o estilo da ONG. Então, decidi criar um novo design, e o grupo concordou em apresentá-lo no final.<br/><br/>

                O novo design foi feito com base no estilo já bem estabelecido da ONG, especialmente utilizando a cor amarela característica deles. No Figma, modeleu desde os componentes até as páginas principais. E fui além, expandindo a ideia: "Se já estamos gerenciando os voluntários, por que não integrar um sistema de inscrição para novos voluntários?".<br/><br/>

                Durante a apresentação, as três primeiras palavras da representante da ONG foram "Amei, amei, amei". Ela elogiou muito o design, e fiquei muito feliz em saber que algo que criei foi tão bem recebido. Ela adorou até o nome que dei: "Cat Manager".<br/><br/>

                A próxima etapa desse projeto ocorrerá a partir de outubro de 2024, durante as aulas de desenvolvimento web.<br/><br/>

                Com esse projeto, eu não aprendi nada técnico, já que ainda era só conceitual, mas achei incrível estar envolvido com a resolução de um problema real.

            </Paragraph>

            <Alignment>
                <ButtonLink variant="blue" to="https://www.figma.com/design/UeULh56kdsp1pSaQX337p2/Cat-Manager-Prototype?node-id=0-1&t=QrUl04JiiY1JWAdt-1" content="Figma" />
                <ButtonLink variant="blue" to="https://github.com/angelonetho/cat-manager-prototype" content="GitHub Protótipo" />
            </Alignment>
        </BaseWindow>
    );
}
