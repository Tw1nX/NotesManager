import { BrowserRouter, Router } from 'react-router-dom';
import Notes from './components/Notes';
export default function App() {
  <BrowserRouter>
    <Router path='/' element={Notes}></Router>
  </BrowserRouter>
}
