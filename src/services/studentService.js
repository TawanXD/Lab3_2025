import axios from 'axios';

export const getStudents = async () => {
  const url = 'https://dv-student-backend-2019.appspot.com/students';
  const response = await axios.get(url);
  return response.data;
};