import { UserDataService } from './../../utilities/services/user-data.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() menuToggle = new EventEmitter();

  public status: {
    text: string;
    svgUrl: string;
    count: number
  }[] = [

    ];
  public platformName: string = 'education'
  public isOpen: boolean = true;
  public urlAdress = 'main';
  public showSteps: boolean = true;
  public componentType: string = '';
  public prefix: string = ''

  public toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggle.emit();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userDataService: UserDataService
  ) {

    this.prefix = this.userDataService.user.urlPrefix;
    this.status = [
      {
        text: 'אישור תנועות',
        svgUrl: 'reload',
        count: 3,
      },
      {
        text: 'הערת אזהרה',
        svgUrl: 'reload',
        count: 1
      },
      {
        text: 'דיווח לרשות המסים',
        svgUrl: 'reload',
        count: 20
      },
      {
        text: 'העברת חזקה',
        svgUrl: 'reload',
        count: 20
      },
      {
        text: 'רישום בטאבו',
        svgUrl: 'reload',
        count: 20
      },
      {
        text: 'עדכון ספר נכסים',
        svgUrl: 'reload',
        count: 20
      },
    ]


    this.router.events.subscribe((val: any) => {

      this.urlAdress = val.url ? val.url : this.urlAdress;

      this.showSteps =
        this.urlAdress === '/education' ||
          this.urlAdress === '/education/search' ||
          this.urlAdress === '/education/my-tours'
          ? true
          : false;
    });
  }

  ngOnInit(): void { }
}
