import { Component } from '@angular/core';

@Component ({
    selector:'app-warning',
    templateUrl: "./warningalert.component.html",
    styles: [
      `
        p {
            padding: 20px;
            background-color: green;
            border: 2px solid darkgreen;
        }   
    `
    ]
})

export class WarningComponent {

    username = "";
    allowNewServer = "true";
    usernameCreationStatus = "Please create ";
    
    onCreationUsername () {
            this.usernameCreationStatus = "Username " + this.username + " has been created";
            this.username = "";
    }
    
    usernameCreation(event: Event ) {
        this.username = (<HTMLInputElement>event.target).value;
    }
    
}