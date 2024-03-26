import React from 'react'

export const Pancarta = ({
        titulo = "Proyectos", 
        parrafo = "Esto es un parrafo de prueba y no deveria verse en la version final", 
        imagenSRC = './',
        linkUrl = ''
    }) => {
    return (
        <div className="Pancarta-flex-item">

            <div className="titulo-content">
                <h1 className='tituloColor'>{titulo}</h1>
            </div>

            <div className="body-content">

                <div className="info-content">

                    <div className="content-image">
                        <img className='image-item' src={imagenSRC} alt="Imagen del portafolio" />
                    </div>

                    <div className="content-right-item">
                        <p>{parrafo}</p>
                    </div>

                </div>
                
                <div className="btn-content">

                    <a href={linkUrl} target='_blank'><span>Visitar</span></a>

                </div>


            </div>

        </div>
    )
}
