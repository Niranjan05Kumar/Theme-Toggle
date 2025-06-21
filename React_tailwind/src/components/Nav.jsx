import Switch from "./Switch"

const Nav = () => {

    return (
        <header className="text-secondary-text dark:text-secondary-text-dark bg-primary-bg dark:bg-primary-bg-dark body-font transition-colors duration-300">
            <div className="container mx-auto flex flex-wrap py-5 px-[10vw] flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-primary-text dark:text-primary-text-dark mb-4 md:mb-0 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-primary-text p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl text-primary-text dark:text-primary-text-dark transition-colors duration-300">Tailblocks</span>
                </a>
                <nav className="md:ml-auto md:mr-auto items-center text-base justify-center hidden sm:block">
                    <a className="mr-5 hover:text-primary-text dark:hover:text-primary-text-dark transition-colors duration-300">First Link</a>
                    <a className="mr-5 hover:text-primary-text dark:hover:text-primary-text-dark transition-colors duration-300">Second Link</a>
                    <a className="mr-5 hover:text-primary-text dark:hover:text-primary-text-dark transition-colors duration-300">Third Link</a>
                    <a className="mr-5 hover:text-primary-text dark:hover:text-primary-text-dark transition-colors duration-300">Fourth Link</a>
                </nav>
                <Switch />
            </div>
        </header>
    )
}

export default Nav
