import useAxiosInstance from "../useAxiosInstance";

const useAppointments = () => {
  const instance = useAxiosInstance();

  const createAppointment = async (data) => {
    try {
      const response = await instance.post('/appointments', data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getAppointmentsByPatient = async (patientId) => {
    try {
      const response = await instance.get(`/appointments/patient/${patientId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getAppointmentsByDoctor = async (doctorId) => {
    try {
      const response = await instance.get(`/appointments/doctor/${doctorId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const deleteAppointment = async (appointmentId) => {
    try {
      const response = await instance.delete(`/appointments/${appointmentId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { createAppointment, getAppointmentsByPatient, getAppointmentsByDoctor, deleteAppointment };
};

export default useAppointments;
