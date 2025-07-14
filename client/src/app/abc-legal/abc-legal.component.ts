import { Component } from "@angular/core";
import legalText from "../../assets/files/legal.json";

@Component({
  selector: "abc-legal",
  templateUrl: "./abc-legal.component.html",
  styleUrls: ["./abc-legal.component.css"],
})
export class AbcLegalComponent {
  year: string = `© ${new Date().getFullYear()}`;
  legalInfo: string = legalText.legalInfo;
  timeStamp = new Date();

  constructor() {}
}
