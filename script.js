/*
 1. Uzdevuma formulējums. Kam jābūt rezultātā?
 
 Uzdevums:
 1)uzspiežot pogu veidojas jauns uzdevums:
 -Jānolasa input lauka vērtība;
 -Ievadīt lauka vērtību uzdevumā sarakstā <div class ="todo_list"
2) edit pogas funkcionalitāte
3) elementa izdzēšana pie "remove" pogas uzspiešanas
4) ieraksts lokālajā atmiņā
 */

/*

-Form Manager - atbildīgs par input formu
-Task Manager - pievienot uzdevumus un rediģē tos
-Storage Manager - saglabā info no Task Manager un saglabā lokālajā atmiņā
*/

const Form = new FormManager();
const Task = new TaskManager(".todo_list");
const Storage = new StorageManager(".todo_list");

for (let task of Storage.data) {
  Task.addItem(task);
}

document.getElementById("todo_form").onsubmit = function (event) {
  const value = Form.getValue(event);
  Task.addItem(value);
  Storage.addItem(value);
};
