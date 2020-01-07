import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TarefasService } from '../../services/tarefas.service';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.scss'],
})
export class TarefaFormPage implements OnInit {

  tarefaForm: FormGroup;
  pageTitle: string = '...';
  tarefaId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private tarefasService: TarefasService) {
  }

  ngOnInit() {
    this.createForm();
    this.init();
  }

  init(): void {
    const tarefaId = this.route.snapshot.paramMap.get('id');
    if (!tarefaId) {
       this.pageTitle = 'Nova Tarefa';
       return;
    }
    this.tarefaId = tarefaId;
    this.pageTitle = 'Editar Tarefa';
    this.tarefasService
    .get(tarefaId)
    .pipe(take(1))
    .subscribe(({ title, done }) => {
       this.tarefaForm.get('title').setValue(title);
       this.tarefaForm.get('done').setValue(done);
    });
  }

  private createForm(): void {
     this.tarefaForm = this.fb.group({
       title: ['', [Validators.required, Validators.minLength(3)]],
       done: [false]
     });
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'salvando...'
    });
    try {
      const tarefa = !this.tarefaId ? 
      await this.tarefasService.create(this.tarefaForm.value) :
      await this.tarefasService.update({
        id: this.tarefaId,
        ...this.tarefaForm.value
      });     
      this.navCtrl.navigateBack('/tarefas');
    } catch (error) {
      await this.overlayService.toast({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }

}
