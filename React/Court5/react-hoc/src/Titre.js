import React from 'react'
//imr
import Message from "./Message"
//meme chose mais en destructuring
//fn(objet) => fn({name, email})
function Titre({ meteo, temperature }) {
    //ou const meteo = this.props
    return (
        <h1> Bientôt le weekend( {temperature}°C)
    <Message meteo={meteo} />
        </h1>)
}
// function Titre(props) {
//     return <h1>Bientôt le weekend ({props.meteo})</h1>
// }
//fonction est plus rapide, plus souple, ce composant n'a pas de state à l'intérieur, 
//composant qui ne bouge pas
//composant fonctionnel pour rendu statique
//on peut passer des props

export default Titre;
//default parce qu'un seul composant est exporté
// sinon : "export {..., ...}"