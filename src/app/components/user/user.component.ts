import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../../data/dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  randomIndex = this.generateRandomNumber();

  //Propaga a informação para todos os componentes que utilizam esse dado.
  selectedUser = signal(DUMMY_USERS[this.randomIndex]);

  get imagePath() {
    return 'assets/users/' + this.selectedUser().avatar;
  }

  onSelectUser() {
    this.randomIndex = this.generateRandomNumber();
    this.selectedUser.set(DUMMY_USERS[this.randomIndex]);
  }

  private generateRandomNumber () : number {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

}
