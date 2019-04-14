export const selectUser=(user)=>{
    console.log("user : ", user.id);
    return{
        type:"USER_SELECTED",
        payload:user
    };
};