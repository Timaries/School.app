export interface Student {
  id: number;
  name: string;
  surname: string;
  age: number;
  class: number;
  subject: { subName: string; point: number }[];
}

export let studentArray: Student[] = [
  {
    id: 44,
    name: "Giorgi",
    surname: "Maisuradze",
    age: 12,
    class: 8,
    subject: [{ subName: "Chemisty", point: 7}]
  }
]