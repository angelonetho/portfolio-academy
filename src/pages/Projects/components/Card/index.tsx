import { Button } from "../../../../components/Button";
import { CardContainer } from "./style";

interface CardProps {
    title: string;
    description: string;
    img_url: string;
    page_url: string;
    tags: string[];
}

export function Card({title, description, img_url, page_url, tags}: CardProps) {
    return(
        <CardContainer>

            <div className="title-container">
                <span className="card-title stroke-title">{title}</span>
                <span className="card-title background-title">{title}</span>
            </div>
            
            <img src={img_url}/>
            
            <span className="card-description">{description}</span>
            
            <div className="card-tags">
               {tags.map((tag, index) => (
                 <div key={index} className="card-tag">{tag}</div>
               ))}
            </div>
            <div className="button-container">
                <Button content="Detalhes" to={page_url} variant="purple"/>
            </div>

            
        </CardContainer>
    )
}