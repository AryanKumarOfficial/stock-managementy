import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(request) {


    // Replace the uri string with your connection string.
    const uri = "mongodb+srv://stock-database:stocker%E2%82%B93000@cluster0.79fi7kj.mongodb.net/stock";

    const client = new MongoClient(uri);

    const database = client.db('stock');
    const movies = database.collection('inventory');

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const movie = await movies.find().toArray();

    console.log(movie);
    return NextResponse.json({ "hello": "world", movie })

}