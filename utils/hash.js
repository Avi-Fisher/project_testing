import bcrypt from "bcrypt"


export async function getHashPassword(password,saltRounds = 10){
    
    const hash = await bcrypt.hash(password,saltRounds)
    return hash
}


export async function checkHashPassword(password,hash){

    const check = await bcrypt.compare(password,hash)
    return check
}


