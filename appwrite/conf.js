import { Client } from "appwrite";

export const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

export const conf = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    project: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    database: process.env.NEXT_PUBLIC_DATABASE_ID,
    collection: process.env.NEXT_PUBLIC_COLLECTION_ID
}

