import { BaseWindow } from "../../components/BaseWindow";
import { Header } from "../../components/Header";
import { Card } from "./components/Card";

export function Projects() {
    const cards = [
        {
            title: "Smart Harpia",
            description: "Descrição do Projeto",
            img_url: "/public/smart.jpg",
            tags: ["Meio Ambiente", "IoT"]
        },
        {
            title: "Smart Harpia",
            description: "Descrição do Projeto",
            img_url: "/public/smart.jpg",
            tags: ["Meio Ambiente", "IoT"]
        },
        {
            title: "Smart Harpia",
            description: "Descrição do Projeto",
            img_url: "/public/smart.jpg",
            tags: ["Meio Ambiente", "IoT"]
        },
    ]

    return(
        <BaseWindow>
            <div className="window-container">
                <Header/>
                <main className="content-container">

                    {cards.map((card, index) => 
                        (
                            <Card key={index} title={card.title} description={card.description} img_url={card.img_url} tags={card.tags}/>
                        )
                    )}
                </main>
            </div>
        </BaseWindow>
    )
}