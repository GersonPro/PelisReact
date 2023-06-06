import React from "react";
import ListHome from "../componentes/ListHome";
import ListAccion from "../componentes/ListAccion";
const Home = () =>{ 
    return(
        <div className=" top-0 left-0 right-0 p-4 pt-32" >
            
            <ListHome/>
           <div className="bg-gray-600 h-12 my-6 p-1 "><h1 className="text-xl m-3 dark:text-slate-200">Comedia</h1></div> 
            <ListAccion/>
        </div>
    )
}
export default Home;