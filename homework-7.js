import { socialMediaComments } from './comments.js';

//Уровент 1:
//2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = filteredNumbers.filter(num => num >=5);
console.log(newArray);

//3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const furniture = [`Wardrobe`, `nightstand`, `bed`, `chair`, `armchair`, `sofa`, `shelf`];
const hasBed = furniture.includes(`bed`);
console.log(hasBed);

//4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

function reverseArray(array) {
  array.reverse();
}
reverseArray(numbers);
reverseArray(furniture);

//Уровень 2:
//7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const filteredCommentsByComEmails = socialMediaComments.filter(comment => comment.email.includes(".com"));
console.log(filteredCommentsByComEmails);

//8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const updatedComments = socialMediaComments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log(updatedComments)

//9. Перебрать массив, что бы объекты состояли только из айди и имени

const simplifiedComments = socialMediaComments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(simplifiedComments);

//10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const validatedComments = socialMediaComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log(validatedComments);

//Уровень 3:
//11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emailListByReduce = socialMediaComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailListByReduce);

const emailListByMap = socialMediaComments.map(comment => comment.email);
console.log(emailListByMap);

//12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailToString = emailListByMap.toString();
const emailStringByJoin = emailListByMap.join(", ");