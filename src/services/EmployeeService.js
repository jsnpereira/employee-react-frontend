import axios from "axios";

const EMPLOYEE_BASE_URL = "http://localhost:8080/api/employee";

class EmployeeService {
  handleError = (error) => {
    if (error === undefined || error.response === undefined) {
      throw new Error("Server error");
    } else {
      throw new Error(error.response.data.message);
    }
  };

  getHeader = () => {
    let config = {
      Headers: {
        "cache-Control": "no-cache",
        "Accept-Language": "en",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    return config;
  };

  getEmployees() {
    return axios.get(EMPLOYEE_BASE_URL, this.getHeader());
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_URL, employee, this.getHeader());
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_BASE_URL + "/" + employeeId, this.getHeader());
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_BASE_URL + "/" + employeeId, this.getHeader());
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();
