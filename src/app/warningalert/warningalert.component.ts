import { Component } from '@angular/core';

@Component ({
    selector:'app-warning',
    templateUrl: "./warningalert.component.html",
    styleUrls: ["./warningalert.component.css"]
})

export class WarningComponent {

    username = "";
    servers = ['TestServer1', 'TestServer2'];
    serverName = "TestServer?"
    allowNewServer = "true";
    usernameCreationStatus = "Please create ";
    serverCreated = false;
    buttonStatus = true;
    log = [];
    
    toggleDisplay() {
       this.buttonStatus = !this.buttonStatus;
       this.log.push(this.log.length + 1);
    }

    onCreationUsername () {
    		this.serverCreated = true;
            this.servers.push(this.serverName);
            this.usernameCreationStatus = "Username " + this.username + " has been created with server name " + this.serverName;
            this.username = "";
    }
    usernameCreation(event: Event ) {
        this.username = (<HTMLInputElement>event.target).value;
    }
    
}