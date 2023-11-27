import { Component, OnInit, inject } from '@angular/core';
import { LoadService } from './loading-overlay/load.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadService = inject(LoadService);
  toaster = inject(ToastrService);
  title = 'gym-diary';

  ngOnInit(): void {
    if (environment.production) {
      this.toaster.info('Production Build!');
    } else {
      this.toaster.info('Development Build!');
    }
  }
}
