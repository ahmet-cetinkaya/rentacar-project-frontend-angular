import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-menu-item',
  templateUrl: './admin-dashboard-menu-item.component.html',
  styleUrls: ['./admin-dashboard-menu-item.component.scss']
})
export class AdminDashboardMenuItemComponent implements OnInit {
  @Input() name!: string;
  @Input() routerLink!: string;
  @Input() isExactActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
