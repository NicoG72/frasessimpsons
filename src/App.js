import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button'
import Frase from './components/Frase';
import {useState, useEffect} from 'react';
import Spinner from './components/Spinner';


function App() {

  // se inicializa el state 
  const [personaje, setPersonaje] = useState({});
  const [cargar, setCargar] = useState(false);
  
  useEffect(()=>{
//se cargan los datos de la API
consultarAPI();
  }, []);

  const consultarAPI = async() => {
  setCargar(true);
  const respuesta =await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const resultado = await respuesta.json();
  console.log(resultado[0]);
  setTimeout(() => {
  setCargar(false);
  setPersonaje(resultado[0]);
  },2500);
};

const mostrarComponente = (cargar) ? (<Spinner/>) : (<Frase personaje={personaje}/>);
  return (
<Fragment>
  <section className='container my-5 d-flex flex-column align-items-center'>
    <img src={process.env.PUBLIC_URL+'logo.png'} alt="logo de los Simpsons" className='w-75'/>
    <Button variant="warning" className='my-3 w-50' onClick={()=>consultarAPI()}>Generar Frase</Button>
    {mostrarComponente}
  </section>
</Fragment>
  );
}

export default App;
