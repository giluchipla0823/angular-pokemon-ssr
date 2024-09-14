import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ContactPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {}

  ngOnInit() {
    this.title.setTitle('Contact page');
    this.meta.updateTag({
      name: 'description',
      content: 'Contact page description',
    });
    this.meta.updateTag({
      name: 'og:title',
      content: 'Contact Page',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hello, Contact Page, Angular, Universal',
    });
  }
}
