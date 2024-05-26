import { Spain, English, Mata } from './../../assets/index'
import { Menu, X } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export default function Navbar() {
    const names = ["Home", "Sobre Nós", "Nossa Casa", "Contato"];
    const languages = [{ name: 'English', src: English }, { name: 'Spain', src: Spain }];
    return (
        <nav className="bg-[#121317] mt-0 rounded-none border-b justify-between md:mt-10 h-32 flex items-center md:justify-evenly md:bg-[#12131754] md:rounded-2xl md:border border-[#a5040469]">
            <img className="ml-20 md:ml-0 w-14 cursor-pointer hover:scale-125" src={Mata} alt="..." />
            <ul className="hidden md:flex mx-6">
                {names.map((name, i) => (
                    <li className='text-4xl mx-10 cursor-pointer font-light font-sans hover:text-red-400' key={i}>
                        {name}
                    </li>
                ))}
            </ul>
            <div className="hidden md:flex">
                {languages.map((language, i) => (
                    <img
                        className="max-w-none mx-4 cursor-pointer hover:scale-125"
                        key={i}
                        src={language.src}
                        alt={language.name}
                    />
                ))}
            </div>
            <DropdownMenu >
                <DropdownMenuTrigger className="md:hidden">
                    <Menu className="md:hidden mr-20" size={42} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='md:hidden w-screen bg-[#121317] border-[#a5040469] '>
                    {/* <DropdownMenuItem className='justify-center'>
                        {languages.map((language, i) => (
                            <img
                                className="max-w-none m-6 cursor-pointer hover:scale-125"
                                key={i}
                                src={language.src}
                                alt={language.name}
                            />
                        ))}
                    </DropdownMenuItem> */}
                    {names.map((name, i) => (
                        <DropdownMenuItem className='justify-center py-10 w-full cursor-pointer text-white text-4xl bg-[#121317]  active:bg-[#3815158c]' key={i} >
                            {name}
                            <DropdownMenuSeparator />
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>

    );
}