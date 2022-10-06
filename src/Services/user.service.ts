import { user } from '../Model/user.model'

export const getNameService = (Id: number) => {
    return (user[Id] && user[Id]?.name) ?? "";
}

export const createNameService = (userName: string) => {
    let obj: { name: string } = { name: userName }
    user.push(obj);
    return "created"
}

export const deleteNameService = (Id: number) => {
    const res = user.splice(Id, 1)
    console.log(res)
    return res.length > 0 ? res[0] : "";
}

export const UpdateNameService = (Id: number, updateUserValues: object) => {
    const res = { ...user[Id], ...updateUserValues }
    user[Id] = res;
    return user[Id];
}