import { NavLink } from "react-router-dom";

const NavLinksItems = ()=>{
        const navLinks = [
        {link: "Home", path: "/"},
        {link: "Services", path: "/services"},
        {link: "Resume", path: "/resume"},
        {link: "Work", path: "/work"},
        {link: "Contact", path: "/contact"}
    ]
    return(
        <>
            {
                navLinks.map((item, index)=>(
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({isActive})=>
                        isActive ? 
                        "text-purple-600 border-b-2"
                        :
                        "hover:text-purple-600 text-white duration-300"
                        }
                    >
                        {item.link}
                        </NavLink>
                    ))
                }
        </>
    );
}

export default NavLinksItems;