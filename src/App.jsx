import { useState } from 'react'
import './App.css'

// Create a better typing experience than MonkeyType

// Render as a markdown editor
// Can download as a markdown or pdf file with a single button

// add bold and italics, add tab, bullet points


function App() {
  const [selectedFont, setSelectedFont] = useState('Arial')
  const [text, setText] = useState('')
  
  const fonts = [
    'Arial',
    'Times New Roman',
    'Courier New',
    'Georgia',
    'Verdana',
    'Helvetica'
  ]

  return (
    <div className="app">
      <textarea
        className="text"
        placeholder="Share your thoughts..."
        autoFocus
        style={{ fontFamily: selectedFont }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="controls">
        <div className="font-selector">
          {fonts.map(font => (
            <button
              key={font}
              onClick={() => setSelectedFont(font)}
              className="button"
            >
              {font}
            </button>
          ))}
        </div>

        <div className="options-selector">
          <button onClick={() => setText('')} className="button">
            Reset
          </button>

          <button onClick={() => {
            const blob = new Blob([text], { type: 'text/markdown' })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = 'document.md'
            a.click()
          }} className="button">
            Download
          </button>
        </div>
      </div>
    </div>
  )
}

export default App