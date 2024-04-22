

const PinCard = ({
    Titulo = "Titulo",
    IMGsrc ='',
    Parrafo ="Parrafo",
    Gitsrc = '',
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
            <a className="botones-link" target='_blank' href={Gitsrc}><span>GitHub</span></a>
            <a className="botones-link"  target='_blank' href={Websrc}><span>Visitar</span></a>
        </div>

    </div>
  )
}

export default PinCard