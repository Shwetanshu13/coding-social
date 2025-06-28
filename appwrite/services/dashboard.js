import { Databases } from "appwrite";
import { client, conf } from "../conf";

const databases = new Databases(client);

// console.log(conf.database, conf.collection)

export const listUserData = async () => {
    try {
        const res = await databases.listDocuments(
            conf.database,
            conf.collection
        );
        return res;
    } catch (error) {
        console.log(error)
    }
};