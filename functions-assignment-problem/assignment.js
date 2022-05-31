
const sayHello = name => console.log('Hi ' + name);



const sayHello2 = (phrase, name) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi Hard-coded');
const sayHello4 = name => 'Hi' + name;

const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);



const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(() => {
  console.log('All not empty!')
}, 'hello', '12', 'andrew');




sayHello();