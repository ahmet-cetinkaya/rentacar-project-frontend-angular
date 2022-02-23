import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { Color } from 'app/shared/models/color';
import { ColorService } from 'app/shared/services/colorService/color.service';

@Component({
  selector: 'app-colors-dashboard',
  templateUrl: './colors-dashboard.component.html',
  styleUrls: ['./colors-dashboard.component.scss']
})
export class ColorsDashboardComponent implements OnInit {
  colorListModel: ListResponseModel<Color> = {
    index: 0,
    size: 10,
    items: []
  };

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.colorService
      .getList(this.colorListModel.index, this.colorListModel.size)
      .subscribe(response => (this.colorListModel = response));
  }
}
