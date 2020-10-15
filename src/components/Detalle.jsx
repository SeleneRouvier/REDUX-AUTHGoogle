import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {unPokeDetalleAccion} from '../redux/pokeDucks'

const Detalle = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = () => {
            dispatch(unPokeDetalleAccion())
        }
        fetchData()
    }, [dispatch])

    const pokemon = useSelector(store => store.pokemones.unPokemon)
    //console.log(pokemon)

    return pokemon ? (
        <div className="card mt-5 text-center">
            <div className="card-body">
                <img src={pokemon.foto} className="img-fluid" alt=""/>
                <div className="card-title text-uppercase">
                    <h3>{pokemon.nombre}</h3>
                </div>
                <hr/>
                <h4 className="card-text">Alto: {pokemon.alto} | Ancho: {pokemon.ancho} </h4>
            </div>
        </div>
    ) : null
}

export default Detalle
