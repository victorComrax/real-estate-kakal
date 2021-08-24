import { UserDataService } from './../../utilities/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent implements OnInit {
  public chosenWizardItem: number = 2;
  public prefix: string = 'education'
  public wizardItems: {
    src: string
    text: string
  }[] = [

    ];

  public changeWizardItem(index: number): void {
    this.chosenWizardItem = +index;
  }

  constructor(
    private route: ActivatedRoute,
    private userDataService: UserDataService) {
    this.prefix = this.userDataService.user.urlPrefix
    this.wizardItems = [
      {
        src: 'assets/images/05-destination.svg',
        text: 'הטיולים שלי',
      },
      {
        src: 'assets/images/button.svg',
        text: 'טיול חדש',
      },
      {
        src: 'assets/images/report.svg',
        text: 'דוחות',
      },
      {
        src: 'assets/images/05-destination.svg',
        text: 'הטיולים שלי',
      },
      {
        src: 'assets/images/05-destination.svg',
        text: 'הטיולים שלי',
      },
      {
        src: 'assets/images/05-destination.svg',
        text: 'הטיולים שלי',
      },
    ]

  }

  ngOnInit(): void { }
}
