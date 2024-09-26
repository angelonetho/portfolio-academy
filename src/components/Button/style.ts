import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface DefaultButtonProps {
    variant:'purple'| 'blue'| 'orange';
}

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
`

export const DefaultButton = styled.button<DefaultButtonProps>`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: bolder;
    font-size: 1.5rem;
    color: white;

    cursor: pointer;
    border: solid black 2px;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    
    paint-order: stroke;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
    
    background: ${(props) =>
    props.variant === 'purple'
      ? 'linear-gradient(#9F7AE3, #B4A2D6)'
      : props.variant === 'blue'
      ? 'linear-gradient(#4188F1, #B2D1FF)'
      : 'linear-gradient(#FFA726, #FFCC80)'};
    
    width: 220px;
    height: 64px;
    margin-top: 4rem;
    
    &:hover {
        transition: all 0.2s;
        transform: scale(1.02);
    }
`