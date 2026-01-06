import { MongoClient } from "mongodb";


export async function connectLocalMongo() {

    const url = 'mongodb://localhost:27017'
    const client = new MongoClient(url)

    await client.connect()

    const db = await client.db("note_users")
    return db
}


