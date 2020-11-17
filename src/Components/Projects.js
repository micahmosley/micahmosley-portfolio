import React from 'react';
import '../styles/projects.css';
import Aos from 'aos';
import moneymaker from '../images/moneymaker.png';
import moneymakerGif from '../images/moneymaker.gif';
import mosbros from '../images/mosbros.png';
import mosbrosGif from '../images/mosbros.gif';
import pokemon from '../images/pokemon.png';
import pokemonGif from '../images/pokemon.gif';
import trivia from '../images/trivia.png';
import triviaGif from '../images/trivia.gif';

import ShowMore from './ShowMore.js';

class Projects extends React.Component {

    componentDidMount() {
        Aos.init({ duration: 3000 })
    }

    render() {
        return (
            <div className="projects">
                <h1 className="title">Projects</h1>

                <div className="proj1">
                    <h1 className="proj-title">MoneyMaker</h1>
                    <img data-aos='fade-up-right' className="proj-img" src={moneymaker} alt="MoneyMaker" />
                    <p className="tech-stack"><span>HTML</span>|<span>CSS</span>|<span>JS</span>|<span>React</span>|<span>Ruby on Rails</span>|<span>PostgresSQL</span></p>
                    <ShowMore project="MoneyMaker" gif={moneymakerGif} demo="https://www.youtube.com/watch?v=5-1OlIyXph4" git="https://github.com/micahmosley/money-maker-frontend"/>
                </div>
                <div className="proj2">
                    <h1 className="proj-title">MosBros Casino</h1>
                    <img data-aos='fade-up-right' className="proj-img" src={mosbros} alt="MosBros Casino" />
                    <p className="tech-stack"><span>HTML</span>|<span>CSS</span>|<span>JS</span>|<span>React</span>|<span>Ruby on Rails</span>|<span>PostgresSQL</span></p>
                    <ShowMore project="MosBros Casino" gif={mosbrosGif} demo="https://www.youtube.com/watch?v=YQ_sav1GPwc&t=1s" git="https://github.com/colin-mosley/mosbros-casino-frontend"/>
                </div>
                <div className="proj3">
                    <h1 className="proj-title">Pokemon-Lite</h1>
                    <img data-aos='fade-up-right' className="proj-img" src={pokemon} alt="Pokemon" />
                    <p className="tech-stack"><span>HTML</span>|<span>CSS</span>|<span>JS</span>|<span>Ruby on Rails</span>|<span>SQLite3</span></p>
                    <ShowMore project="Pokemon-Lite" gif={pokemonGif} demo="https://www.youtube.com/watch?v=frZgNt6DBY0&t=26s" git="https://github.com/micahmosley/pokemon-lite"/>
                </div>
                <div className="proj4">
                    <h1 className="proj-title">Trivia Tumble</h1>
                    <img data-aos='fade-up-right' className="proj-img" src={trivia} alt="TriviaTumble" />
                    <p className="tech-stack"><span>Ruby</span>|<span>ActiveRecord</span>|<span>SQLite3</span>|<span>Colorize</span>|<span>Open Trivia DB API</span></p>
                    <ShowMore project="Trivia Tumble"gif={triviaGif} demo="https://www.youtube.com/watch?v=50N3swVfJ3Y" git="https://github.com/micahmosley/Trivia-Tumble"/>
                </div>


            </div>
        )
    }
}

export default Projects