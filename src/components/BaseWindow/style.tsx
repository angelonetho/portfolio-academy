import styled from "styled-components";

interface BaseContainerProps {
    variant:'purple'| 'blue'| 'orange';
}

export const BaseContainer = styled.div<BaseContainerProps>`

    background: ${(props) =>
    props.variant === 'purple'
      ? 'linear-gradient(#9F7AE3, #B4A2D6) fixed'
      : props.variant === 'blue'
      ? 'linear-gradient(#4188F1 15%, #8FBCFF) fixed'
      : 'linear-gradient(#F19A65, #F0CBB5) fixed'};

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

    background: ${(props) =>
    props.variant === 'purple'
      ? 'linear-gradient(#9F7AE3, #B4A2D6)'
      : props.variant === 'blue'
      ? 'linear-gradient(#4188F1 15%, #8FBCFF)'
      : 'linear-gradient(#F19A65, #F0CBB5)'};

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

    @media (max-width: 768px) {
       
        height: 100%; 

        .window-container {
            width: 100vw;
            height: 100vh;
            margin: 0;
            border-bottom: 0;
            filter: none;
        }
        
        .content-container {
            padding-bottom: 20vh;
            gap: 1.5rem;
            overflow-x: hidden;
        }
    }
`