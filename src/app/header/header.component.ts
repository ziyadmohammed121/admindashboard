import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()onMenuBtnClick=new EventEmitter
  menubuttonClicked(){

    // to occur an usedefined event
    this.onMenuBtnClick.emit()
    


  }
  

}
