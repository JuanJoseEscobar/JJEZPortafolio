import { Link } from 'react-router-dom'

const PinCard = ({
    Titulo = "Titulo",
    IMGsrc ='',
    Parrafo ="Parrafo",
    Gitsrc = '',
    disableGitHub = false,
    Websrc = '',
    disableWeb = false
  }) => {
  return (
    <div className="pincard">

        <h2 className='pincard-titulo'>{Titulo}</h2>

        <div className="contenedor-imagen">
            <img className="img-proyectos-web" src={IMGsrc} alt="proyecto IMG"/>
        </div>

        <div className="parrafo">
            <p>{Parrafo}</p>
        </div>

        <div className="botons-contents">
            {!disableGitHub ? (
                <a className="botones-link" target='_blank' href={Gitsrc}><span>GitHub</span></a>
            ):(
                <span className="botones-link disable-btn" target='_blank' href={Gitsrc}><span>Privado</span></span>
            )}
            {!disableWeb ?(
                <a className="botones-link" target='_blank' href={Websrc}><span>Visitar</span></a>
            ):(
                <Link className="botones-link" to="/"><span>Estas Aqui</span></Link>
            ) }
        </div>

    </div>
  )
}

export default PinCard