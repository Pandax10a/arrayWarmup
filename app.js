let student_name = `sky`;
let student_gpa = 3.3;
let honor_role = false;

if (honor_role) {
    console.log(`${student_name} is an honor role student`);
} else {
    console.log(`${student_name} should try harder`);
}

if (student_gpa <= 1.9) {
    console.log(`F`);
} else if (student_gpa <= 2.4) {
    console.log(`D`);
} else if (student_gpa <= 2.9) {
    console.log(`C`);
} else if (student_gpa <= 3.4) {
    console.log(`B`);
} else if (student_gpa <= 4.0) {
    console.log(`A`);
}

let student_names = [`apple`, `nutella`, `green`];
let student_gpas = [3.0, 2.9, 3.5];
let honor_roles = [false, false, true];

if ((honor_roles[0]) && (honor_roles[0]) && (honor_roles[0])) {
    console.log(`all 3 student is honor role`);
} else if ((honor_roles[0] || honor_roles[1] || honor_roles[2])) {
    console.log(`we got atleast 1 honor role`)
} else {
    console.log(`try harder`);
}

student_names.push(`mehh`);
student_gpas.push(4.0);
honor_roles.push(true);

let last_student = student_names.pop();
let last_student_gpa = student_gpas.pop();
let last_student_honor = honor_roles.pop();

if ((last_student_gpa > student_gpas[0]) && (last_student_gpa > student_gpas[1]) && (last_student_gpa > student_gpas[2])) {
    console.log(`${last_student} is best student`);
}