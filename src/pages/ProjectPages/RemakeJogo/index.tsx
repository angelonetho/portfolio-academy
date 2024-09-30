import { Alignment } from "../../../components/Alignment";
import { BaseWindow } from "../../../components/BaseWindow";
import { ButtonLink } from "../../../components/ButtonLink";
import { ImageWithText } from "../../../components/ImageWithText";
import { Paragraph } from "../../../components/Paragraph";
import { Title } from "../../../components/Title";

export function RemakeJogo() {
    const variant = "blue";

    return (
        <BaseWindow title="Remake Jogo" variant={variant} close_to="/projects">
            <Title variant={variant}>Remake Jogo</Title>
            <ImageWithText src="/remake.webp" description="" />
            
            <Paragraph>
                Esse foi o meu primeiro projeto em grupo na PUC, na matéria de Experiência Criativa.
                Enquanto a gente separava as funções do grupo, talvez por ser o início do curso, ninguém queria ficar com a parte de programar o jogo, então eu me propus a fazer.<br/><br/>

                Porém, eu precisava de algo visual para desenvolver o jogo, então peguei os sprites do jogo das Meninas Superpoderosas: HIM and Seek, que foi lançado para o Game Boy Advance em 2002. Para a trilha sonora, escolhi músicas do <a href="https://open.spotify.com/intl-pt/artist/6HvZYsbFfjnjFrWF950C9d?si=v5yxDv9OTC-4vaRGAlMWGA">NewJeans</a> na versão instrumental, cujo conceito visual também é inspirado nas Meninas Superpoderosas.<br/><br/>

                Assim, entreguei um jogo pronto para a minha equipe, onde eles só precisariam trocar as imagens. De longe, foi o projeto mais legal e criativo que eu fiz em Experiência Criativa I.<br/><br/>
            </Paragraph>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/ueQODnPz-_M?si=kP1WmryDU-2OAL3U&amp;start=27" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <Paragraph>
                O maior desafio desse projeto foi a Game Engine que o professor Pavão nos limitou a usar. Então, eu tive que ser criativo e cuidadoso, e me senti como um desenvolvedor de jogos antigos, pois a própria engine limitava a quantidade de eventos que o jogo poderia ter.
            </Paragraph>

            <ImageWithText src="/remakedev.png" description="Visão de desenvolvimento do movimento dos inimigos; ao colidirem com os blocos azuis, eles invertem o estado para andar na outra direção." />

            <Alignment>
                <ButtonLink variant="blue" to="https://www.spriters-resource.com/game_boy_advance/thepowerpuffgirlshimseek/" content="Referências" />
            </Alignment>
        </BaseWindow>
    )
}
