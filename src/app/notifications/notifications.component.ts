import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
display: boolean = false;
message: string;
  constructor(private notifier: NotificationService) {
    notifier.emitter.subscribe(
      data => {
        this.display = data.display;
        this.message = data.message;
      }
    );
   }
   removeMessage(){
     this.display = false;
     this.message = "";
   }

  ngOnInit() {
  }

}
