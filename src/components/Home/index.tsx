import Touro from './../../assets/touro.png'
// import Navbar from "../NavBar";
import { Instagram } from 'lucide-react';

import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="h-sreen bg-bg-blur bg-contain bg-center bg-no-repeat mx-10 md:mx-0">
           
            <div className="justify-center h-[54vh] md:h-[74vh] flex md:justify-between items-center flex-col md:flex-row">
                <div className="flex flex-col">
                    <h2 className="text-4xl md:text-6xl font-light opacity-45 tracking-[.25em]">Vida Longa<i className='text-xl  text-red-400 tracking-tighter opacity-100 '>since 1991</i></h2>
                    <h1 className="text-5xl font-semibold md:text-8xl md:font-normal my-3 bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-600">República Matadouro</h1>
                    <h3 className="text-3xl md:text-4xl font-normal opacity-80">A <strong className="font-extrabold opacity-100">maior e mais antiga</strong> República de São Carlos.</h3>
                    <Button className='flex w-3/5 h-24 md:w-2/5 mt-8 bg-gradient-to-br from-[#a5040490] to-[#000000fb] border  border-[#a5040469] rounded-3xl '>
                        <a target="_blank" className="w-full text-4xl flex justify-center font-light" href="https://www.instagram.com/rep.matadouro/"><Instagram className='mr-4' /> Instagram</a>
                    </Button>
                </div>
                <img className="hidden md:flex w-2/5 cursor-pointer animate-pulse opacity-20 transition-opacity" src={Touro} alt="Touro Matadouro" />
            </div>
        </div>
    );
}
