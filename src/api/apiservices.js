import axiosInstance from "./axiosinstance";

const apiServices=async(httpMethod,url,reqBody)=>{
const reqConfig={
        method:httpMethod,
        url,
        data:reqBody
    }
    
   try{
    const response=await axiosInstance(reqConfig)
    return response
   }
   catch(err){
    console.log("API call failied "+err.message);
    throw err
   }

}
export default apiServices