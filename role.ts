interface Role {
    id: number;           // SERIAL PRIMARY KEY
    title: string;        // VARCHAR(30) UNIQUE NOT NULL
    salary: number;       // DECIMAL NOT NULL
    departmentId: number; // INTEGER NOT NULL to hold reference to department role belongs to
}

const role: Role = {
    id: 1,
    title: "Software Engineer",
    salary: 80000,
    departmentId: 2
};

console.log(role);


class Role {
    id: number;
    title: string;
    salary: number;
    departmentId: number;

    constructor(id: number, title: string, salary: number, departmentId: number) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId;
    }
}

// Example of creating a Role instance
const roleInstance = new Role(1, "Software Engineer", 80000, 2);
console.log(roleInstance);