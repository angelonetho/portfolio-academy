import { CloseButton, HeaderContainer } from "./style";

interface HeaderProps {
    title: string;
    close_to: string;
    variant:  'purple'| 'blue'| 'orange';
}

export function Header({title, close_to, variant}: HeaderProps) {
    return (
        <HeaderContainer variant={variant}>
            <span>{title}</span>

            <CloseButton to={close_to}>
                <span>X</span>
            </CloseButton>

        </HeaderContainer>
    )
}