import { ReactNode } from "react";
import { BaseContainer } from "./style";
import { Header } from "../Header";

interface BaseWindowProps {
    children: ReactNode;
}

export function BaseWindow({children}: BaseWindowProps) {
    return (
        <BaseContainer>
            <div className="window-container">
            <Header/>
            <main className="content-container">

                {children}
            </main>
            </div>
        </BaseContainer>
    )
}