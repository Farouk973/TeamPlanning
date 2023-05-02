import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomPagination]'
})
export class CustomPaginationDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
 pageIndex:any;
  ngOnInit() {
     // Get the container element and the page links
    const container = this.el.nativeElement.querySelector('.mat-paginator-container');
    const pageLinks = container.querySelectorAll('.mat-paginator-navigation');

    // Create new page links
    for (let i = 1; i <= 4; i++) {
      const link = document.createElement('a');
      link.classList.add('mat-paginator-navigation');
      link.textContent = i.toString();
      link.setAttribute('aria-label', `Go to page ${i}`);
      link.addEventListener('click', () => {
        // Set the current page index
        this.pageIndex = i - 1;

        // Update the active class on the page links
        pageLinks.forEach(pageLink => {
          if (pageLink.textContent === link.textContent) {
            pageLink.classList.add('mat-paginator-navigation-active');
          } else {
            pageLink.classList.remove('mat-paginator-navigation-active');
          }
        });
      });

      // Add some space between the page links
     

      // Append the link to the container
      container.insertBefore(link, container.lastChild);
    }
  }
}
