import './WebFrontend.scss'
import PinCard from './PinCard'


export const WebFrontend = () => {
    return (
        <div className="proyectsContent">

            <div className="central-container">

                <h1 className='Titulo'>Web Frontend</h1>

                <div className="central-grid-container">

                    <PinCard
                        Titulo = "Pinterest"
                        IMGsrc ='./IMGS/Proyectos/Web/proPinterest.png'
                        Parrafo ="Recreacion de Pinterest usando react.js"
                        Gitsrc = 'https://github.com/JuanJoseEscobar/PinterestRecreacionReact-Vite'
                        Websrc = 'https://reactpinterest-d9341.web.app/'
                    />

                    <PinCard
                        Titulo = "Gifs-App"
                        IMGsrc ='./IMGS/Proyectos/Web/proGifs.png'
                        Parrafo ="Una App de react.js que genera 10 gifs"
                        Gitsrc = 'https://github.com/JuanJoseEscobar/CursoReact/tree/main/04-git-expert-app'
                        Websrc = 'https://react-vite-fb.web.app/'
                    />

                    <PinCard
                        Titulo = "Catalogo Burdeos"
                        IMGsrc ='./IMGS/Proyectos/Web/proCatalogo.png'
                        Parrafo ="App web creado en mi tiempo en MaderKit. El codigo es privado por terminos de contrato."
                        Websrc = 'https://3dymedios.com/AT/AppTiendasCatalogo/#/HomeCenter/ColeccionBurdeos'
                        disableGitHub = {true}
                    />

                    <PinCard
                        Titulo = "Pagina Personal"
                        IMGsrc ='./IMGS/Proyectos/Web/proPortafolio.png'
                        Parrafo ="Mi pagina personal. Puedes ver el codigo en github."
                        Gitsrc = 'https://github.com/JuanJoseEscobar/JJEZPortafolio'
                        Websrc = 'https://jjezportafolio.web.app/'
                        disableWeb = {true}
                    />

                </div>

            </div>

        </div>
    )
}
