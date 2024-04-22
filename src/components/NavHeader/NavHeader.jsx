import { NavLink } from "react-router-dom";
import "./NavHeader.scss"
import { useRef } from "react";

export const NavHeader = () => {

    const refCheckBTN = useRef(false);

    const handleCheck = () => {
        refCheckBTN.current.checked = false;
    }



    return (
        <div className="ContentNav">
            <nav className="headerNav">
                <div className="contentLeft">
                    <div className="perfilImagen">
                        <img src="./IMGS/MiniPerfilIMG.jpg" alt="perfil imagen" className="miniPerfil" />
                    </div>
                    <h1 className="tituloColor">Juan Escobar</h1>
                </div>

                <input type="checkbox" id="check" ref={refCheckBTN} />
                <label for="check" className="checkBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="hambuerger" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </label>

                <div className="contentRight">
                    <div className="boxLink">
                        <NavLink className={({ isActive }) =>
                            isActive ? "linkTxt active" : "linkTxt"
                        } onClick={handleCheck} to="/" >Sobre mi</NavLink>
                    </div>
                    <div className="boxLink">
                        <NavLink className="linkTxt" onClick={handleCheck} to="/Proyectos" >Proyectos</NavLink>
                    </div>
                    <div className="boxLink">
                        <NavLink className="linkTxt" onClick={handleCheck} to="/Social" >Social</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}


