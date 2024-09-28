import { DefaultButton, StyledNavLink } from "./style";

interface ButtonProps {
    content: string;
    to: string
    variant:  'purple'| 'blue'| 'orange';
}

export function ButtonLink({to, content, variant}: ButtonProps) {
    return(
        <StyledNavLink href={to}>
            <DefaultButton variant={variant}>{content}</DefaultButton>
        </StyledNavLink>
    )
}