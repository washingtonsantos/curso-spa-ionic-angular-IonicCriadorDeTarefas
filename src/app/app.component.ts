import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

 pages: { url: string; direction: string; icon: string; text: string }[];
 user: firebase.User;

  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.pages = [
         { url: '/tarefas', direction: 'back' , icon: 'list-box', text: 'Tarefas' },
         { url: '/tarefas/new', direction: 'forward' , icon: 'add', text: 'Nova Tarefa' },
         { url: '/configuracoes', direction: 'forward' , icon: 'cog', text: 'Configurações' },
         { url: '/politica-de-privacidade', direction: 'forward' , icon: 'contrast', text: 'Politica de Privacidade' }
       ];

    this.authService.authState$.subscribe(user => this.user = user);

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
