const todo = [];
let input =  prompt('What would you like to do?');
while (input !== 'quit' && input !== 'q') {
  if (input === 'new'){
    let task = window.prompt('Enter new todo:');
    todo.push(task);
    console.log(`${task} added to the list`);
  } else if (input === 'list') {
    console.log('**********');
    for (let i = 0; i < todo.length; i++){
      console.log(`${i}: ${todo[i]}`);
    }
    console.log('**********');
  } else if (input === 'delete') {
    let del = prompt('Enter index of todo to delete:');
    const index = parseInt(del)
    if (!Number.isNaN(index)) {
      if (index < todo.length){
        todo.splice(del, 1);
        console.log('Todo deleted');
      } else {
        console.log('Not a valid index.')
      }
    } else {
      console.log('Not a valid index.')
    }
  }
  input =  prompt('What would you like to do?');
}
console.log('OK YOU QUIT THE APP')