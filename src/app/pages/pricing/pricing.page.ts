import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PricingPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {}

  ngOnInit() {
    // this.title.setTitle('Pricing page');
    this.meta.updateTag({
      name: 'description',
      content: 'Pricing page description',
    });
    this.meta.updateTag({
      name: 'og:title',
      content: 'Pricing page',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hello, Pricing page, Angular, Universal',
    });
  }
}
