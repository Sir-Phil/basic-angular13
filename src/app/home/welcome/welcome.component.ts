import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  welcomeTitle: string = "Wecome To Sales Box"

  constructor() { }

  ngOnInit(): void {
  }

}
