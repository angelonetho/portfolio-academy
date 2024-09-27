import { ReactNode } from "react";
import { BaseContainer } from "./style";
import { Header } from "../Header";

interface BaseWindowProps {
    children: ReactNode;
    title: string;
    close_to: string;
    variant:  'purple'| 'blue'| 'orange';
}

export function BaseWindow({children, title, variant, close_to}: BaseWindowProps) {
    return (
        <BaseContainer variant={variant}>
            <div className="window-container">
            <Header title={title} variant={variant} close_to={close_to}/>
            <main className="content-container">

                {children}
            </main>
            </div>
        </BaseContainer>
    )
}