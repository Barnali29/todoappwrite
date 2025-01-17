/*import { Databases,Client,Storage,ID} from "appwrite";

import Config from "../Config";
const sdk = require('node-appwrite');

class service{
     client = new sdk.Client();
 databases ;bucket;
    constructor(){
        this.client
        .setEndpoint(Config.appwriteurl)
        .setProject(Config.appwriteproject_id)
        .setKey(Config.appwriteapi_key);
        this.databases= new sdk.Databases(this.client)
        this.bucket=new sdk.Storage(this.client)
    }

    async  checkCollectionExists(collectionId) {
        try {
            const response = await this.databases.listCollections(Config.appwritedatabase_id); // Replace with your database ID
            const collections = response.collections;
            
            const collectionExists = collections.some(collection => collection.$id === collectionId);
            return collectionExists;
        } catch (error) {
            console.error('Error listing collections:', error);
            return false;
        }
    }

    async createCollection(UserId){
        try {
            const collectionId = `user_${UserId}_collection`;
            const promise =  await this.databases.createCollection(Config.appwritedatabase_id,
                collectionId, 
                'Collection for User ' + UserId);
                if(promise) console.log("Collection created successfully",promise);
        } catch (error) {
            console.log("Error at create Collection",error);
        }
       
    }

    async addDocumentToUserCollection(userId, data){
        try {
            const collectionId = `user_${userId}_collection`;
           const CollectionExist=await this.checkCollectionExists(collectionId);
           if(!CollectionExist) await this.createCollection(userId)
            console.log("add data",data);
            const response = await this.databases.createDocument(
                Config.appwritedatabase_id,
                collectionId,
                ID.unique(),
                data
            );
            console.log('Document added:', response);
          
        } catch (error) {
            console.error('Error adding document:', error);
        }
       
    }
    
}
    const Service=new service();
    export default Service;
*/
  
 
    import { Client, Databases, Storage, ID } from "appwrite";
    import Config from "../Config"; 
    const sdk = require('node-appwrite');

class service{
     client = new sdk.Client();
 databases ;bucket;
    constructor(){
        this.client
        .setEndpoint(Config.appwriteurl)
        .setProject(Config.appwriteproject_id)
        .setKey(Config.appwriteapi_key);
        this.databases= new sdk.Databases(this.client)
        this.bucket=new sdk.Storage(this.client)
    }
    
        async checkCollectionExists(collectionId) {
            try {
                const response = await this.databases.listCollections(Config.appwritedatabase_id);
                const collections = response.collections;
                const collectionExists = collections.some(collection => collection.$id === collectionId);
                return collectionExists;
            } catch (error) {
                console.error('Error listing collections:', error);
                return false;
            }
        }
    
        async createCollection(UserId) {
            try {
                const collectionId = `user_${UserId}_collection`;
                const promise = await this.databases.createCollection(Config.appwritedatabase_id,
                    collectionId,
                    'Collection for User ' + UserId);
                if (promise) {
                    console.log("Collection created successfully", promise);
                    const attributeCreation=await this.databases.createStringAttribute(Config.appwritedatabase_id,collectionId,"data",256,true);
                    if(attributeCreation) console.log("Attribute created successfully");
                }
            } catch (error) {
                console.log("Error at create Collection", error);
            }
        }
    
        async addDocumentToUserCollection({userId, data}) {
            try {
                const collectionId = `user_${userId}_collection`;
                const collectionExists = await this.checkCollectionExists(collectionId);
                if (!collectionExists) await this.createCollection(userId);
    
                // Log data before sending the request
                console.log("Data to be added:", data);
    
                const response = await this.databases.createDocument(
                    Config.appwritedatabase_id,
                    collectionId,
                    ID.unique(),
                    {data}
                );
                console.log('Document added:', response);
            } catch (error) {
                console.error('Error adding document:', error);
            }
        }

        async listDocuments(userId){
            try {
                const collectionId = `user_${userId}_collection`;
                return await this.databases.listDocuments(Config.appwritedatabase_id,collectionId);
            } catch (error) {
                console.log("Error in listing documetns",error)
            }
        }
    }
    
    const Service = new service();
    export default Service;