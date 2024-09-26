import styled from "styled-components";

export const BaseContainer = styled.div`
    background: linear-gradient(#9F7AE3, #B4A2D6) fixed;
    margin: 0;
    display: flex;
    height: 100vh;

    justify-content: center;
    align-items: center;

    overflow-y: hidden;

    .window-container {
    margin: 5vh 5vw;
    width: 90vw;

    border: solid black 2px;
    border-radius: 6px;

    background: linear-gradient(#9F7AE3, #B4A2D6);

    max-width: 1560px;

    filter: drop-shadow(0 0 2px rgb(0, 0, 0, 0.5))
    }

    .content-container {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 4rem 2rem;
    flex-wrap: wrap;
    gap: 1rem;

    overflow-y: scroll;
    height: 75vh;
    scroll-behavior: smooth;
    }
`