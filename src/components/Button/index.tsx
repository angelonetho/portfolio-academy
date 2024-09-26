import { DefaultButton, StyledNavLink } from "./style";

interface ButtonProps {
    content: string;
    to: string
    variant:  'purple'| 'blue'| 'orange';
}

export function Button({to, content, variant}: ButtonProps) {
    return(
        <StyledNavLink to={to}>
            <DefaultButton variant={variant}>{content}</DefaultButton>
        </StyledNavLink>
    )
}