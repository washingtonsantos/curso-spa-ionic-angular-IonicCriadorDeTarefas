import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/core/services/overlay.service'
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Tarefa } from '../../models/tarefas.model';
import { TarefasService } from '../../services/tarefas.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tarefas-list',
  templateUrl: './tarefas-list.page.html',
  styleUrls: ['./tarefas-list.page.scss'],
})
// export class TarefasListPage implements OnInit {

//   tarefas$: Observable<Tarefa[]>;

//     constructor(
//     private navCtrl: NavController , 
//     private overlayService: OverlayService,
//     private tarefasService: TarefasService
//     ) { }

//   async ngOnInit() {
//     const loading = await this.overlayService.loading();
//     this.tarefas$ = this.tarefasService.getAll();
//     this.tarefas$.pipe(take(1)).subscribe(tarefas => loading.dismiss());
//   }

//    onUpdate(tarefa: Tarefa): void {
//     this.navCtrl.navigateForward(`/tarefas/edit/${tarefa.id}`);
//   }

//   async onDelete(tarefa: Tarefa): Promise<void> {
//     await this.overlayService.alert({
//       message: `Você deseja realmente deletar a Tarefa "${tarefa.title}"?`,
//        buttons: [
//          {
//             text: 'Sim',
//             handler: async () => {
//               await this.tarefasService.delete(tarefa);
//               await this.overlayService.toast({
//                 message: `Tarefa "${tarefa.title}" deletada!`
//               });
//             }
//          },
//          'Não'
//        ]
//     });
//   }

//   async onDone(tarefa: Tarefa): Promise<void> {
//     const tarefaToUpdate = { ...tarefa, done: !tarefa.done };
//     await this.tarefasService.update(tarefaToUpdate);
//     await this.overlayService.toast({
//        message: `Tarefa "${tarefa.title}" ${tarefaToUpdate.done ? 'finalizada' : 'atualizada'}!`
//     });
//   }

// }

export class TarefasListPage {

  tarefas$: Observable<Tarefa[]>;

  constructor(
    private navCtrl: NavController , 
    private overlayService: OverlayService,
    private tarefasService: TarefasService
    ) { }

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.tarefas$ = this.tarefasService.getAll();
    this.tarefas$.pipe(take(1)).subscribe(tarefas => loading.dismiss());
  }

  onUpdate(tarefa: Tarefa): void {
    this.navCtrl.navigateForward(`/tarefas/edit/${tarefa.id}`);
  }

  async onDelete(tarefa: Tarefa): Promise<void> {
    await this.overlayService.alert({
      message: `Você deseja realmente deletar a Tarefa "${tarefa.title}"?`,
       buttons: [
         {
            text: 'Sim',
            handler: async () => {
              await this.tarefasService.delete(tarefa);
              await this.overlayService.toast({
                message: `Tarefa "${tarefa.title}" deletada!`
              });
            }
         },
         'Não'
       ]
    });
  }

  async onDone(tarefa: Tarefa): Promise<void> {
    const tarefaToUpdate = { ...tarefa, done: !tarefa.done };
    await this.tarefasService.update(tarefaToUpdate);
    await this.overlayService.toast({
       message: `Tarefa "${tarefa.title}" ${tarefaToUpdate.done ? 'finalizada' : 'atualizada'}!`
    });
  }

}
