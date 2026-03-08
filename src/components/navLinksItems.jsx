const NavLinksItems = ()=>{
        const navLinks = [
        {link: "Home", path: "/"},
        {link: "About", path: "/#aboutme"},
        {link: "Projects", path: "/#projects"},
    ]
    return(
        <>
            {
                navLinks.map((item, index)=>(
                    <a
                        key={index}
                        href={item.path}
                    >
                        {item.link}
                        </a>
                    ))
                }
        </>
    );
}

export default NavLinksItems;