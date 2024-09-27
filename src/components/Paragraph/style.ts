import styled from "styled-components";

export const ParagraphContainer = styled.div`
    display: flex;
    margin: 0 auto;
    width: 75%;
    font-size: 1.25rem;
    font-family: "IBM Plex Sans", sans-serif;

    @media (max-width: 768px) {

        .paragraph {
            width: 100%;
        }
    }
`