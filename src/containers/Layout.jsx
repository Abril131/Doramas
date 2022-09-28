import Header from "../componentes/Header";
import Body from "../componentes/Body";
import Card from "../componentes/Card"
import { Children } from "react";

 function Layout({Children}){
    return(
        <>
        <Header/>
                {Children}
            <Body/>
            <Card/>

        </>
    )
 }

 export default Layout;