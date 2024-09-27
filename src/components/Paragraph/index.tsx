import { ReactNode } from "react"
import { ParagraphContainer } from "./style";

interface ParagraphProps {
    children: ReactNode;
}

export function Paragraph({ children }: ParagraphProps) {
    return (
        <ParagraphContainer>
            <p>{children}</p>
        </ParagraphContainer>
    )
}