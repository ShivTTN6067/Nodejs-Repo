import {user}  from '../Model/user.model'

export const getNameService = (Id:number) => {
     return user[Id].name;
}

export const createNameService = (userName : string) => {
    let obj :{name: string} = {name: userName}
    user.push(obj);
    return "created"
}

export const deleteNameService = (Id : number) => {
    const res = user.splice(Id,1)
    console.log(res)
    return res.length > 0 ? res[0] : "";
}

export const UpdateNameService = (Id : number, {name, role}:{name: string, role: number}) => {
    const res = {...user[Id], name: name, role: role}
    user[Id] = res;
    return user[Id];
}