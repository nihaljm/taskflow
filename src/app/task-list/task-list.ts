import { Component, signal, computed } from '@angular/core';

export interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = signal<Task[]>([]);
  count = computed(() => this.tasks().length);

  add(task: Task) {
    this.tasks.update(items => [...items, task]);
  }

  addOnClick() {
    const id = this.count() + 1;
    this.add({ id, title: `Tâche ${id}` });
  }

  clear() {
    this.tasks.set([]);
  }
}