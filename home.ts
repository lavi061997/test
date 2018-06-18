import { Component, ViewChild } from "@angular/core";
import { NavController } from "ionic-angular";
import payload from "../../models/payload.interface";
import moment from "moment";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  date: any = moment();
  enddate: any;
  starttime: any;
  endtime: any;
  startdate: any;
  data: any = {};
  constructor(public navCtrl: NavController) {}

  display() {
    this.data.enddatetime =
      moment(this.enddate).format("YYYY-MM-DD") +
      " " +
      moment(this.endtime).format("h:mA");
    this.data.startdatetime =
      moment(this.startdate).format("YYYY-MM-DD") +
      " " +
      moment(this.starttime).format("h:mA");
    console.table(
      this.data.enddatetime,
      "date",
      this.date.toISOString(),
      "enddate:",
      moment(this.enddate).format("MM-DD-YYYY"),
      "startDate",
      moment(this.startdate).format("MM-DD-YYYY"),
      "startTime:",
      moment(this.starttime).format("h:mA"),
      "endtime:",
      moment(this.endtime).format("h:mA")
    );
  }
  ionViewDidLoad() {
    this.date.add({ h: 5, m: 30 });
    this.enddate = this.date.toISOString();
    this.startdate = this.date.toISOString();
    this.starttime = this.date.toISOString();
    this.endtime = this.date.add({ h: 1 }).toISOString();
  }
}
