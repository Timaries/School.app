import { Student, studentArray } from "./students";
import { Subject } from "./subject";
import { Teacher, teacherArray } from "./teacher";
import { subjectArray } from "./subject";

let findTeacher = function (student: Student) {
  teacherArray.forEach((teacher) => {
    student.subject.forEach((sub) => {
      if (teacher.subject.includes(sub.subName)) {
        teacher.classes = {
          studentsList: [
            ...teacher.classes.studentsList,
            `${student.name} ${student.surname}`,
          ],
          studentsCount: teacher.classes.studentsCount++,
        };
      } else {
        console.log("Not Found");
      }
    });
  });
};

let subPoint = function (student: Student, subject: string, point: number) {
  if (student.subject.every((el) => el.subName !== subject)) {
    student.subject.push({ subName: subject, point });
  } else {
    student.subject.forEach((sub) => {
      if (sub.subName === subject) {
        sub = { ...sub, point };
      }
    });
  }
};

// let addTeacher = function (teacher: Teacher) {
//   let newPerson = [
//     {
//       id: 43,
//       name: "Nino",
//       surname: "Beridze",
//       age: 56,
//       email: "something@gmail.com",
//       subject: ["English"],
//       classes: { studentsList: ["Ana Maisuradze"], studentsCount: 1 },
//     },
//   ];
//   newPerson.push(teacher);
//   if (newPerson.subject != this.subject.name ) {
//     this.newPerson.subject.push({subjectArray})
//   }
// };

let studentFinal = function (student: Student, point: number) {
  if (point >= 5) {
    console.log("Failed");
  } else {
    console.log("Passed the Exams");
  }
};

let easyHard = function (subject: Subject, lvl: number) {
  if (subject.lvl >= 4) {
    console.log("Easy");
  } else if (subject.lvl >= 8) {
    console.log("Average");
  } else {
    console.log("Hard");
  }
};

let checkType = function <T>(arg: T) {
  if ("classes" in arg) {
    console.log("Teacher");
  } else {
    console.log("Student");
  }
};

let checkSubject = function <T>(arg: T) {
  if ("from" in arg) {
    console.log(subjectArray);
  } else if ("name" in subjectArray === "subject" in studentArray){
    {
      console.log("lvl" in subjectArray);  
    }
  }
};
