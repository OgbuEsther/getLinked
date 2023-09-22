import {createBrowserRouter} from "react-router-dom"
import HomeScreen from "../home/HomeScreen"
import ContactUs from "../auth/ContactUs"
import SIgnIn from "../auth/SIgnIn"


export const Routes = createBrowserRouter([
    {
        path : "/",
        element : <HomeScreen />
    },
    {
        path : "/auth",
        element : <SIgnIn />
    },
    {
        path : "/contact",
        element : <ContactUs />
    }
])