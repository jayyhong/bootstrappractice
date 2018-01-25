import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data: any;

  constructor() {
    this.data = [
      {
        title: "Disney",
        description: "I like cheese"
      }, 
      {
        title: "Fox",
        description: "I like cheese"
      }, 
      {
        title: "HP",
        description: "I like cheese"
      }, 
      {
        title: "Jay's Cool",
        description: "I like cheese"
      }, 
      {
        title: "What's up?",
        description: "I like cheese"
      },
      {
        title: "Woah",
        description: "I like cheese"
      }, 
      {
        title: "Wow",
        description: "I like cheese"
      }, 
      {
        title: "Hi",
        description: "I like cheese"
      }, 
      {
        title: "Holy shit",
        description: "I like cheese"
      }, 
      {
        title: "Drink",
        description: "I like cheese"
      }];
  }

}
