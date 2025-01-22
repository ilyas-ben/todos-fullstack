import { Directive, effect, ElementRef, inject, input, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightDoneTodo]',
  standalone: true
})
export class HighlightDoneTodoDirective  {

  /// ila madernach le !, aygol 'ou ila l user mainputach'

  isCompleted = input(false);

  constructor(private el: ElementRef) { }

  stylesEffect = effect(() => {
    if (/* this.el.nativeElement.checked */ this.isCompleted()) {
      this.el.nativeElement.style.backgroundColor = "rgb(208, 255, 0)";
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = "gray";
      console.log("i'm checked !!!")
    }
    else {
      this.el.nativeElement.style.backgroundColor = "white";
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = "black";
    }
  })


}
