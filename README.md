## CM-ANGULAR-ORG-CHART UI

# Hierarchical Organization Chart for Angular 14 and above versions

The `cm-angular-org-chart` component displays heirarchal Organizational Chart.

![Org Chart](https://github.com/chandumaram/org-chart/blob/master/src/assets/org-chart-vertical.png)

## Table of Contents

 * [Version](#Version)
 * [Usage](#usage)
 * [Inputs](#inputs)
 * [Outputs](#outputs)
 * [Default Look](#default-look)
 * [Custom Styling](#custom-styling)


## Version

| Angular | cm-angular-org-chart |
|---|---|
|`15`|`2.0.0`|
|`14`|`1.1.3`|
 

## Usage

Each employee is represented by an object with the following properties. Note that all the properties are optional.

| Property | Type| Description |
|---|---|---|
|`name`|`string`| The name of the employee |
|`cssClass`|`string`| The CSS class to apply to the employee block|
|`imageUrl`|`string`| URL to the employee's image
|`designation`|`string`| Employee's designation
|`subordinates`|`Employee[]`| An array of subordinate employees

### Installation

```sh
$ npm i cm-angular-org-chart
```

### `app.module.ts`
```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CmAngularOrgChartModule } from 'cm-angular-org-chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CmAngularOrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### `app.component.html`:
```html
  <org-chart [topEmployee]="topEmployee" direction="vertical"></org-chart>
```

### `app.component.ts`:
```js
export class AppComponent {
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
}
```


## Inputs

| Name | Type | Description
|---|---|---|
|`topEmployee`| `Employee` object| The `Employe` object mentioned above
|`direction`| `vertical` or `horizontal` | Renders chart vertically or horizontally


## Outputs

|Name |Parameters | Description
|---|---|---|
|`itemClick`|`Employee`| The `Employee` object which was clicked

Ex:   <org-chart [topEmployee]="topEmployee" direction="vertical" (itemClick)="onClickItem($event)"></org-chart>


## Default Look

### Horizontal

![Horizontal Chart](https://github.com/chandumaram/org-chart/blob/master/src/assets/org-chart-horizontal.png)

### Vertical

![Vertical Chart](https://github.com/chandumaram/org-chart/blob/master/src/assets/org-chart-vertical.png)


## Custom Styling
You can override default styles with your custom SCSS. Make sure you include your custom SCSS *after* including the default SCSS so that your styles override the default styles.

```scss
.oc-name {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.oc-designation {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.oc-border {
  border-color: #9E9E9E;
}

.oc-box {
  color: white;
  width: 10em;
}

// Custom cssClass from Employee object
.oc-superSenior {
	background-color: midnightblue;
}

.oc-senior {
	background-color: brown;
}

.oc-me {
	background-color: darkgreen;
}

.oc-junior {
	background-color: darkgoldenrod;
}

.oc-superJunior {
	background-color: purple;
    }
```

## License
MIT

## Author
- Maram Chandrasekhar Reddy [@chandumaram](https://github.com/chandumaram)


