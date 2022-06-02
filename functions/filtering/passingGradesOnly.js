//filters only passing grades
//passing >= 70

const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

//function expression using anonymous function
// const passingGrades = grades.filter(function(grade) {
//   return grade >= 70;
// });

//convert the anon func into arrow func
//note the implicit return
const passingGrades = grades.filter(grade => grade >= 70);

console.log("The passing grades are: ", passingGrades);
