import { Separator } from "@/components/ui/separator"

import { Ugo } from "@/assets";

export default function Contact() {
    const moradores = [{ name: 'UGO', src: Ugo, number: "(19) 99632-5567", linkWpp: "https://www.instagram.com/rep.matadouro/" }, { name: 'UGO', src: Ugo, number: "(19) 99632-5567", linkWpp: "https://www.instagram.com/rep.matadouro/" }, { name: 'UGO', src: Ugo, number: "(19) 99632-5567", linkWpp: "https://www.instagram.com/rep.matadouro/" }];
    return (
        <div className="flex flex-col h-auto mt-[14vh] mx-10 md:mx-0">
            <h1 className="text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-600">Se identificou com os Matadouros? chama nois pô</h1>
            <p className="text-2xl  md:text-4xl mt-3 tracking-wider opacity-55 w-6/6 md:w-3/6">Entre em contato com os números abaixo, ou se preferir
                pode dar um alô no nosso insta, tmj bixãoo!</p>
            <div className="flex flex-col md:flex-row justify-evenly my-10 md:my-24 ">
                {moradores.map((morador, i) => (
                    <a key={i} href={morador.linkWpp} target="_blank" rel="noopener noreferrer">
                        <div className="flex my-10 flex-col items-center text-5xl font-light">
                            <h1 className="font-medium bg-clip-text text-transparent bg-gradient-to-br from-red-300 to-red-900">{morador.name}</h1>
                            <img
                                className="w-2/6 md:w-3/6 my-8 md:my-5 cursor-pointer rounded-full border border-red-700 hover:scale-110 animate-pulse "
                                src={morador.src}
                                alt={morador.name}
                            />
                            <h3 className="text-4xl md:text-4xl tracking-widest">{morador.number}</h3>
                        </div>
                    </a>
                ))}

            </div>
            <h1 className="text-7xl font-medium">Contato<span className="text-red-700 text-9xl">.</span></h1>
            <Separator />
            <div className="flex font-light justify-between text-2xl md:text-3xl my-6 text-gray-400 tracking-wider md:tracking-widest opacity-80">
                <h3>Made by Strondinha🍃</h3>
                <h3>Rep Matadouro ©2024</h3>
            </div>
        </div>
    );
}
