import styled from "styled-components";

export const TitleContainer = styled.div`

    position: relative;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 16rem;

    .big-text {
        font-size: 6rem;
        font-weight: bold;
        font-family: "IBM Plex Mono", monospace;
        position: absolute;
        width: 100%;
        user-select: none;
        text-align: center;
    }
    
    .background-big-text {
        background: linear-gradient(#fff, #609FFF);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .stroke-big-text {
        -webkit-text-stroke-width: 10px;
        -webkit-text-stroke-color: black;
    }
`