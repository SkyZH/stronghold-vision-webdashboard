import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private statuses: {};
  constructor() {
    this.statuses = [
      {
        status: 0,
        title: "自动瞄准",
        info: "已启用"
      }, {
        status: 2,
        title: "手动曝光",
        info: "未启用"
      }, {
        status: 0,
        title: "目标",
        info: "监测到 2 个"
      }, {
        status: 0,
        title: "角度",
        info: "20°"
      }, {
        status: 1,
        title: "底盘",
        info: "调整中"
      }, {
        status: 1,
        title: "飞轮",
        info: "调整中"
      }
    ]
  }

  ngOnInit() {
  }

}
