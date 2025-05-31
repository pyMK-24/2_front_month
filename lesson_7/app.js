let employees = [
{
  name: "Иван",
  age: 30,
  gender: "мужской",
  phone: {
    home: "123-45-67", 
    mobile: "89012345678"
  }
},
{
  name: "Мария",
  age: 25,
  gender: "женский",
  phone: {
    home: "234-56-78", 
    mobile: "89123456789"
  }
},
{
  name: "Алексей",
  age: 28,
  gender: "мужской",
  phone: {
    home: "345-67-89", 
    mobile: "89234567890"
  }
},
{
  name: "Андрей",
  age: 25,
  gender: "мужской",
  phone: {
    home: "234-56-78", 
    mobile: "89232567891"
  }
},
{
  name: "Аня",
  age: 27,
  gender: "женский",
  phone: {
    home: "123-45-67", 
    mobile: "89244577893"
  }
},
];
employees.push(
{
  name: "Александр",
  age: 26,
  gender: "мужской",
  phone: {
    home: "123-49-67", 
    mobile: "89012365679"
  }
},
);
employees.unshift(
{
  name: "София",
  age: 23,
  gender: "женский",
  phone: {
    home: "123-49-67", 
    mobile: "89012365679"
  }
},
);
employees_f = employees.filter(employee => employee.age > 25);
employees_m = employees.map(employee => employee.name);
// console.log(employees_m);
// console.log(employees_f);
for (let employee of employees) {
  console.log(
    'Имя:', employee.name,
    ', Возраст:', employee.age,
    ', Пол:', employee.gender,
    ', Домашний:', employee.phone.home,
    ', Сотовый:', employee.phone.mobile
  );
}