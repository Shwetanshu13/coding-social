import { Databases, ID } from "appwrite";
import { client, conf } from "../conf";


const databases = new Databases(client);

export const addUserData = async (data) => {
    try {
        const res = await databases.createDocument(
            conf.database,
            conf.collection,
            ID.unique(),
            data
        );
        return res;
    } catch (error) {
        console.log(error)
    }
};

