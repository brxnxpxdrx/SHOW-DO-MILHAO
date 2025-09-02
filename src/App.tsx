
import './App.css'
import task from './api/config'
import { useEffect, useState } from  'react'

function App() {
 const [pergunta, setPergunta] = useState('')
  const [alternativas, setAlternativas] = useState<string[]>([]);

 const [correta, setCorreta] = useState('')

useEffect(() => {
 const tamanhoArray = task.length
 const audio = new Audio('/audio.mp3');
 audio.play()
 const numeroAleatorio = Math.floor(Math.random() * tamanhoArray)
  setPergunta(task[numeroAleatorio].pergunta)
  setAlternativas(task[numeroAleatorio].alternativas)
  setCorreta(task[numeroAleatorio].correta)
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };

}, [])

  return (
    <div className="App">
    <header><img src="https://static.wikia.nocookie.net/logopedia/images/1/12/Jogo_do_milh%C3%A3o_1999.png" alt="" /></header>
    <div className="container">
      <div className="task">
       
       <h1>
        {pergunta}
       </h1>
       <div className="alternativas">
        {
          alternativas.map((item, index) => (
           
            
            <button key={index} onClick={() => {
              if(item === correta){
                alert('Resposta correta!')
              } else {
                alert(`Resposta errada! A resposta correta é ${correta}`)
              }
              const tamanhoArray = task.length
              const numeroAleatorio = Math.floor(Math.random() * tamanhoArray)
               setPergunta(task[numeroAleatorio].pergunta)
               setAlternativas(task[numeroAleatorio].alternativas)
               setCorreta(task[numeroAleatorio].correta)
            }}>{item}</button>
          ))  
        }
       </div>
      </div>
   
      <div className="silvio">
        <img src="https://www.zapfigurinhas.com/img/webp/EDNzY82.webp" alt="" />
      </div>
    </div>
    </div>
  )
}

export default App
