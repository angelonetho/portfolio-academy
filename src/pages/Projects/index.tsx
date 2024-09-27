import { BaseWindow } from "../../components/BaseWindow";
import { Card } from "./components/Card";

export function Projects() {
    const cards = [
        {
            title: "Smart Harpia",
            description: "Descrição do Projeto",
            img_url: "/smart.jpg",
            page_url: "smart-harpia",
            tags: ["Meio Ambiente", "IoT"]
        },
        {
            title: "Sisdle",
            description: "Descrição do Projeto",
            img_url: "/smart.jpg",
            page_url: "sisdle",
            tags: ["Meio Ambiente", "IoT"]
        },
        {
            title: "Smart Harpia",
            description: "Descrição do Projeto",
            img_url: "/smart.jpg",
            page_url: "smart-harpia",
            tags: ["Meio Ambiente", "IoT"]
        },
    ]

    return(
        <BaseWindow title="Meus Projetos" variant="purple" close_to="/">
            {cards.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} img_url={card.img_url} page_url={card.page_url} tags={card.tags}/>
                ))}
        </BaseWindow>
    )
}