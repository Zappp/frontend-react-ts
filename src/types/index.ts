export interface UserPrivateData {
    password?: String,
    category?: String
}

export interface UserData extends UserPrivateData {
    name?: string
    surname?: string
    email?: string
}
