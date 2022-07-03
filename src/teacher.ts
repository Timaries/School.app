export interface Teacher {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  subject: string[];
  classes: { studentsList: string[]; studentsCount: number };
}

export let teacherArray: Teacher[] = [
  {
    id: 44,
    name: "Mariam",
    surname: "Gogia",
    age: 46,
    email: "something@gmail.com",
    subject: ["Math"],
    classes: { studentsList: ["Giorgi Maisuradze"], studentsCount: 1 },
  },
];
