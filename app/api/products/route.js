import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(request) {


    // Replace the uri string with your connection string.
    const uri = process.env.MONGO_URI;

    const client = new MongoClient(uri);

    try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');

        // Query for a movie that has the title 'Back to the Future'
        const query = {};
        const allProducts = await inventory.find().toArray();

        return NextResponse.json({ "hello": "world", allProducts })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();

    }

}
export async function POST(request) {

    let body = await request.json();
    const uri = process.env.MONGO_URI;

    const client = new MongoClient(uri);

    try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');
        const product = await inventory.insertOne(body);
        return NextResponse.json({ success: true, product })
    } finally {
        await client.close();

    }

}