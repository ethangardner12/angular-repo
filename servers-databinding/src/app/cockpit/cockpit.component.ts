import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  @Output('srvCreated') serverCreated = new EventEmitter<{
    serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    blueprintName: string, blueprintContent: string}>();
  
  constructor() {}

  ngOnInit(){}

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: contentInput.value
    });
  }
}
