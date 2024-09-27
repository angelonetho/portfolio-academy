import { ReactNode } from "react";
import { TitleContainer } from "./style";

interface TitleProps {
    children: ReactNode;
}

export function Title({children}: TitleProps) {
    return (
        <TitleContainer>
            <span className="big-text stroke-big-text">{children}</span>
            <span className="big-text background-big-text">{children}</span>
      </TitleContainer>
    )
}