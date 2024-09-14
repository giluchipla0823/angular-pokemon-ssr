import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AboutPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {}

  ngOnInit() {
    this.title.setTitle('About Page');
    this.meta.updateTag({
      name: 'description',
      content: 'About page description',
    });
    this.meta.updateTag({
      name: 'og:title',
      content: 'About Page',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hello, About Page, Angular, Universal',
    });
  }
}
