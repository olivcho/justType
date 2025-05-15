import { useState, useEffect } from 'react'
import './App.css'
import TextArea from './components/TextArea'
import FontSelector from './components/FontSelector'
import OptionsSelector from './components/OptionsSelector'
import Interact from './components/Interact'
import supabase from './supabase-client'

// add submit button that saves response to a database
// add timer that shows how long it took to write the response in the top right corner
// add button to see a random response from the database

function App() {
  const [selectedFont, setSelectedFont] = useState('Arial')
  const [text, setText] = useState('')
  const [timer, setTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning])

  useEffect(() => {
    if (text.length > 0 && !isTimerRunning) {
      setIsTimerRunning(true)
    }}, [text])

  const handleTimerClick = () => {
    setTimer(0)
  }

  const handleReset = () => {
    setText('')
    setTimer(0)
    setIsTimerRunning(false)
  }
  
  const fonts = [
    'Arial',
    'Times New Roman',
    'Courier New',
    'Georgia',
    'Verdana',
  ]

  const handleShare = async () => {
    if (text.length > 50) {
      const userData = {
        text: text,
        duration: timer,
        font: selectedFont
      }

      const { data, error } = await supabase
        .from('UserText')
        .insert(userData)
        .single();

      handleReset();

    } else {
      alert('Share some more!')
    }
  }
  const handleRead = async () => {
    const { data, error } = await supabase
      .from('UserText')
      .select("*")

    if (data && data.length > 0) {
      const randomRow = data[Math.floor(Math.random() * data.length)];
      setText(randomRow.text);
      setTimer(randomRow.duration);
      setSelectedFont(randomRow.font);
      setIsTimerRunning(false);
    }
  }

  return (
    <div className="app">
      <TextArea 
        text={text}
        setText={setText}
        selectedFont={selectedFont}
      />

      <div className="controls">
        <FontSelector 
          fonts={fonts}
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
        />

        <OptionsSelector 
          setText={setText}
          text={text}
          timer={timer}
          handleReset={handleReset}
          handleTimerClick={handleTimerClick}
        />

        <Interact
          handleShare={handleShare}
          handleRead={handleRead}
        />
        
      </div>

    </div>
  )
}

export default App