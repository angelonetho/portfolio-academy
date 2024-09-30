import { BaseWindow } from "../../components/BaseWindow";
import { ImageWithText } from "../../components/ImageWithText";
import { Paragraph } from "../../components/Paragraph";
import { Title } from "../../components/Title";

export function Collection() {
    return (
        <BaseWindow title="Minha Coleção" variant="orange" close_to="/">
            <Title variant="orange">Minha Coleção</Title>
            <ImageWithText src="/smart.jpg" description="Descrição da imagem"/>
            <Paragraph>
                Eu já te contei como é a minha vida? <br/><br/>

                Eu tenho 19 anos, faço 20 em janeiro do ano que vem. Nasci em Curitiba mas morei toda minha vida em Paranaguá, no litoral do Paraná. Isso até eu me mudar para Curitiba com o meu irmão que já estava na faculdade.<br/><br/>

                Mas eu vou pular essas informações que tem na minha identidade e mostrar coisas, coisas aleatórias, que eu acho dahora, que eu fiz na minha vida.<br/><br/>

                Desculpa se eu escrever muito (eu gosto de escrever muito).
            </Paragraph>
            <Title variant="orange">Minecraft</Title>
            <Paragraph>
                Se você assistiu meu vídeo, ele começa falando que a minha jornada começou no Minecraft. E de fato, foi lá mesmo, e embora eu tenha expandido para outras áreas fora do jogo, eu ainda continuei desenvolvendo para o Minecraft. <br/><br/>

                Eu era fascinado por servidores, a experiência do multijogador. Certo dia eu bati a mão na mesa e disse "Como assim eles conseguem fazer isso? Eu também quero fazer igual eles". <br/><br/>

                Após muita pesquisa, eu desisti umas 3 vezes em 1 ano, parecia coisa demais para cabeça de um pré adolescente de 11 anos, mas uma hora foi. <br/><br/>

                Tem duas coisas em específico que eu me orgulho que envolvem o Minecraft. A primeira é que eu abria servidores, todas as férias meus amigos me chamavam e perguntavam "Ei, vai ter servidor de Mine?", isso me deixava muito feliz. <br/><br/>

                Essa tradição desde 2017 teve seu auge na pandemia, quando eu desenvolvia plugins para adicionar novas coisas no jogo, novos chefões, novas habilidades, novos NPCs e etc. <br/><br/>

                Por incrível que pareça eu não jogava com eles, eu ficava conversando com eles em chamada claro, mas dentro do jogo eu era uma entidade invisível, eu gostava apenas de observar meus amigos se divertindo e eu criando essa experiência para eles, eu criava por exemplos eventos aleatórios de chefões do nada e ver a empolgação deles era minha felicidade. <br/><br/> 

                Justamente por eu desenvolver esses plugins para o servidor com meus amigos, eu notei que eu podia separar em módulos e publicar em um fórum público, assim outras pessoas poderiam ter acesso também. <br/><br/>

                Um dos plugins que eu desenvolvi para um servidor de RPG, era de ter uma barra de vida em cima do jogador, e na época o jogo tinha acabado de atualizar, e o desenvolvedor que já tinha esse plugin, tinha sumido. <br/><br/><br/>

                <ImageWithText src="/healthbar.webp" description="As barras de vida eram adicionadas acima da entidade."/>

                Eu publiquei esse plugin e eu me impressionei, como uma ideia tão simples, uma programação tão simples serviu para tantas pessoas. <br/><br/>

                Hoje esse projeto tem mais de 100 mil downloads nesse fórum. Quando eu fui em um show no Allianz Parque eu olhei aquela imensidão de gente e pensei "Cara, aqui só tem 50 mil, o dobro de todo esse tanto de gente baixou algo que eu fiz". <br/><br/>
                
                <ImageWithText src="/healthbar2.webp" description="Mais de 100 mil downloads no fórum do Spigot."/>
                
                Eu me orgulho muito desse projeto, ele me ensinou que as vezes a ideia mais simples, é o que todo mundo precisa. 
            </Paragraph>

            <Title variant="orange">Irmão</Title>
            <Paragraph>
                Como eu disse, eu moro com meu irmão mais velho, e várias coisas que a gente faz no dia a dia é juntos.<br/><br/>

                Ir na academia agora é muito mais fácil com um motivando o outro, quando o tempo está bom a gente até corre no Parque Barigui.<br/><br/>

                Mas se tem alguma coisa que eu gosto de fazer com ele é assistir filmes e séries. É ele quem me introduz as coisas boas, ele que me mostrou os meus filmes favoritos.<br/><br/>

                Todo final de semana eu desço para Paranaguá, pra matar a saudades da minha vó, minha tia e do meu pai (E do meu cachorro também).<br/><br/>

                E a noite, a gente assiste alguma coisa, e pra isso eu geralmente faço uma pizza, eu gosto de fazer pizza.<br/><br/><br/>

                <ImageWithText src="/pizza.webp" description="Eu gosto de fazer pizza. :)"/>
            </Paragraph>

            <Title variant="orange">IFPR</Title>
            <Paragraph>
                Como eu disse no vídeo, o IFPR pra mim foi um ponto de virada muito grande. Aquele lugar era estranho, e isso fazia dele perfeito.<br/><br/>

                No IFPR eu não tinha aulas normais de ensino médio que focavam em passar em vestibular, era uma ambiente mais livre, mais criativo.<br/><br/>

                Tem tanta coisa que eu tiver orgulho de participar no IFPR.<br/><br/>

                As aulas de artes e educação física eram as especialistas em fazer coisas aleatórias que me marcaram.<br/><br/>

                Em educação física eu adorava que do nada a professora chegava e a gente tinha aula de dança, eu aprendi a dançar tango no IFPR.<br/><br/>

                Mas calma, vai melhorando, nas aulas de artes a gente teve que aprender a tocar uma música para apresentar em um festival, ninguém ali sabia tocar, mas a gente conseguiu.<br/><br/>

                Nos dois últimos anos, a gente precisava arrecadar dinheiro para nossa formatura, eu fazia parte da comissão e cuidava do financeiro. Para arrecadar fundos, a gente organizou um evento de anime no IF, veio muita gente, foi muito divertido e a gente conseguiu o dinheiro para fazer nossa formatura.<br/><br/>

                No último ano teve o espetáculo, a gente teve que produzir um circo e apresentar para a escola inteira. O auditório tava lotado de gente e todo mundo no final gritava o nome da nossa turma.<br/><br/>

                Também tinha eventos de e-sports no IFPR. Eu e meus amigos se juntaram e agente formou uma equipe de 6 pessoas. A equipe que eu participava ganhou o campeonato local e a gente ficou em 2º lugar no Paraná inteiro.<br/><br/>

            </Paragraph>
        </BaseWindow>
    )
}