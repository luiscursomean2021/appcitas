import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { ListadoChatsComponent } from './components/listado-chats/listado-chats.component';

const routes:Routes = [
    {
        path:"",
        component:ListadoChatsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }