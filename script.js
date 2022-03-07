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
const Storage = new StorageManager("todo_list");
const Task = new TaskManager(".todo_list", function (id) {
  Storage.removeItem(id);
  Storage.editItem(id);
});

const items = Storage.getItems();
for (let id in items) {
  Task.addItem(id, items[id]);
}

document.getElementById("todo_form").onsubmit = function (event) {
  const value = Form.getValue(event);
  const id = Storage.addItem(value);
  Task.addItem(id, value);
};
