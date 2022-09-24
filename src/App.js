import React from "react"
import { useState } from "react"
import imginitial from "./assets/forca0.png"
import "./css/reset.css"
import "./css/style.css"
//import Palavra from ".Palavra"



function Traços(prop){
    return(
        
        <ion-icon name={prop.img}></ion-icon>  

    )
}

function Letra(prop){
    return(
        <button>{prop.letra}</button>
    )
    
}


function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const arrTraços = ['close-outline']
    const [traços, setTraços] = React.useState(arrTraços)

    function EscolherPalavra(){
        const palavra = 'Aula'
        const qntTraços = palavra.length
        const tracinhos = []
    
        for(let i=0; i<qntTraços; i++) {
            tracinhos.push('remove-outline')
        }

        setTraços(tracinhos)
        
        return palavra
       
    }
    

    //const arrVazio = EscolherPalavra()

    //console.log(arrVazio)

    return (
        <div className="jogo">
            <h1 className="titulo">Jogo da Forca</h1>
            <hr />
            <div className="tabuleiro">
                <div className="forca-botao">
                    <div className="forca">
                        <img src={imginitial} alt="Imagem inicial do jogo" />
                    </div>
                    <button className="btn-escolher-palavra" onClick={EscolherPalavra}>Escolher Palavra</button>
                </div>
                <hr/>
                <div className="palavra-escolhida">
                    <span className="traços">
                        {
                            traços.map(
                                (p, index) => <Traços img={p} key={index}/>
                            )
                        }
                    </span>
                </div>
                <div className="teclado">
                        {
                            alfabeto.map(
                                (p, index) => <Letra letra = {p} key={index}/>
                            )
                        }
                </div>
            </div>
        </div>
    )
}

export default App