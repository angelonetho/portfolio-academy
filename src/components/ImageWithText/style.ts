import styled from "styled-components";

export const ImageContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;

    img {
        width: 30rem;
        height: 22rem;
        object-fit: cover;
        border: solid black 2px;
    }

    span {
        font-family: "IBM Plex Mono", monospace;
        font-size: 1rem;
        color: black;
        text-align: center;
        width: 30rem;
    }

    margin-bottom: 2rem;

    user-select: none;
`