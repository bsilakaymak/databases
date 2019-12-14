const employees = [
    { emp_name: 'Sila', salary: 1500, reports_to: 01 },
    { emp_name: 'Ayse', salary: 2500, reports_to: 01 },
    { emp_name: 'Fatma', salary: 2000, reports_to: 03 },
    { emp_name: 'Jane', salary: 5000, reports_to: 02 },
    { emp_name: 'John', salary: 1000, reports_to: 02 },
    { emp_name: 'Joe', salary: 4000, reports_to: 01 },
    { emp_name: 'Dilara', salary: 2000, reports_to: 04 },
    { emp_name: 'Jessica', salary: 2500, reports_to: 03 },
    { emp_name: 'Lauren', salary: 1200, reports_to: 05 },
    { emp_name: 'Elizabeth', salary: 1250, reports_to: 02 }
];
const departments = [
    { dept_no: 10, dept_name: 'Department1', manager: 01 },
    { dept_no: 11, dept_name: 'Department2', manager: 01 },
    { dept_no: 12, dept_name: 'Department3', manager: 01 },
    { dept_no: 13, dept_name: 'Department4', manager: 02 },
    { dept_no: 14, dept_name: 'Department5', manager: 02 },
    { dept_no: 15, dept_name: 'Department6', manager: 03 },
    { dept_no: 16, dept_name: 'Department7', manager: 03 },
    { dept_no: 17, dept_name: 'Department8', manager: 04 },
    { dept_no: 18, dept_name: 'Department9', manager: 05 },
    { dept_no: 19, dept_name: 'Department10', manager: 05 },

]
const projects = [
    { proj_name: 'project1', starting_date: '2020-01-26', ending_date: '2020-02-15' },
    { proj_name: 'project2', starting_date: '2020-02-16', ending_date: '2020-03-20' },
    { proj_name: 'project3', starting_date: '2020-03-21', ending_date: '2020-04-23' },
    { proj_name: 'project4', starting_date: '2020-04-25', ending_date: '2020-05-27' },
    { proj_name: 'project5', starting_date: '2020-05-29', ending_date: '2020-06-30' },
    { proj_name: 'project6', starting_date: '2020-06-30', ending_date: '2020-08-10' },
    { proj_name: 'project7', starting_date: '2020-08-20', ending_date: '2020-09-25' },
    { proj_name: 'project8', starting_date: '2020-09-27', ending_date: '2020-10-30' },
    { proj_name: 'project9', starting_date: '2020-11-05', ending_date: '2020-12-10' },
    { proj_name: 'project10', starting_date: '2020-12-12', ending_date: '2021-01-17' },
];

module.exports={
    projects, employees, departments
};