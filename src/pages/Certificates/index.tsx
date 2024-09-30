import { Alignment } from "../../components/Alignment";
import { BaseWindow } from "../../components/BaseWindow";
import { ButtonLink } from "../../components/ButtonLink";

export function Certificates() {
    return (
        <BaseWindow title="Meus Certificados" variant="blue" close_to="/">
            <Alignment>
                <ButtonLink variant="blue" to="https://cursos.alura.com.br/user/angelonetho/fullCertificate/ee73f2e1e5302a5a4621aa4efa060a68" content="Alura"/>
                <ButtonLink variant="blue" to="https://drive.google.com/drive/folders/1r_8JkLMtS2qdaT01zfU358eK9ewm-35l?usp=sharing" content="Rocketseat"/>
                <ButtonLink variant="blue" to="https://drive.google.com/drive/folders/1D8DIDKIVab3AHFfNqYLuOdkWghxG4Mig?usp=sharing" content="Outros"/>
            </Alignment>
        </BaseWindow>
    )
}