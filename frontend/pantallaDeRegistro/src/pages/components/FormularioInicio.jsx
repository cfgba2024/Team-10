import "./estilosComps/FormularioInicio.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 

export function FormularioInicio() {
  const irInicio = useNavigate();
  const [error, setError] = useState('');

  const Iniciar = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
    const contraseña = e.target[1].value;
  
    try {
      const response = await fetch('http://localhost:8080/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, contraseña }),
      });
  
      if (response.ok) {
        irInicio('/principal');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error de autenticación');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    }
  };
  return (
    <main>
    <div className="container-form1">
      <form className="form1" onSubmit={Iniciar}>
        <p className="title1">Inicio de Sesión</p>
        <p className="message1">Bienvenide a Fundación Huesped!</p>
        <label>
          <input className="input1" type="email" placeholder="" required />
          <span>Email</span>
        </label>
        <label>
          <input className="input1" type="password" placeholder="" required />
          <span>Password</span>
        </label>
        <button className="submit1" type="submit">Submit</button>
        <p className="signin1">¿No tienes cuenta?<a href="/register">Registrate</a></p>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      

    </div>
  </main>
  );
}
