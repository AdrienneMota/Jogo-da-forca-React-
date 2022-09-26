import React from "react"
import img0 from "./assets/forca0.png"
import img1 from "./assets/forca1.png"
import img2 from "./assets/forca2.png"
import img3 from "./assets/forca3.png"
import img4 from "./assets/forca4.png"
import img5 from "./assets/forca5.png"
import img6 from "./assets/forca6.png"
import "./css/reset.css"
import "./css/style.css"
import Palavra from "./Palavra"



function Forca(prop) {
    return (
        <img src={prop.forca} alt="forca" />
    )
}

//function Letra(prop){}

function Traços(prop) {
    if (prop.img === 'remove-outline' || prop.img === 'close-outline') {
        return (
            <ion-icon name={prop.img}></ion-icon>
        )
    }
    return (
        <span>{prop.img}</span>
    )

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const erros = [img0, img1, img2, img3, img4, img5, img6]
    const arrTraços = []
    const palavraVazia = ''

    const [inativa, SetInativa] = React.useState(alfabeto)
    const [forca, setForca] = React.useState(erros[0])
    const [traços, setTraços] = React.useState(arrTraços)
    const [palavraEscolhida, setPalavraEscolhida] = React.useState(palavraVazia)
    const [contador, setContador] = React.useState(0)
    const [fim, setFim] = React.useState("palavra-escolhida")

    function ganhou(){
        if(!traços.includes('remove-outline')){
            setFim('ganhou')
            SetInativa(alfabeto)
        }
        else{
            setFim('palavra-escolhida')
        }
    }

    function EscolherPalavra() {

        setFim('palavra-escolhida')
        setContador(0)

        const index = getRandomIntInclusive(0, (Palavra.length))
        const palavra = Palavra[index]
        const qntTraços = palavra.length
        const tracinhos = []

        console.log(palavra)
        for (let i = 0; i < qntTraços; i++) {
            tracinhos.push('remove-outline')
        }

        setTraços(tracinhos)
        setPalavraEscolhida(palavra)  
        SetInativa([])   
    }

    function ComparaLetra(index) {
        const letra = alfabeto[index]
        const letranatela = []
        const newInativa = []
        const temLetra = palavraEscolhida.includes(letra)

        if (temLetra) {
            for (let i = 0; i < palavraEscolhida.length; i++) {
                if (palavraEscolhida[i] === letra) {
                    traços[i] = letra
                } else {
                    traços[i] = traços[i]
                }
            }  
            Object.assign(letranatela, traços)     
            setTraços(letranatela)
        }
        else {
            let newValue = 0
            newValue = contador + 1
            setContador(newValue)
            setForca(erros[newValue])
            if(newValue === 6){
                setFim('perdeu')
                SetInativa(alfabeto)
                const newarr = palavraEscolhida.split('')
                setTraços(newarr)
                return
            }
        }
        for (let i = 0; i < inativa.length; i++){
            newInativa[i] = inativa[i]
        }
        newInativa.push(letra)       
        SetInativa(newInativa)
        ganhou()

    }

    return (
        <div className="jogo">
            <h1 className="titulo">Jogo da Forca</h1>
            <hr />
            <div className="tabuleiro">
                <div className="forca-botao">
                    <div className="forca">
                        <Forca forca={forca} />
                    </div>
                    <button className="btn-escolher-palavra" onClick={EscolherPalavra}>Escolher Palavra</button>
                </div>
                <hr />
                <div className={fim}>
                    <span>
                        {
                            traços.map(
                                (p, index) => <Traços img={p} key={index} />
                            )
                        }
                    </span>
                </div>
                <div className="teclado">
                    {
                        alfabeto.map(
                            (p, index) =>
                                <button className={inativa.includes(p)? "letraDesabilitada" : ""} onClick={() => (ComparaLetra(index))} key={index}>
                                    {p}
                                </button>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

