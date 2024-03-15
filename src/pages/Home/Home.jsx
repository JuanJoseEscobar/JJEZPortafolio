import "./Home.scss"

export const Home = () => {
  return (
    <div className="contentHome">

      <div className="centralcontent">

        <div className="precentacionContent">
          
          <div className="photoPrincipal">
            <img src="./MiniPerfilIMG.jpg" alt="Fotoperfil" className="photo" />
          </div>
          <h1>Juan Jose Escobar</h1>
          <p>Ingeniero Multimedia</p>

        </div>

        <div className="precentacionContent">
          <h1>trabajos</h1>
          <h2>Maderkit</h2>
          <p>trabaje como programador web</p>
        </div>

      </div>
    </div>
  )
}
