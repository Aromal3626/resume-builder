import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

//resume add api - called by UserInput, when finished button clickedd
export const addResumeAPI = async (resume)=>{
   return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}

//get resume api
export const getResumeAPI = async (id)=>{
   return await commonAPI(`${ServerURL}/resume/${id}`,"GET",{})
}
//update resume api
export const updateResumeAPI = async (id,resume)=>{
   return await commonAPI(`${ServerURL}/resume/${id}`,"PUT",resume)
}
//add history api
//get hidtory api
//remove history api