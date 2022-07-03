"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students_1 = require("./students");
const teacher_1 = require("./teacher");
const subject_1 = require("./subject");
let findTeacher = function (student) {
    teacher_1.teacherArray.forEach((teacher) => {
        student.subject.forEach((sub) => {
            if (teacher.subject.includes(sub.subName)) {
                teacher.classes = {
                    studentsList: [
                        ...teacher.classes.studentsList,
                        `${student.name} ${student.surname}`,
                    ],
                    studentsCount: teacher.classes.studentsCount++,
                };
            }
            else {
                console.log("Not Found");
            }
        });
    });
};
let subPoint = function (student, subject, point) {
    if (student.subject.every((el) => el.subName !== subject)) {
        student.subject.push({ subName: subject, point });
    }
    else {
        student.subject.forEach((sub) => {
            if (sub.subName === subject) {
                sub = Object.assign(Object.assign({}, sub), { point });
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
let studentFinal = function (student, point) {
    if (point >= 5) {
        console.log("Failed");
    }
    else {
        console.log("Passed the Exams");
    }
};
let easyHard = function (subject, lvl) {
    if (subject.lvl >= 4) {
        console.log("Easy");
    }
    else if (subject.lvl >= 8) {
        console.log("Average");
    }
    else {
        console.log("Hard");
    }
};
let checkType = function (arg) {
    if ("classes" in arg) {
        console.log("Teacher");
    }
    else {
        console.log("Student");
    }
};
let checkSubject = function (arg) {
    if ("from" in arg) {
        console.log(subject_1.subjectArray);
    }
    else if ("name" in subject_1.subjectArray === "subject" in students_1.studentArray) {
        {
            console.log("lvl" in subject_1.subjectArray);
        }
    }
};
