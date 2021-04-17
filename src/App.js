import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button'
import Frase from './components/Frase';

function App() {
  return (
<Fragment>
  <section className='container my-5 d-flex flex-column align-items-center'>
    <img src={process.env.PUBLIC_URL+'logo.png'} alt="logo de los Simpsons" className='w-75'/>
    <Button variant="warning" className='my-3 w-50'>Generar Frase</Button>
    <Frase/>
  </section>
</Fragment>
  );
}

export default App;
