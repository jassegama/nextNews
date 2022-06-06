import { useState } from 'react'
import { useRouter } from "next/router";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'



export function Toolbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    
    let styles = {divClass: "bg-[#1D2951] w-full md:w-auto left-0 md:flex md:items-center z-[0] md:z-auto md:static absolute md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-200"}
    let stylesMob = {divClass: "bg-[#1D2951] w-full md:w-auto left-0 md:flex md:items-center z-[0] md:z-auto md:static absolute md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[80] transition-all ease-in duration-200"}
    const router = useRouter();

    return(

        <>
        <nav className="p-5 shadow bg-[#1D2951] md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
                    <span>
                        <h2 onClick={() => router.push('/')} className="text-white font-primary cursor-pointer">NEWS HUBB</h2>
                    </span>

                    <span className="text-3xl cursor-pointer mx-2 md:hidden block">
                        {toggleMenu
                            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                        }
                    </span>
                </div>

                 <ul className={
                     !toggleMenu
                     ? `${styles.divClass})`
                     : `${stylesMob.divClass})`
                }>         
                    <li className="mx-4 my-2 md:my-0 cursor-pointer text-white hover:text-amber-600 duration-200" onClick={() => router.push('/')}>Home</li>
                    <li className="mx-4 my-2 md:my-0 cursor-pointer text-white hover:text-amber-600 duration-200" onClick={() => router.push('/feed/1')}>Feed</li>
                    <li className="mx-4 my-2 md:my-0 cursor-pointer text-white hover:text-amber-600 duration-200" onClick={() => router.push('/eom')}>About Me</li>
                    <li className="mx-4 my-2 md:my-0 cursor-pointer text-white hover:text-amber-600 duration-200" onClick={() => window.location.href = 'https://www.linkedin.com/in/jassegama/'}>Linkedin</li>
                    <li className="mx-4 my-2 md:my-0 cursor-pointer text-white hover:text-amber-600 duration-200" onClick={() => window.location.href = 'https://github.com/jassegama'}>Github</li>
                </ul>
            </nav>
        </>

    )
};