import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  users: any;

  constructor(
    private chatService: ChatServiceService,
  ) {
    this.users = [];
  }

  private getAllUsers() {
    this.chatService.getAll().subscribe((response: any) => {
      console.log("test");
      console.log(response);
      this.users = response;
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
}
