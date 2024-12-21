import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

let vacio = "";

function App() {
  const abrir_cerrar_menu = () => {
    let menu_desplegable = document.getElementById('menu');
    let boton_cerrar = document.getElementById('x');
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');
  };

  return (
    <Router>
      <header>
        <div className='barras'>
          <button onClick={abrir_cerrar_menu} className='boton_menu' id='x'>☰</button>
        </div>
        <nav id='menu' className='desplegable'>
          <img src="/LogoClash.jpg" alt="Logo" className="logo" />
          <ul>
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/juegos">Juegos</Link></li>
            <li><Link to="/carreras">Carreras</Link></li>
            <li><Link to="/registrate">Regístrate</Link></li>
            <li><Link to="/contacto">Contáctanos</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/carreras" element={<Carreras />} />
          <Route path="/registrate" element={<Registrate />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <footer>

        <div className="footer-content">
          <ul>
            <li>Términos y condiciones</li>
            <li>Política de privacidad</li>
            <li>Soporte</li>
            <li>Acerca de nosotros</li>
          </ul>
          <p>© 2024 Jorsh x Clash Royale. Derechos reservados.</p>
        </div>
      </footer>
    </Router>
  );
}

function Inicio() {
  return (
    <section className="inicio">
      <h1>Bienvenido a Supercell</h1>
      <p>
        Aquí tienes algunas imágenes ilustrativas para mostrarte cómo se organiza
      <p>la información y como la manejamos, aparte de nuestros juegos claramente.</p>
      <p>Explora los mejores juegos y contenido que tenemos para ti</p>
      </p>
      <div className="imagenes">
        <div className="fila-imagenes">
          <img className="imagen" src="/2024.jpg" alt="Imagen 1" />
          <img className="imagen" src="/Buzz.jpg" alt="Imagen 2" />
        </div>
        <div className="fila-imagenes">
          <img className="imagen" src="/puntos.jpg" alt="Imagen 3" />
          <img className="imagen" src="/town.jpg" alt="Imagen 4" />
        </div>
      </div>
    </section>
  );
}

function Juego({ nombre, descripcion, imagen }) {
  return (
    <div className="juego">
      <div className="image-placeholder">
        <img src={imagen} alt={nombre} className="juego-imagen" />
      </div>
      <p>{nombre}</p>
      <p>{descripcion}</p>
    </div>
  );
}

function Juegos() {
  const juegos = [
    { nombre: 'Squad Busters', descripcion: 'Diversión multijugador. ¡Acción de fiesta!', imagen: '/squad.jpg' },
    { nombre: 'Clash Royale', descripcion: 'Batallas de cartas épicas en tiempo real', imagen: '/clashroyale.jpg' },
    { nombre: 'Brawl Stars', descripcion: '3v3 y batallas en tiempo real', imagen: '/brawl.jpg' },
    { nombre: 'Boom Beach', descripcion: 'Construir. Planificar. ¡Auge!', imagen: '/boombeach.jpg' },
  ];

  return (
    <div className="juegos-section">
      <h1>Juegos Supercell</h1>
      <div className="juegos-container">
        {juegos.map((juego, index) => (
          <Juego key={index} nombre={juego.nombre} descripcion={juego.descripcion} imagen={juego.imagen} />
        ))}
      </div>
    </div>
  );
}

function Carreras() {
  return (
    <div className="carreras-section">
      <h1>¿Por qué te puede encantar trabajar con nosotros?</h1>
      <img src="/TrabajadorEjemplo.jpg" alt="Carreras en nuestra empresa" className="carreras-imagen" />
      <p>Creemos que los juegos tienen el poder de unir y acercar a personas de todo el mundo. Trabajamos para crear experiencias nuevas, innovadoras y memorables que nadie ha jugado antes. Es por eso que intentamos diseñar juegos que entusiasmen a comunidades de jugadores amplias y diversas, así como ampliar la audiencia para conceptos de juegos de “nicho” que de otro modo serían más pequeños.
      <p>Si te encanta pensar, hablar, jugar y crear juegos, Supercell es el lugar para ti. Hemos creado una empresa de equipos proactivos e independientes con la libertad de hacer lo que crean que es mejor para sus jugadores, nuestros juegos y la empresa en general.</p>
      </p>

      <div className="video-container">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/M8P1HF-0bPI" title="Clash of Clans: The Making of a Hero (Royal Champion Behind the Scenes)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </div>

    

  );
}

function Registrate() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contrasena: '',
    contrasenaConfirmar: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.contrasena || !formData.contrasenaConfirmar) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    if (formData.contrasena !== formData.contrasenaConfirmar) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setError('');
    alert('Formulario enviado correctamente.');
    // Aquí podrías hacer una llamada a una API para enviar los datos
  };

  return (
    <div className="registro-section">
      <h1>Registrate</h1>
      <form onSubmit={handleSubmit} className="registro-form">
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contrasenaConfirmar">Confirmar contraseña:</label>
          <input
            type="password"
            id="contrasenaConfirmar"
            name="contrasenaConfirmar"
            value={formData.contrasenaConfirmar}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}


function Contacto() {
  return (
    <div className="contacto-section">
      <h1>Contáctanos</h1>
      <p>Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros.</p>
      <form className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico:</label>
          <input type="email" id="correo" name="correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
