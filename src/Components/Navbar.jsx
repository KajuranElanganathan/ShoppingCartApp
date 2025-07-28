import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


function Navbar(){

return(


    <nav>

        <ul>

            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/shop">Shop</Link></li>




        </ul>




        <Outlet/>
    </nav>









)




}

export default Navbar