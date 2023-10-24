import useAxiosInstance from "../useAxiosInstance";

const useUsers = ()=>{

    const instance = useAxiosInstance();

    const signUpUser = async(user)=>{
        try{
            const response = await instance.post('/users/signup',user);
            return response.data;
        }catch(error){
            console.error(error);
            throw error;
        }
    }

    const signInUser = async(user)=>{
        try{
            const response = await instance.post('/users/signin',user);
            return response.data;
        }catch(error){
            console.error(error.message);
            throw error;
        }
    }

    return {signUpUser, signInUser}
}

export default useUsers;