export interface User {
    _id?: string,
    username: string
    email: string,
    password: string,
    favoritos: [{
        idUser: boolean
    }],
    bloqueos: [{
        idUser: boolean
    }]
}

export enum UserType {
    ADMIN = "Administrador",
    CLIENT = "Cliente"
}