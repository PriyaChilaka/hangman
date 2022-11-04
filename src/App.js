import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import './App.css';
import Popup from './components/Popup';
import Notification from './components/Notification';


const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  const [playable,setPlayable] = useState(true);
  const [correctLetters,setCorrectLetters] = useState([]);
  const [wrongLetters,setWrongLetters] = useState([]);
  const [showNotification,setNotification] = useState(false);
useEffect(() => {
const handleKeydown = event => {
  const {key,keyCode} = event ;
  
    if (playable && keyCode >= 65 && keyCode <= 90) {
      const letter = key.toLowerCase();

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters(currentLetters => [...currentLetters,letter])

          
        } else {
          //showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters(wrongLetters =>[...wrongLetters,letter])
          
        } else {
          //showNotification();
        }
      }
    }
  }

window.addEventListener('keydown',handleKeydown);

return ()=> window.removeEventListener('keydown',handleKeydown);
},[correctLetters,wrongLetters,playable]

,[]);

  
  return (
    <>
     <Header></Header>
       <div className='game-container' >
        <Figure  wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        <Popup />
        <Notification />
       </div>
    </>
  );
}

export default App;
