import axios from "axios";
// import api from "../config/AxiosConfig";

const EMPLOYEE_BASE_URL = "/employee";
const api = axios.create({
  withCredentials: true,
});

class EmployeeService {
  getEmployees() {
    api
      .get(EMPLOYEE_BASE_URL)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

    return api.get(EMPLOYEE_BASE_URL);
  }

  createEmployee(employee) {
    return api.post(EMPLOYEE_BASE_URL, employee);
  }

  getEmployeeById(employeeId) {
    return api.get(EMPLOYEE_BASE_URL + "/" + employeeId);
  }

  deleteEmployee(employeeId) {
    return api.delete(EMPLOYEE_BASE_URL + "/" + employeeId);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();
