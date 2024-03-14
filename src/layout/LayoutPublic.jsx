import { Outlet } from "react-router-dom";
import { NavHeader } from "../components/NavHeader/NavHeader";

const LayoutPublic = ()=>{
    return (
        
        <main>
            <NavHeader/>
            <Outlet/>
        </main>
        
    )
}
export default LayoutPublic;