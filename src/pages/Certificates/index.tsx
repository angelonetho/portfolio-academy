import { Alignment } from "../../components/Alignment";
import { BaseWindow } from "../../components/BaseWindow";
import { ButtonLink } from "../../components/ButtonLink";
import { Title } from "../../components/Title";

export function Certificates() {
    return (
        <BaseWindow title="Minha Coleção" variant="blue" close_to="/">
            <Title variant="blue">Certificados</Title>
            
            <Alignment>
                <ButtonLink variant="blue" to="https://cursos.alura.com.br/user/angelonetho/fullCertificate/ee73f2e1e5302a5a4621aa4efa060a68" content="Alura"/>
                <ButtonLink variant="blue" to="https://drive.google.com/drive/folders/1r_8JkLMtS2qdaT01zfU358eK9ewm-35l?usp=sharing" content="Rocketseat"/>
                <ButtonLink variant="blue" to="https://drive.google.com/file/d/1KJX-Hb6-EeNtrG0YKfWbX1mh5kHPimFM/view?usp=drive_link" content="Outros"/>
            </Alignment>
        </BaseWindow>
    )
}