// Tulis function manageStudents di sini
function manageStudents(students, options) {
     let { action, newStudent } = options;
  
  // Step 1: Gabungkan student baru (kalau ada) ke array asli
  let allStudents = newStudent ? [...students, newStudent] : [...students];
  
  // Step 2: Hitung total dan rata-rata
  let totalStudents = allStudents.length;
  let totalGrade = allStudents.reduce((sum, student) => sum + student.grade, 0);
  let averageGrade = totalGrade / totalStudents;
  
  // Step 3: Cari student dengan nilai tertinggi
  let topStudent = allStudents.reduce((top, student) => 
    student.grade > top.grade ? student : top
  );
  
  // Step 4: Kelompokkan student berdasarkan subject
  let bySubject = allStudents.reduce((groups, student) => {
    let subject = student.subject;
    if (!groups[subject]) {
      groups[subject] = [];
    }
    groups[subject].push(student);
    return groups;
  }, {});
  
  // Step 5: Hitung statistik per subject (count & average)
  let statistics = {};
  for (let subject in bySubject) {
    let studentsInSubject = bySubject[subject];
    let count = studentsInSubject.length;
    let sum = studentsInSubject.reduce((total, s) => total + s.grade, 0);
    let average = sum / count;
    
    statistics[subject] = { count, average };
  }
  
  return {
    totalStudents,
    averageGrade,
    topStudent,
    bySubject,
    statistics
  };
}

let students = [
  { id: 1, name: "Alice", grade: 85, subject: "Math" },
  { id: 2, name: "Bob", grade: 92, subject: "Science" },
  { id: 3, name: "Charlie", grade: 78, subject: "Math" }
];

let result = manageStudents(students, {
  action: "analyze",
  newStudent: { id: 4, name: "Diana", grade: 88, subject: "Science" }
});
console.log(result);