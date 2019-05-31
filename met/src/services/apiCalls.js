import axios from 'axios';
const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/';

const getDepartmentsDatas = () => axios.get(`${BASE_URL}departments`);

const getDepartments = async () => {
  const {
    data: { departments },
  } = await getDepartmentsDatas();
  return departments;
};

const getObjectsDatasByDepartment = departmentId =>
  axios.get(`${BASE_URL}objects?departmentIds=${departmentId}`);

const getObjectsByDepartment = async departmentId => {
  const { data } = await getObjectsDatasByDepartment(departmentId);
  return data;
};

const getObjectDatas = objectId => axios.get(`${BASE_URL}objects/${objectId}`);

const getObject = async objectId => {
  const { data } = await getObjectDatas(objectId);
  return data;
};

export { getDepartments, getObjectsByDepartment, getObject };
