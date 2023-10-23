import useAxiosInstance from "../useAxiosInstance";


const usePrescriptions = ()=>{

    const instance = useAxiosInstance();

    const testBackend = async()=>{
        try{
            const response = await instance.get('/hello');
            console.log("response is: ", response.data);
            return response.data;
        }catch(error){
            console.error(error);
        }
    }

    return {testBackend};
}

export default usePrescriptions;