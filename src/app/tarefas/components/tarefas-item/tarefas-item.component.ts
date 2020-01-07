import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../models/tarefas.model';

@Component({
  selector: 'app-tarefas-item',
  templateUrl: './tarefas-item.component.html',
  styleUrls: ['./tarefas-item.component.scss'],
})
export class TarefasItemComponent {

  @Input() tarefa: Tarefa;
  @Output() done = new EventEmitter<Tarefa>();
  @Output() update = new EventEmitter<Tarefa>();
  @Output() delete = new EventEmitter<Tarefa>();
}
