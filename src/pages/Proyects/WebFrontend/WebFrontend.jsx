import './WebFrontend.scss'
import PinCard from './PinCard'


export const WebFrontend = () => {
    return (
        <div className="proyectsContent">

            <div className="central-container">

                <h1 className='Titulo'>Web Frontend</h1>

                <div className="central-grid-container">

                    <PinCard></PinCard>
                    <PinCard></PinCard>
                    <PinCard></PinCard>
                    <PinCard></PinCard>
                    
                </div>

            </div>

        </div>
    )
}
