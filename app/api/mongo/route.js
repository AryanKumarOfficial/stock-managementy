import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(request) {


    // Replace the uri string with your connection string.
    const uri = process.env.MONGO_URI;

    const client = new MongoClient(uri);

    const database = client.db('stock');
    const inventory = database.collection('inventory');

    // Query for a movie that has the title 'Back to the Future'
    const products = await inventory.find().toArray();

    return NextResponse.json({ success: true, products })

}