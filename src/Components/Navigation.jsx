import { NavLink } from "react-router-dom"
export default function Navigation(){
//export const Navigation =()=>{

    const setActive = ({isActive}) =>{
        return isActive ? "active" : "";
    }
    return (<div className="navigation-box">
                <nav className="navigation">
                        <NavLink
                            className={setActive}
                            to="/"
                        >
                        Home
                        </NavLink>
                        <NavLink
                            className={setActive}
                            to="/movies"
                        >
                        Movies
                        </NavLink>
                    </nav>
            </div>)
}