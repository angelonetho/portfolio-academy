import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 480px;
    height: 720px;

    background: #9F7AE3;
    
    border: solid black 2px;
    border-radius: 6px;

    position: relative;

    user-select: none;

    .title-container {
        position: relative;
        display: inline-block;
        text-align: center;

        margin-top: 2rem;

        .card-title {
            font-size: 2.25rem;
            font-weight: bold;
            font-family: "IBM Plex Mono", monospace;
            position: absolute;
            top: -25px;
            transform: translateX(-50%);
            width: 400px;
            user-select: none;
        }

        .background-title {
            background: linear-gradient(#fff, #B4A2D6);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .stroke-title {
            -webkit-text-stroke-width: 4px;
            -webkit-text-stroke-color: black;
        }
    }   

    img {
        width: 400px;
        height: 296px;
        object-fit: cover;
        border: solid black 2px;
    }

    .card-description {
        margin-top: 1.5rem;
        font-family: "IBM Plex Sans", sans-serif;
        text-align: center;
        font-size: 1.25rem;
        color: black;
        font-weight: 400;
        
        width: 400px;
        height: 10.5rem;
    }

    .button-container {
            padding-bottom: 4rem;
        }

    .card-tags {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        
        justify-content: center;

        width: 400px;
        flex-wrap: wrap;

        user-select: none;

        .card-tag {
            font-family: "IBM Plex Mono", monospace;
            font-size: 1rem;
        
            background-color: white;
            border: solid 2px black;
            border-radius: 16px;
            padding: 0 0.5rem;
        }

     
    }

    @media (max-width: 768px) {

        width: 100%;
        max-width: 100%;

        .button-container {
            padding-bottom: 4rem;
        }

        .card-description, .card-tags {
            max-width: 80%;
        }

        img {
            max-width: 95%;
        }
    }
`