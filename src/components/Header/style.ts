import { NavLink } from "react-router-dom";
import styled  from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    height: 3.5rem;

    border-bottom: solid black 2px;
    background: linear-gradient(#9F7AE3, #B4A2D6);

    font-family: "IBM Plex Mono", monospace;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;

    user-select: none;
`

export const CloseButton = styled(NavLink)`
    text-decoration: none;

    font-family: "IBM Plex Sans", sans-serif;
    font-weight: bold;
    font-size: 1.25rem;

    border: solid black 2px;
    border-radius: 6px;

    width: 2.25rem;
    height: 2.25rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    color: black;
    background-color: white;
    
    cursor: pointer;
    &:hover {
        transition: all 0.2s;
        background:linear-gradient(#e09e9e, #e57373);
    }
`