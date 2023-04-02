import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from "../components/LandingComponent/Landing"

export default function AppRouter(){
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>}/>
        {/* <Route path="post" element={<LandingComponent/>}>
        <Route path="new" element={<LandingComponent/>}/>
        <Route path="all" element={<LandingComponent/>}/>
        </Route> */}
    </Routes>
    </BrowserRouter>
}