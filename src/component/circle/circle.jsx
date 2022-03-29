import "./circle.css";
import FadeIn from 'react-fade-in';




export default function Circle(props){
     
    return(
        <FadeIn onClick="visibility={false}">
            <div className="rond" >
                <h1>{props.titre}</h1>
                <p>{props.texte}</p>
            </div>
        </FadeIn>
    )
}