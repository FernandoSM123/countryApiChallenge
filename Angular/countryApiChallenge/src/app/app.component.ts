import { Component, AfterViewInit,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  title = 'countryApiChallenge';
  @ViewChild('mainContainer') mainContainer: ElementRef;
  @ViewChild('btnChangeMode') changeMode: ElementRef;

  ngAfterViewInit(): void {
    //change to dark/light mode on click
    this.changeMode.nativeElement.addEventListener("click",() => {
      this.mainContainer.nativeElement.classList.toggle("darkMode");
    });
  }
}
