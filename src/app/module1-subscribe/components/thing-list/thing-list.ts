import { Component, OnInit, inject } from '@angular/core';
import { ExampleService } from '../../../core/service/example.service';
import { Thing } from '../../../models/thing.model';

@Component({
  selector: 'app-thing-list',
  templateUrl: './thing-list.html',
})
export class ThingListComponent implements OnInit {
  things: Thing[] = [];
  private service = inject(ExampleService);

  ngOnInit(): void {
    this.service.getThings().subscribe(
      (res: Thing[]) => {
        this.things = res;
        console.log('Things loaded:', this.things);
      },
      error => {
        console.error('Error loading things:', error);
      }
    );
  }
}
