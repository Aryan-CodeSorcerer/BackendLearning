import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

const uploadOnCloudinary=async (localFilePath)=>{
    try {
        if(!localFilePath) return null;
        //upload the file on cloudinary
        const res= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been upload successsfully
        console.log("file is uploaded in cloudinary ",res.url);
        return res;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the local saved temp file as the u0load oprn got failed
        return null;
    }
}


    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });