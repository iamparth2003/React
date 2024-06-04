import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>my app!</h1>
    </div>

  )
}

  const anotherelement = (
    <a href="https://google.com" target='_blank'>Click me</a>
  )

  const ReactElement = React.createElement(
    'a',
    {href : "https://google.com", target : "_blank"},
    'Click me to go to the Google!'
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
    
)
