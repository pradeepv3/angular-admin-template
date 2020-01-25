import { Component, Input } from "@angular/core";

import { TodoListServices } from "../../services/todo-list.services";

@Component({
  selector: "todolist",
  templateUrl: "./todolist.component.html"
})
export class TodoListComponent {
  @Input() wrapperClass: any;
  todolistData: any;
  todo: any = {};
  constructor(private todolistServices: TodoListServices) {
    this.todolistData = todolistServices.todoList;
  }

  onSubmit() {
    if (this.todo.item !== "") {
      this.todolistServices.addTodoData(this.todo.item, false);
    }
  }

  onItemCompleted(itemId) {
    this.todolistData[itemId].completed
      ? (this.todolistData[itemId].completed = false)
      : (this.todolistData[itemId].completed = true);
  }

  onItemDeleted(itemId) {
    this.todolistData.splice(itemId, 1);
  }
}
