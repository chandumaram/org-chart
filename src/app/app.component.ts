import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestOrg';

  employeeImage = "assets/employee.png";
  topEmployee: any = {
    name: 'Sundar Pichai',
    cssClass: 'oc-superSenior',
    imageUrl: this.employeeImage,
    designation: 'Chief Executive Officer',
    subordinates: [
      {
        name: 'Thomas Kurian',
        cssClass: 'oc-senior',
        imageUrl: this.employeeImage,
        designation: 'CEO, Google Cloud',
      },
      {
        name: 'Susan Wojcicki',
        cssClass: 'oc-senior',
        imageUrl: this.employeeImage,
        designation: 'CEO, YouTube',
        subordinates: [
          {
            name: 'Beau Avril',
            cssClass: 'oc-me',
            imageUrl: this.employeeImage,
            designation: 'Global Head of Business Operations',
            subordinates: []
          },
          {
            name: 'Tara Walpert Levy',
            cssClass: 'oc-me',
            imageUrl: this.employeeImage,
            designation: 'VP, Agency and Brand Solutions',
            subordinates: [
              {
                name: 'Junior 1 David',
                cssClass: 'oc-junior',
                imageUrl: this.employeeImage,
                designation: 'CEO, Google Health',
                subordinates: []
              },
              {
                name: 'Junior 2 David',
                cssClass: 'oc-junior',
                imageUrl: this.employeeImage,
                designation: 'CEO, Google Health',
                subordinates: [
                  {
                    name: 'superJunior 1 David',
                    cssClass: 'oc-superJunior',
                    imageUrl: this.employeeImage,
                    designation: 'CEO, Google Health',
                    subordinates: []
                  },
                  {
                    name: 'superJunior 2 David',
                    cssClass: 'oc-superJunior',
                    imageUrl: this.employeeImage,
                    designation: 'CEO, Google Health',
                    subordinates: []
                  }
                ]
              }
            ]
          },
          // {
          //   name: 'Ariel Bardin',
          //   cssClass: 'oc-me',
          //   imageUrl: this.employeeImage,
          //   designation: 'VP, Product Management',
          //   subordinates: []
          // }
        ]
      },
      {
        name: 'Jeff Dean',
        cssClass: 'oc-senior',
        imageUrl: this.employeeImage,
        designation: 'Head of Artificial Intelligence',
        subordinates: [
          {
            name: 'David Feinberg (You)',
            cssClass: 'oc-me',
            imageUrl: this.employeeImage,
            designation: 'CEO, Google Health',
            subordinates: []
          }
        ]
      }
    ]
  };

  onClickItem(event:any){
    console.log(event);
  }
}
