import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_material';
  notification=0;
  showSpinner=false;
  opened=false;

  log(state: any){
    console.log(state); 
  }
  loadData(){
    this.showSpinner = true;
    setTimeout(() => this.showSpinner = false, 5000);
  }
}
