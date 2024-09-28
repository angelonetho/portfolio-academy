import { ReactNode } from "react"
import { AlignmentContainer } from "./style";

interface AlignmentProps {
    children: ReactNode;
}

export function Alignment({ children }: AlignmentProps) {
    return (
        <AlignmentContainer>
            <p>{children}</p>
        </AlignmentContainer>
    )
}