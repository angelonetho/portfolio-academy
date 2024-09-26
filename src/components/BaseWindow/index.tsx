import { ReactNode } from "react";
import { BaseContainer } from "./style";

interface BaseWindowProps {
    children: ReactNode;
}

export function BaseWindow({children}: BaseWindowProps) {
    return (
        <BaseContainer>
            {children}
        </BaseContainer>
    )
}