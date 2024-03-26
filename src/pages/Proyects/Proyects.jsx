import './Proyects.scss'
import { Pancarta } from './Pancarta'

export const Proyects = () => {
  return (
    <div className="proyectsContent">

      <div className="central-flex-container">

        <Pancarta 
          titulo = "Videojuegos" 
          parrafo="En itch.io puedes encontrar mi portafolio que contiene algunos juegos que he realizado en unity"
          imagenSRC = './IMGS/itchImage.png'
          linkUrl = 'https://astrohaluca.itch.io/'
        />
        <Pancarta 
          titulo = "Web Frontend" 
          parrafo="este enlace es para los proyectyos de frontend"
          imagenSRC = ''
          linkUrl = ''
        />
        <Pancarta 
          titulo = "Modelado 3D" 
          parrafo="En en este enlace encontraras los modelos y render realizados por mi"
          imagenSRC = ''
          linkUrl = ''
        />

      </div>

    </div>
  )
}
