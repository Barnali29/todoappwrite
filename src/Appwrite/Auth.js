
import { Account, Client, ID } from 'appwrite'
import Config from '../Config'

class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client.setEndpoint(Config.appwriteurl).setProject(Config.appwriteproject_id);
        this.account = new Account(this.client);
    }
    async createAccount({email, password,name }) {
        console.log("create Account",email,name,password);
        try {
            const user = await this.account.create(ID.unique(), email, password, name);
            if (user) return this.login({ email, password });
            else return user;
        } catch (error) {
            throw error;
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
    async getUserId() {
        try {
       return   (await this.account.get()).$id;   
        } catch (error) {
           console.log("Error at getuserId",error);
        }
    }
    async getUser(){
        try {
           return await this.account.get();
        } catch (error) {
            console.log("Error at getUser",error)
        }
    }
}
const Auth = new AuthService();
export default Auth;
/*
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = databases.createCollection('<DATABASE_ID>', '[COLLECTION_ID]', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

*/