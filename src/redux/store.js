// vamos a configurar la store pero no vamos a modificar nada acá.

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import pokeReducer from './pokeDucks';
import usuarioReducer, {leerUsuarioActivoAccion} from './usuarioDucks';


// esto es lo unico que se puede modificar a futuro
const rootReducer = combineReducers ({
    pokemones: pokeReducer,
    usuario: usuarioReducer
})

// esto sirve para configurar la extension de Google Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
    // aca configuramos el middleware
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)) )
    leerUsuarioActivoAccion()(store.dispatch)
    return store;
}