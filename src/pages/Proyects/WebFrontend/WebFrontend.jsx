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

                </div>

            </div>

        </div>
    )
}
