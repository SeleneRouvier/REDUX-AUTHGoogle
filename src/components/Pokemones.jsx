import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {anteriorPokemonAccion, obtenerPokemonesAccion, siguientePokemonAccion, unPokeDetalleAccion} from '../redux/pokeDucks';
import Detalle from './Detalle';

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    useEffect(() => {
        const fetchData = () => {
            dispatch(obtenerPokemonesAccion())
        }
        fetchData()
    }, [dispatch])

    return (
        <div className="row mt-5">
            <div className="col-md-6">
                <h3 className="text-center text-info">Lista de Pokemones</h3> 
                <ul className="list-group mt-4">
                    {
                        pokemones.map(item => (
                            <li key={item.name} className="list-group-item">
                                {item.name}
                                <button className="btn btn-info brn-sm float-right"
                                        onClick={() => dispatch(unPokeDetalleAccion(item.url))}>
                                    Info
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <div className="d-flex justify-content-between mt-4">
                    {
                        pokemones.length === 0 && 
                        <button onClick={() => dispatch(obtenerPokemonesAccion())} className="btn btn-dark">Get Pokemones</button>
                    }
                    {
                        next &&
                        <button onClick={() => dispatch(siguientePokemonAccion())} className="btn btn-dark">Siguiente</button>
                    }
                    {
                        previous &&
                        <button onClick={() => dispatch(anteriorPokemonAccion())} className="btn btn-dark">Anterior</button>
                    }
                </div>
            </div>
            <div className="col-md-6">
                <h3 className="text-info text-center">Detalle Pokemon</h3>
                <Detalle />
            </div>
        </div>
    )
}

export default Pokemones;
