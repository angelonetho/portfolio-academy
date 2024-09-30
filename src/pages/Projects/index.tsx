import { BaseWindow } from "../../components/BaseWindow";
import { Card } from "./components/Card";

export function Projects() {
    const cards = [
        {
            title: "Smart Harpia",
            description: "Sistema para proteção e monitoramento de áreas de conservação ambiental, utilizando tecnologias de IoT para coleta de dados.",
            img_url: "/smart.webp",
            page_url: "smart-harpia",
            tags: ["Meio Ambiente", "IoT", "Monitoramento", "IFPR", "TCC", "Incubadora"]
        },
        {
            title: "SISDLE",
            description: "Sistema de gerenciamento das lixeiras do SISDLE - Sistema Inteligente de Suporte ao Descarte de Lixo Eletroquimico.",
            img_url: "/sisdle.webp",
            page_url: "sisdle",
            tags: ["Meio Ambiente", "IoT", "IFPR"]
        },
        {
            title: "Remake Jogo",
            description: "Criação de um jogo a partir de sprites extraídas do jogo das Meninas Super Poderosas (2003), criando a lógica de gameplay do zero.",
            img_url: "/remake.webp",
            page_url: "remake-jogo",
            tags: ["Experiência Criativa", "Jogo", "Retro"]
        },
        {
            title: "Projeto Jupiter",
            description: "Plataforma para melhorar a comunicação e acompanhamento entre psicólogos e pacientes, atualmente em desenvolvimento.",
            img_url: "/jupiter.webp",
            page_url: "projeto-jupiter",
            tags: ["Comunitário", "Psicologia", "Em Desenvolvimento"]
        },
        {
            title: "HaruTickets",
            description: "Sistema online de bilheteria que oferece uma experiência completa tanto para o organizador quanto para o cliente, desde a compra dos ingressos até o check-in no evento.",
            img_url: "/haru2.webp",
            page_url: "haru-tickets",
            tags: ["Em Desenvolvimento", "Bilheteria", "Gestão de Eventos"]
        },
        {
            title: "Cat Manager",
            description: "Sistema para gestão de voluntários e captação de ajuda para a ONG Crazy Cat Gang.",
            img_url: "/catmanager.webp",
            page_url: "cat-manager",
            tags: ["Comunitário", "Gestão de Voluntários", "ONG"]
        },
        {
            title: "Portfólio",
            description: "Portfólio web desenvolvido especialmente para o processo seletivo da Apple Academy, utilizando design retro-moderno.",
            img_url: "/portfolio.webp",
            page_url: "portfolio",
            tags: ["React", "Styled Components", "Portfólio", "Apple Academy"]
        },
        {
            title: "Game Engine",
            description: "Desenvolvimento de uma engine de RPG do zero, utilizando Java para criar funcionalidades de gameplay e estrutura de jogos 2D.",
            img_url: "/game-engine.webp",
            page_url: "https://drive.google.com/drive/folders/1jEIrwxPdXV9NCCk9HcPGrFBgoz5JhCvc?usp=drive_link",
            tags: ["Java", "Experimento", "Jogo"]
        },
        {
            title: "HealthBar",
            description: "Plugin para servidores de Minecraft que adiciona barras de vida acima das entidades do jogo.",
            img_url: "/healthbar.webp",
            page_url: "https://github.com/angelonetho/HealthBar-Plugin",
            tags: ["Minecraft", "Plugin", "Publicado"]
        },
        {
            title: "Bed AntiCheat",
            description: "Plugin para Minecraft que previne que jogadores trapaceiem ao quebrar blocos através de paredes.",
            img_url: "/anticheat.webp",
            page_url: "https://www.spigotmc.org/resources/anti-bed-hacks-for-bedwars.83150/",
            tags: ["Minecraft", "Anticheat", "Publicado"]
        },
        {
            title: "Minigame Engine",
            description: "Engine base desenvolvida para servir como molde para criação de diferentes modos de jogo em servidores de Minecraft.",
            img_url: "/minigame.webp",
            page_url: "https://github.com/angelonetho/SkyWars/tree/development",
            tags: ["Minecraft", "Engine", "Desenvolvimento"]
        },
        {
            title: "Fausto Quiz",
            description: "Jogo de perguntas e respostas desenvolvido para testar conhecimentos sobre o apresentador Faustão.",
            img_url: "/fausto.webp",
            page_url: "https://github.com/angelonetho/quiz_faustao",
            tags: ["Flutter", "IFPR", "Estudos"]
        },
        {
            title: "Timer",
            description: "Timer criado em React para experimentação de Hooks e Contextos.",
            img_url: "/timer.webp",
            page_url: "https://github.com/angelonetho/02-ignite-timer",
            tags: ["React", "Hooks", "Estudos"]
        },
        {
            title: "DailyDiet API",
            description: "API para cadastro e acompanhamento de refeições, auxiliando o usuário no controle da sua dieta diária.",
            img_url: "/diet.webp",
            page_url: "https://github.com/angelonetho/daily-diet-api",
            tags: ["API", "Saúde", "Estudos"]
        },
        {
            title: "XFood",
            description: "Aplicativo desenvolvido em Flutter simulando um sistema web básico de delivery.",
            img_url: "/xfood.webp",
            page_url: "https://github.com/angelonetho/xfood/",
            tags: ["Flutter", "Delivery", "IFPR", "Estudos"]
        },
        {
            title: "HaruFlix",
            description: "Aplicação React com integração a uma API externa para exibição de catálogo de filmes.",
            img_url: "/haruflix.webp",
            page_url: "https://github.com/angelonetho/haruflix",
            tags: ["React", "API", "Estudos"]
        },
        {
            title: "Pizzashop API",
            description: "API para gerenciamento de delivery de pizzaria, desenvolvida com o objetivo de experimentar o framework Bun.",
            img_url: "/bun.webp",
            page_url: "https://github.com/angelonetho/pizzashop-api",
            tags: ["API", "Bun", "Delivery", "Estudos"]
        },
        {
            title: "API de Academia",
            description: "API para gerenciamento de academias, similar ao modelo do GymPass, desenvolvida para estudos de arquitetura de APIs.",
            img_url: "/node.png",
            page_url: "https://github.com/angelonetho/03-api-solid",
            tags: ["API", "Fitness", "Estudos"]
        },
        {
            title: "API de Fórum",
            description: "Backend de um sistema de fórum, criado para estudar conceitos de Clean Architecture e Domain-Driven Design (DDD).",
            img_url: "/nextjs.webp",
            page_url: "https://github.com/angelonetho/05-nest-clean",
            tags: ["NodeJS", "API", "NextJS", "Clean Architecture", "Estudos"]
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