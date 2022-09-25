import React from "react"
import { useState } from "react"
import imginitial from "./assets/forca0.png"
import "./css/reset.css"
import "./css/style.css"
import Palavra from "./Palavra"

function Letra(prop){
    return(
        <button onClick={()=>(prop.comparaletra(prop.chave))}>{prop.letra}</button>
    )
    
}

function Traços(prop){
    return(
        
        <ion-icon name={prop.img}></ion-icon>  

    )
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const arrTraços = ['close-outline']
    const palavraVazia = '' 
    const [traços, setTraços] = React.useState(arrTraços)
    const [palavraEscolhida, setPalavraEscolhida] = React.useState(palavraVazia)

    function EscolherPalavra(){
        const index = getRandomIntInclusive(0, (Palavra.length))
        const palavra = Palavra[index]
        const qntTraços = palavra.length
        const tracinhos = []
        console.log(palavra)
        for(let i=0; i<qntTraços; i++) {
            tracinhos.push('remove-outline')
        }

        setTraços(tracinhos)
        setPalavraEscolhida(palavra)
        
        return palavra
       
    }

    function ComparaLetra(index){
        const letra = alfabeto[index]
        const temLetra = palavraEscolhida.includes(letra)


        if(temLetra){
            traços[index] = letra
            setTraços(traços)
        }else{
            alert("tem outra letra")
            //fazer lógica imagem
        }
        
    }
    
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
                                (p, index) => <Letra letra = {p} key={index} comparaletra={ComparaLetra} chave={index}/>
                            )
                        }
                </div>
            </div>
        </div>
    )
}

export default App