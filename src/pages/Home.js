import React from "react";
import ListHome from "../componentes/ListHome";
import ListAccion from "../componentes/ListAccion";
import Carrucel from "../componentes/Carrucel";
const Home = () =>{ 
    return(
        
        <div className=" top-0 left-0 right-0  " >
                <Carrucel className="z-0"/>
                <div className=" bg-gray-200 bg-opacity-10 backdrop-blur-lg rounded-lg mx-6 mt-8 text-gray-800 h-8"><h1 className="text-2xl m-3 dark:text-slate-200">Estrenos</h1> </div> 

            <ListHome className="pt-10 m-2 p-4" />
           <div className=" bg-gray-200 bg-opacity-10 backdrop-blur-lg rounded-lg mx-2 text-gray-800 h-8 "><h1 className="text-2xl m-3 dark:text-slate-200">Comedia</h1> </div> 
            <ListAccion/>
        </div>
        
    )
}
export default Home;