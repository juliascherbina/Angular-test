import { Component } from '@angular/core';
import { PasswordService } from './password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PasswordService]
})
export class AppComponent {
  title = 'Angular-test';
  password: string = "";
  strenght: string = '';
  constructor(private passwordService: PasswordService){

  }

  onPasswordChange() {
    this.strenght = this.passwordService.getPasswordStrength(this.password)
    
  }

}

