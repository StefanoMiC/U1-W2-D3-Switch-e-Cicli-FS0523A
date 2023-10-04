const prezzo = 30;

if (prezzo >= 30) {
  console.log("Il prezzo è giusto");
} else {
  console.log("Il prezzo è sbagliato");
}

const student = {
  name: "Mario",
  surname: "Super",
  exams: [{ rate: 50 }, { rate: 25 }, { rate: 10 }]
};

console.log(student);
console.log("IS ARRAY?", Array.isArray(student.exams));
console.log("IS ARRAY?", Array.isArray(student.exams[1]));

const lastStudentExam = student.exams[student.exams.length - 1];
console.log(lastStudentExam);

if (lastStudentExam.rate > 20) {
  console.log("non malaccio ma potevi fare meglio");
} else if (lastStudentExam.rate >= 10) {
  console.log("mi sa che ti tocca l'esame orale");
} else {
  console.log("esame fallito");
}
