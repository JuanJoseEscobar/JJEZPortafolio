import { createHashRouter,createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic.jsx";
import { Home, Notfound, Proyects, Social, WebFrontend } from "../pages/index";


export const router = createHashRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <Notfound/>,
        children: [
            {
                errorElement:<Notfound/>,
                children:[
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: "/Proyectos",
                        element:<Proyects/>,
                        
                    },
                    {
                        path: "/Proyectos/WebFrontend",
                        element:<WebFrontend/>,
                        
                    },
                    {
                        path: "/Social",
                        element:<Social/>,
        
                    }
                ]

            }
        ],
    },
    
]);
