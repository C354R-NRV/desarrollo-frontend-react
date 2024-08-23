
const LandingPage = () => {

    return ( 
        <div className="containerLandingPage">
            <header className="headerLandingPage">
                <h1 className="titleLandingPage">Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </header>
            
            <section className="welcome-sectionLandingPage">
            Bienvenido
            </section>
            <div className="justifyLandingPage">
                Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de 
                <strong> componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
                </div>
            
            
            <section className="topics-sectionLandingPage">
                Temas Cubiertos 
            </section>

                <div className="topic-listLandingPage justifyLandingPage">
                <div>😎 Componentes funcionales y de clase</div>
                <div>😎 Uso de <strong>React hooks</strong> como <strong>useState</strong> y <strong>useEffect</strong></div>
                <div>😎 Creación de <strong>custom hooks</strong> como <strong>useForm</strong></div>
                <div>😎 Gestión de variables de estado con <strong>useState</strong></div>
                <div>😎 Gestión de estado global con <strong>Redux</strong></div>
                <div>😎 Integración de <strong>Redux</strong> con <strong>React</strong></div>
                <div>😎 Manejo de <strong>Formularios</strong> en <strong>React</strong></div>
                <div>😎 Publicando nuestra Página con <strong>GitHub Pages</strong></div>
                </div>
            
            
            <section className="resources-sectionLandingPage">
                Recursos Adicionales
            </section>
                <div className="justifyLandingPage">Para profundizar en los temas cubiertos, consulta los siguientes recursos:</div>
            
            <footer className="footerLandingPage">
                <p>© 2024 Modulo 7. USIP.</p>
            </footer>
            </div>

    );
}; 

export default LandingPage;