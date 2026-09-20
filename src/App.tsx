import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Router } from './Router/Router'
import Clarity from '@microsoft/clarity';

function App() {
  const projectId = "yleett9n3n"

  Clarity.init(projectId);

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
