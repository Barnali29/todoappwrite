const Config={
    appwriteurl:String(process.env.REACT_APP_APPWRITE_URL),
    appwriteproject_id:String(process.env.REACT_APP_APPWRITE_project_id),
    appwritedatabase_id:String(process.env.REACT_APP_APPWRITE_database_id),
    appwritecollection_id:String(process.env.REACT_APP_APPWRITE_collection_id),
    appwritebucket_id:String(process.env.REACT_APP_APPWRITE_bucket_id),
    appwriteapi_key:String(process.env.REACT_APP_APPWRITE_APIKEY)
}

export default Config