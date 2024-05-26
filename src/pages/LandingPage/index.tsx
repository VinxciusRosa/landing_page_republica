import {Navbar, Home, About, AboutHouse, Contact} from "../../components/index";

function LandingPage() {
    return ( 
        <main> 
            <Navbar />
            <Home/>
            <About/>
            <AboutHouse/>
            <Contact/>
        </main>
    );
}

export default LandingPage;