import { Outlet } from "react-router-dom";
import { NavHeader } from "../components/NavHeader/NavHeader";

const LayoutPublic = ()=>{
    return (
        <>
            <NavHeader/>
            <main>
                <Outlet/>
            </main>
        </>
        
        
    )
}
export default LayoutPublic;