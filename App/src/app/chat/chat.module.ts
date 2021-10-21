import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule } from '@angular/forms';
import { ChatService } from './services/chat.service';
import { ListadoChatsComponent } from './components/listado-chats/listado-chats.component';


@NgModule({
  declarations: [
    ChatComponent,
    ListadoChatsComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule { }
