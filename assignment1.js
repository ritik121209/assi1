const students = [
  { name: "Ravi", marks: 85, subject: "Math" },
  { name: "Aman", marks: 32, subject: "Science" },
  { name: "Neha", marks: 76, subject: "Math" },
  { name: "Priya", marks: 55, subject: "English" },
  { name: "Rohit", marks: 91, subject: "Science" },
  { name: "Ankit", marks: 28, subject: "Math" },
  { name: "Simran", marks: 64, subject: "English" },
  { name: "Karan", marks: 49, subject: "Science" },
  { name: "Pooja", marks: 38, subject: "English" },
  { name: "Vikas", marks: 72, subject: "Math" }
];

// Pass students
const passStudents = students.filter(s => s.marks >= 40);

// Fail students
const failStudents = students.filter(s => s.marks < 40);

// Average marks
const avgMarks = students.reduce((sum, s) => sum + s.marks, 0) / students.length;

// Topper
const topper = students.reduce((top, s) => s.marks > top.marks ? s : top);

// Group by subject
const groupBySubject = students.reduce((acc, s) => {
  if (!acc[s.subject]) acc[s.subject] = [];
  acc[s.subject].push(s);
  return acc;
}, {});

console.log("Pass:", passStudents);
console.log("Fail:", failStudents);
console.log("Average:", avgMarks);
console.log("Topper:", topper);
console.log("Grouped:", groupBySubject);
