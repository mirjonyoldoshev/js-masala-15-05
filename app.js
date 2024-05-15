// Todo obyekti uchun ma'lumotlarni olish
var todo = {
  name: prompt("Todo nomini kiriting:"),
  time: {
    hours: parseInt(prompt("Soatni kiriting:")),
    minutes: parseInt(prompt("Minutni kiriting:")),
    seconds: parseInt(prompt("Sekunndni kiriting:")),
  },
};

// Yaratilgan todo obyektini ishlatish
console.log("Sizning todoingiz:");
console.log("Nomi: " + todo.name);
console.log(
  "Vaqt: " + todo.time.hours + ":" + todo.time.minutes + ":" + todo.time.seconds
);
// Tayyor bo'lgan obyektni yaratish
var todo = {
  name: "Go to Najot Ta'lim",
  time: {
    hours: 12,
    minutes: 30,
    seconds: 20,
  },
};

// LocalStorage'da todos nomli arrayni olish
var todos = JSON.parse(localStorage.getItem("todos")) || [];

// Obyektni arrayga qo'shish
todos.push(todo);

// Arrayni LocalStorage'ga saqlash
localStorage.setItem("todos", JSON.stringify(todos));

// Show Todos tugmasi bosilganda todosni ekranga chiqarish
function showTodos() {
  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(function (todo) {
    console.log("Name: " + todo.name);
    console.log(
      "Time: " +
        todo.time.hours +
        ":" +
        todo.time.minutes +
        ":" +
        todo.time.seconds
    );
    console.log("---------------------");
  });
}

// Show Todos tugmasini bosish
showTodos(); // Todo obyektlari uchun ID generatori
function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// Todo obyektlari uchun ID qo'shish funktsiyasi
function addTodoWithId(todoList, todo) {
  todo.id = generateId();
  todoList.push(todo);
}

// Todo obyektlarini ID orqali qidirish
function findTodoById(todoList, id) {
  return todoList.find(function (todo) {
    return todo.id === id;
  });
}

// Todo obyektlarini ID orqali o'chirish
function deleteTodoById(todoList, id) {
  var index = todoList.findIndex(function (todo) {
    return todo.id === id;
  });
  if (index !== -1) {
    todoList.splice(index, 1);
  }
}

// Test uchun bir todo list yaratamiz
var todoList = [];

// Todo obyektlarini ID bilan qo'shamiz
addTodoWithId(todoList, {
  name: "Buy groceries",
  time: {
    hours: 10,
    minutes: 0,
    seconds: 0,
  },
});
addTodoWithId(todoList, {
  name: "Go for a run",
  time: {
    hours: 15,
    minutes: 30,
    seconds: 0,
  },
});

// Bir todo ni ID orqali topish va o'chirish
var todoId = todoList[0].id; // O'chirish uchun bir todo ID sini olish
var todoToDelete = findTodoById(todoList, todoId);
if (todoToDelete) {
  deleteTodoById(todoList, todoId);
}

// Yangilangan todo listni konsolga chiqaramiz
console.log(todoList);
// Todo obyektlari uchun ID generatori
function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// Todo obyektlari uchun ID qo'shish funktsiyasi
function addTodoWithId(todoList, todo) {
  todo.id = generateId();
  todoList.push(todo);
}

// Todo obyektlarini vaqt bo'yicha saralash
function sortTodosByTime(todoList) {
  todoList.sort(function (a, b) {
    // Vaqtni olish
    var timeA = a.time;
    var timeB = b.time;

    // Soatni, minutni va sekundni taqqoslash
    if (timeA.hours !== timeB.hours) {
      return timeA.hours - timeB.hours;
    }
    if (timeA.minutes !== timeB.minutes) {
      return timeA.minutes - timeB.minutes;
    }
    return timeA.seconds - timeB.seconds;
  });
}

// Test uchun bir todo list yaratamiz
var todoList = [];

// Todo obyektlarini ID bilan qo'shamiz
addTodoWithId(todoList, {
  name: "Buy groceries",
  time: {
    hours: 10,
    minutes: 0,
    seconds: 0,
  },
});
addTodoWithId(todoList, {
  name: "Go for a run",
  time: {
    hours: 15,
    minutes: 30,
    seconds: 0,
  },
});

// Todo listni vaqt bo'yicha saralash
sortTodosByTime(todoList);

// Yangilangan todo listni konsolga chiqaramiz
console.log(todoList);
