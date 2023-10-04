import '../styles/ProCard.css'
import { useNavigate } from 'react-router-dom';


function ProCard() {
    const navigatePokedex = () => {

        navigate('/pokedex');
    };

    const navigate = useNavigate();

    return (
        <div className="proCard">
            <div className="menu">
                <div className='pokedex'><button onClick={navigatePokedex}> <img src="https://img.icons8.com/?size=256&id=x3s0mSWBMJTc&format=png" alt="" />Pokedex</button></div>
                <p className="pokedexNumber">#001</p>
            </div>
            <div className="pokemonImageDiv">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
            </div>
            <p className='pkmName'>LUCAS</p>
            <div className="pkmTypes">
                <p className='type'>fire</p>
            </div>
            <div className="pkmSizeDiv">
                <div className="pkmSize">
                    <p className="numberSize">100 KG</p>
                    <p className="textSize">Weight</p>
                </div>
                <div className="pkmSize">
                    <p className="numberSize">1 M</p>
                    <p className="textSize">Height</p>
                </div>
            </div>
            <div className="stats">
                <div className="statsTitleDiv">
                    <p className="baseStats">Base Stats</p>
                </div>
                <div className="graphDiv">
                    <div className='graphTextDiv'>
                        <div className='graphText'><p>HP</p></div>
                        <div className='graphText'><p>ATK</p></div>
                        <div className='graphText'><p>DEF</p></div>
                        <div className='graphText'><p>SPD</p></div>
                        <div className='graphText'><p>EXP</p></div>
                    </div>
                    <div className="graphColors">
                        <div className="fullGraph">
                            <div className="numberGraph">
                                <p>100</p>
                                <p>/</p>
                                <p>100</p>
                            </div>
                        </div>
                        <div className="fullGraph">
                            <div className="numberGraph">
                                <p>100</p>
                                <p>/</p>
                                <p>100</p>
                            </div>
                        </div>
                        <div className="fullGraph">
                            <div className="numberGraph">
                                <p>100</p>
                                <p>/</p>
                                <p>100</p>
                            </div>
                        </div>
                        <div className="fullGraph">
                            <div className="numberGraph">
                                <p>100</p>
                                <p>/</p>
                                <p>100</p>
                            </div>
                        </div>
                        <div className="fullGraph">
                            <div className="numberGraph">
                                <p>100</p>
                                <p>/</p>
                                <p>100</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export { ProCard }