import { Injectable } from '@angular/core';

//don't save

@Injectable()
export class TodoListServices {
 
 
  todoList = [
    {
      label: "Cras justo odio",
      completed: true
    },
    {
      label: "Dapibus ac facilisis in",
      completed: false
    },
    {
      label: "Morbi leo risus",
      completed: true
    },
    {
      label: "Porta ac consectetur ac",
      completed: true
    },
    {
      label: "Vestibulum at eros",
      completed: true
    },
    {
      label: "Nam eget urna a nibh luctus vulputate",
      completed: true
    },
    {
      label: "In facilisis enim eu augue",
      completed: true
    },
    {
      label: "Curabitur dignissim eros eu ",
      completed: true
    },
    {
      label: "Donec vitae velit sit amet lacus",
      completed: true
    },
    {
      label: "Nullam quis odio ultrices.",
      completed: true
    },
  ];

  addTodoData = function(label, completed) {
      this.todoList.unshift(
        {
          label: label,
          completed: completed || false
        }
      );
      
  };

  updateTodoData = function() {

  };

  deleteTodoData = function() {

  }
}