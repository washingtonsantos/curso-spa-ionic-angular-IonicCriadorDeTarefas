import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailProvider } from 'src/app/core/provider/email/email';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  public formEmail: FormGroup;
subject: string;
body: string;
to: string;

  constructor(
    private navCtrl: NavController,
    private emailComposer: EmailComposer,
    private _EMAIL: EmailProvider,
    private _FORM: FormBuilder)
    {
      this.formEmail = this._FORM.group({
        to: ['washingtonsilvasan@gmail.com', Validators.required],
        cc: ['', Validators.required],
        bcc: [''],
        subject: ['', Validators.required],
        message: ['', Validators.required]
     });
    }

  ngOnInit() {
   
  }

  sendMessage() {

    let to: string = this.formEmail.controls['to'].value,
    cc: string = this.formEmail.controls["cc"].value,
    bcc: string	= this.formEmail.controls["cc"].value,
    subject: string	= this.formEmail.controls["subject"].value,
    message: string	= this.formEmail.controls["message"].value;


    let email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true,
      app: 'Gmail'
    }
    this._EMAIL.sendEmail('washingtonsilvasan@gmail.com', cc, bcc, '', subject, message);
  }

}
