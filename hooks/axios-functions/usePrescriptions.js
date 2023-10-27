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
            throw  new Error(error);
        }
    }

    const getAllPrescriptions = async()=>{
        try{
            const response = await instance.get('/prescription/');
            return response.data;
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    }

    const getPrescriptionById = async(id)=>{
        try{
            const response = await instance.get(`/prescription/${id}`);
            return response.data;
        }catch(error){  
            console.log(error);
            throw new Error(error);
        }
    }

    return {testBackend, getAllPrescriptions, getPrescriptionById};
}

export default usePrescriptions;