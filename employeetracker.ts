

import { Model, DataTypes } from 'sequelize';



class Department {
    
    constructor(id: number, name: string) {
        
    }

    public displayEmployees(): void {
        
            console.log("No employees to display.");

            return;
        }

        public calculateAverageSalary(): void {
            {
                console.log("No employees to calculate average salary.");
                console.log(`Average Salary: $`);
                return;
            }

    try {
                const department = new Department(1, "Human Resources");
                console.log(department); 

                 // This will throw an error
    const invalidDepartment = new Department(2, "This name is definitely longer than thirty characters.");
} catch (error) {
    
}

interface Role {
    id: number; // SERIAL PRIMARY KEY
    title: string; // VARCHAR(30) UNIQUE NOT NULL
    salary: number; // DECIMAL NOT NULL
    departmentId: number; // INTEGER NOT NULL
}

console.log();

class Role extends Model {
    public id!: number; // This will be the primary key
    public title!: string;
    public salary!: number;
    public departmentId!: number; // Foreign key reference to department
  }

  // Initialize the model

  

  

            
        
        
            

   

    







}
}

export default Role;
