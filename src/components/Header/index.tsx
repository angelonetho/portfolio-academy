import { CloseButton, HeaderContainer } from "./style";

export function Header() {
    return (
        <HeaderContainer>
            <span>Meus Projetos</span>

            <CloseButton to="/">
                <span>X</span>
            </CloseButton>

        </HeaderContainer>
    )
}