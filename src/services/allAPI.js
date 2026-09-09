import apiServices from "../api/apiservices";

//all call for add resume, called by step components

export const addResumeAPI=async(reqBody)=>{
    return await apiServices("POST",`/allResumes`,reqBody)
}

//api call for gettingsingle resume, called by viewresume when page loaded

export const getSingleResumeAPI=async(id)=>{
    return await apiServices("GET",`/allResumes/${id}`,{})
}
//api call for download resume
export const downloadResumeAPI=async(reqBody)=>{
    return await apiServices("POST","/history",reqBody);
}


export const editResumeAPI=async(id,reqBody)=>{
    return await apiServices("PUT",`/allResumes/${id}`,reqBody)
}
export const getHistoryAPI=async()=>{
    return await apiServices("GET",'/history',{})
}

export const deleteHistoryAPI=async(id)=>{
    return await apiServices("DELETE",`/history/${id}`,{})
}