import styled from "styled-components";

interface TitleContainerProps {
    variant:'purple'| 'blue'| 'orange';
}

export const TitleContainer = styled.div<TitleContainerProps>`

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
        background: ${(props) =>
        props.variant === 'purple'
        ? 'linear-gradient(#fff, #B4A2D6)'
        : props.variant === 'blue'
        ? 'linear-gradient(#fff, #609FFF)'
        : 'linear-gradient(#fff, #FF6F19)'};
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .stroke-big-text {
        -webkit-text-stroke-width: 10px;
        -webkit-text-stroke-color: black;
    }

    @media (max-width: 768px) {

    
        .big-text {
            font-size: 2.5rem;
        }   

        .stroke-big-text {
        -webkit-text-stroke-width: 5px;

        }
        

        span {
            max-width: 90%;
        }
    }
`