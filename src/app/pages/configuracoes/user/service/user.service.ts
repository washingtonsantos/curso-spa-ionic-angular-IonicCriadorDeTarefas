import { Injectable } from '@angular/core';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { AuthService } from 'src/app/core/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/core/models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Firestore<User> {
  user: firebase.User;
  authState$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    db: AngularFirestore) {
    super(db);
    this.authState$ = this.afAuth.authState;
   }

   async updateUserEmail(email: string): Promise<void> {
     await this.user.updateEmail(email);
   }
}
