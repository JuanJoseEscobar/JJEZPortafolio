import './Proyects.scss'
import { Pancarta } from './Pancarta'
import { Link } from 'react-router-dom'

export const Proyects = () => {
  return (
    <div className="proyectsContent">

      <div className="central-flex-container">

        <Pancarta 
          titulo = "Web Frontend" 
          parrafo="Los proyectos de Frontend fueron realizados con react y algunos de sus codigos subidos a GitHub."
          imagenSRC = './IMGS/Proyectos/ReactJS.svg'
          linkUrl = ''
        >
          <Link to="/Proyectos/WebFrontend"><span>Visitar</span></Link>
        </Pancarta>

        <Pancarta 
          titulo = "Videojuegos" 
          parrafo="En itch.io puedes encontrar mi portafolio que contiene algunos juegos que he realizado en unity."
          imagenSRC = './IMGS/Proyectos/itchImage.png'
          linkUrl = 'https://astrohaluca.itch.io/'
        />

        <Pancarta 
          titulo = "Modelado 3D" 
          parrafo="En BeHance encontraras mi portafolio de renders en 3d realizados en blender."
          imagenSRC = './IMGS/Proyectos/BemachLogo.jpg'
          linkUrl = 'https://www.behance.net/juanjoescobar8'
        />

      </div>

    </div>
  )
}
