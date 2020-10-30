import { Component, OnInit } from "@angular/core";
import { jsonSchema } from "./jsonSchema";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular 6";
  jsonFormOptions = {
    loadExternalAssets: false
  };
  schema = {
    type: "object",
    htmlClass: "row",
    properties: {
      first_name: { type: "string" },
      last_name: { type: "string", htmlClass: "ml-2" },
      address: {
        type: "object",
        properties: {
          street_1: { title: "blargheh", type: "string" },
          street_2: { type: "string" },
          city: { type: "string" },
          state: {
            type: "string",
            enum: [
              "AL",
              "AK",
              "AS",
              "AZ",
              "AR",
              "CA",
              "CO",
              "CT",
              "DE",
              "DC",
              "FM",
              "FL",
              "GA",
              "GU",
              "HI",
              "ID",
              "IL",
              "IN",
              "IA",
              "KS",
              "KY",
              "LA",
              "ME",
              "MH",
              "MD",
              "MA",
              "MI",
              "MN",
              "MS",
              "MO",
              "MT",
              "NE",
              "NV",
              "NH",
              "NJ",
              "NM",
              "NY",
              "NC",
              "ND",
              "MP",
              "OH",
              "OK",
              "OR",
              "PW",
              "PA",
              "PR",
              "RI",
              "SC",
              "SD",
              "TN",
              "TX",
              "UT",
              "VT",
              "VI",
              "VA",
              "WA",
              "WV",
              "WI",
              "WY"
            ]
          },
          zip_code: { type: "string" }
        }
      },
      birthday: { type: "string" },
      notes: { type: "string" },
      phone_numbers: {
        type: "array",
        items: {
          type: "object",
          properties: {
            type: { type: "string", enum: ["cell", "home", "work"] },
            number: { type: "string" }
          },
          required: ["type", "number"]
        }
      }
    },
    required: ["last_name"]
  };

  layout = ["*"];

  // layout = [
  //   {
  //     type: "flex",
  //     "flex-flow": "row wrap",
  //     items: ["first_name", "last_name"]
  //   },
  //   { key: "address.street_1", title: "Address", placeholder: "Street" },
  //   { key: "address.street_2", notitle: true },
  //   {
  //     type: "div",
  //     display: "flex",
  //     "flex-direction": "row",
  //     items: [
  //       {
  //         key: "address.city",
  //         flex: "3 3 150px",
  //         notitle: true,
  //         placeholder: "City"
  //       },
  //       {
  //         key: "address.state",
  //         flex: "1 1 50px",
  //         notitle: true,
  //         placeholder: "State"
  //       },
  //       {
  //         key: "address.zip_code",
  //         flex: "2 2 100px",
  //         notitle: true,
  //         placeholder: "Zip Code"
  //       }
  //     ]
  //   },
  //   { key: "birthday", type: "date" },
  //   {
  //     key: "phone_numbers",
  //     type: "array",
  //     listItems: 3,
  //     items: [
  //       {
  //         type: "div",
  //         displayFlex: true,
  //         "flex-direction": "row",
  //         items: [
  //           {
  //             key: "phone_numbers[].type",
  //             flex: "1 1 50px",
  //             notitle: true,
  //             placeholder: "Type"
  //           },
  //           {
  //             key: "phone_numbers[].number",
  //             flex: "4 4 200px",
  //             notitle: true,
  //             placeholder: "Phone Number"
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     type: "section",
  //     title: "Notes",
  //     expandable: true,
  //     expanded: false,
  //     items: [{ key: "notes", type: "textarea", notitle: true }]
  //   }
  // ];

  submittedFormData;
  ngOnInit() {
    console.log("hello");
  }

  onSubmit(data: any) {
    this.submittedFormData = data;
  }

  showFormSchemaFn($event) {
    console.log($event);
  }

  showFormLayoutFn($event) {
    console.log($event);
  }
}
