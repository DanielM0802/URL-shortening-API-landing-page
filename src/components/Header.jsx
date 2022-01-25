import logo from '../img/logo.svg';

const Header = () => {

    const handleMenu = () => {
        const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
    }
    return (
        <header className="fixed w-full z-10 bg-white">
            <nav className="flex items-center justify-between flex-wrap p-6 lg:px-0 lg:w-5/6 lg:mx-auto">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a href="#"> <img src={logo} alt="logo"/></a>
                </div>
                <div className="block lg:hidden" onClick={handleMenu}>
                    <button className="flex items-center">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="navigation w-full block flex-grow font-bold text-lg lg:flex items-center lg:w-auto lg:text-gray lg:text-sm" id="menu">
                    <div className="lg:flex-grow ">
                        <a onClick={handleMenu} href="#" className="nav-link lg:mr-4 ">
                            Features
                        </a>
                        <a onClick={handleMenu} href="#" className="nav-link lg:mr-4 ">
                            Pricing
                        </a>
                        <a onClick={handleMenu} href="#" className="nav-link ">
                            Resources
                        </a>
                    </div>
                    <div className="botones">
                        <button className="font-bold my-5 lg:mb-0 lg:hover:text-veryDarkViolet" >Login</button>
                        <button className="btn-primary py-2 px-4 rounded-full lg:ml-5 ">Sign Up</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header