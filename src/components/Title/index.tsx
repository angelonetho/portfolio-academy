import { ReactNode } from "react";
import { TitleContainer } from "./style";

interface TitleProps {
    children: ReactNode;
    variant:  'purple'| 'blue'| 'orange';
}

export function Title({children, variant}: TitleProps) {
    return (
        <TitleContainer variant={variant}>
            <span className="big-text stroke-big-text">{children}</span>
            <span className="big-text background-big-text">{children}</span>
      </TitleContainer>
    )
}