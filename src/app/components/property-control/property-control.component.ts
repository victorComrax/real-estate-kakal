import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { QuestionBase } from '../form/logic/question-base';
import { QuestionCalendar } from '../form/logic/question-calendar';
import { QuestionNumber } from '../form/logic/question-number';
import { QuestionSelect } from '../form/logic/question-select';
import { QuestionTextarea } from '../form/logic/question-textarea';
import { TextboxQuestion } from '../form/logic/question-textbox';

@Component({
  selector: 'app-property-control',
  templateUrl: './property-control.component.html',
  styleUrls: ['./property-control.component.scss']
})
export class PropertyControlComponent implements OnInit {
  public activeStep: number = 0;
  public finalObject: any = {};
  public moreInfoIsOpen: boolean;
  public destinyIsOpen:boolean;
  public editMode:boolean = false;
  public property = { block: '11541', lot: '59', area: '696', date: '17.06.2021', location: 'קריית שמונה,מחוז חיפה' };
  public exceptionalEvents:Array<object>  = [
    { date: '21.4.2020', reason: 'בניה לא חוקית', location: ' יחידה בצפון' },
    { date: '21.4.2020', reason: 'בניה לא חוקית', location: ' יחידה בצפון' }
  ];

  public stepsArray:Array<object>  = [
    { svgSrc: 'assets/images/calendar.svg', text: 'פירוט הנכס' },
    { svgSrc: 'assets/images/list.svg', text: 'תנועות' },
    { svgSrc: 'assets/images/Group_1087.svg', text: 'תתי חלקה' },
    { svgSrc: 'assets/images/add.svg', text: 'פרצלציה' }
  ]

  public destinyArray:Array<object> = [
    {typeOfDestiny:'מסחר,מגורים ותעשיה' , destiny: 'מסחרי ואזרחי' , area: 694.55},
    {typeOfDestiny:'שטח חקלאי ומרעה' , destiny: 'קרקע חקלאית' , area: 695.55},
    {typeOfDestiny:'שטח לדרכים' , destiny: 'דרך מוצעת או הרחבה' , area: 1.12}
  ];

  constructor() { }

  ngOnInit(): void {
    // --- reverse arrays for css elements -- >
    this.form_one_array.reverse();
    this.form_two_array.reverse();
    this.form_three_array.reverse();
    this.form_four_array.reverse();
  }
  public updateFinalObject(event: Event) {
    this.finalObject = Object.assign(this.finalObject ,event);
  }
  public changeActiveStep(newActiveStep: number): void {
    this.activeStep = newActiveStep;
  }
  // -- Forms Arrays ---
  public form_one_array: QuestionBase<string | number>[] = [
    new QuestionNumber({
      key: 'ownedSpace',
      label: 'שטח בבעלות',
      value: 0,
      validations: [Validators.required]
    }),
    new QuestionSelect({
      key: 'propertyType',
      label: 'סוג נכס',
      validations: [Validators.required],
      options: [{ key: '', value: '' }]
    }),
    new QuestionSelect({
      key: 'disassemblyProcess',
      label: 'בתהליך פירוק',
      validations: [Validators.required],
      options: [{ key: '', value: '' }]
    }),
    new QuestionNumber({
      key: 'purchaseContactArea',
      label: 'שטח התקשרות קנייה',
      value: 0,
      validations: [Validators.required]
    }),
    new QuestionSelect({
      key: 'smoothRegistrationMode',
      label: 'מצב רישום חלקה',
      validations: [Validators.required],
      options: [{ key: '', value: '' }]
    }),
  ];
  public form_two_array: QuestionBase<string | Date | number>[] = [
    new QuestionNumber({
      key: 'LeaseInSq',
      label: 'חכירה במ"ר',
      value: 0,
      validations: [Validators.required]
    }),
    new QuestionCalendar({
      key: 'rentUntil',
      label: 'בהשכרה עד',
      value: new Date(),
      validations: [Validators.required]
    }),
    new QuestionSelect({
      key: 'propertyRight',
      label: 'זכות בנכס',
      validations: [Validators.required],
      options: [{ key: '', value: '' }]
    }),
    new QuestionNumber({
      key: 'salesContactArea',
      label: 'שטח התקשרות מכירה',
      value: 0,
      validations: [Validators.required]
    }),
  ];
  public form_three_array: QuestionBase<string | number>[] = [
    new QuestionNumber({
      key: 'loyaltyInSq',
      label: 'נאמנות במ"ר',
      value: 0,
      validations: [Validators.required]
    }),
    new TextboxQuestion({
      key: 'smoothSource',
      label: 'חלקה מקור',
      value: '',
      validations: [Validators.required]
    }),
    new QuestionSelect({
      key: 'SourceOfEligibility',
      label: 'מקור זכאות',
      validations: [Validators.required],
      options: [{ key: 'רכישה', value: '0' }]
    }),
    new QuestionSelect({
      key: 'israelElectricCorporation',
      label: 'חח"י',
      validations: [Validators.required],
      options: [{ key: 'כן', value: '0' }]
    }),
  ];
  public form_four_array: QuestionBase<string | number>[] = [
    new TextboxQuestion({
      key: 'smoothDescription',
      label: 'תיאור חלקה',
      value: '',
      validations: [Validators.required]
    }),
    new TextboxQuestion({
      key: 'thereIsDivision',
      label: 'קיימת חלוקה',
      value: '',
      validations: [Validators.required]
    }),
    new TextboxQuestion({
      key: 'sourceBlock',
      label: 'גוש מקור',
      value: '',
      validations: [Validators.required]
    }),
    new TextboxQuestion({
      key: 'parcellationProgram',
      label: 'תוכנית פרצלציה',
      value: '',
      validations: [Validators.required]
    }),
    new TextboxQuestion({
      key: 'inAlegalProcess',
      label: 'בתהליך משפטי',
      value: '',
      validations: [Validators.required]
    }),
    new QuestionTextarea({
      key: 'additionalComments',
      label: 'הערות נוספות',
      value: '',
      validations: [Validators.required]
    }),
  ];
}
