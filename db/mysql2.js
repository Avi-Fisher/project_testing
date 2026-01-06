import mysql2 from "mysql2/promise"



export async function connectMysql2() {
    const connect = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        database: "note"
    })
    return connect
}









