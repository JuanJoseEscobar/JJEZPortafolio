import "./Home.scss"

export const Home = () => {
  const CVPDF = './FILES/JJEZCV.pdf'

  return (
    <div className="contentHome">

      <div className="centralcontent">

        <div className="precentacionContent">
          
          <div className="photoPrincipal">
            <img src="./IMGS/Per1.jpeg" alt="Fotoperfil" className="photo" />
          </div>
          <br />
          <h1 className="tituloColor">Juan Jose Escobar</h1>
          <h3 className="tituloColor3">Ingeniero Multimedia</h3>
          <p className="espacio">¡Saludos! Me gradue de la universidad San Buenvaentura cali como ingeniero multimedia.</p>
        </div>

        <div className="precentacionContent">
          <h2 className="tituloColor">Desarrollo Frontend</h2>
          <div className="horizonalContent">
            <h3>React</h3>
            <h3>TreeJS</h3>
            <h3>Html</h3>
            <h3>CSS</h3>
            <h3>SASS</h3>
          </div>
        </div>
        <div className="precentacionContent">
          <h2 className="tituloColor">Modelado 3D y videojuegos</h2>
          <div className="horizonalContent">
            <h3>Blender</h3>
            <h3>3DS Max</h3>
            <h3>Unity</h3>
          </div>
        </div>
        <div className="precentacionContent">
          <p>¿Quieres saber mas? descarga mi Hoja de vida.</p>
          <a href={CVPDF} className="tituloColor2 linkCV" download>¡Click Aqui!</a>
        </div>
          


      </div>
    </div>
  )
}
