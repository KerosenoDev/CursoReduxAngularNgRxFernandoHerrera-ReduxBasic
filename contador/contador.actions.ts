import { Action } from "../ngrx-falso/ngrx";

export const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

export const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

export const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};

export const resetearAction: Action = {
    type: 'RESETEAR'
};