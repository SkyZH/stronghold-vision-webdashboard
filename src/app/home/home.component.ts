import { Component, OnInit, OnDestroy } from '@angular/core';
import { NETWORKTABLES_SERVICE_PROVIDER, NetworkTablesService } from '../shared/networktables';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NETWORKTABLES_SERVICE_PROVIDER]
})
export class HomeComponent implements OnInit, OnDestroy {
  private statuses: any;
  private statusList: any;
  private statusName: {};
  private _statuses: {};

  constructor(
    private ntService: NetworkTablesService
  ) {
    this.statuses = [];
    this.statusList = [
      "auto_enabled",
      "manual_exposure",
      "target_count",
      "target_angle",
      "robotdrive_status"
    ]
    this.statusName = {
      auto_enabled: "自动瞄准",
      manual_exposure: "手动曝光",
      target_count: "目标",
      target_angle: "角度",
      robotdrive_status: "底盘"
    }
    this._statuses = {}
  }

  private listener: any;

  ngOnInit() {
    this.listener = this.ntService.globalListener.subscribe(({k, v, isNew}) => {
      let t = k.split('/'); t.shift();
      if (t[0] == 'vision') {
        this._statuses[t[1]] = v;
        this.__update_status();
      }
    });
  }

  private __update_status() {
    this.statuses = [];
    for (let i of this.statusList) {
      if (i in this._statuses) {
        let _st = {
          status: this._statuses[i],
          title: this.statusName[i],
          info: ""
        }
        switch(this._statuses[i]) {
          case 0:
            _st.info = "已启用";
            break;
          case 1:
            _st.info = "正在调整";
            break;
          case 2:
            _st.info = "未启用";
            break;
        }
        if (i == "target_count") {
          _st.info = "发现" + this._statuses["target_count_number"] + "个目标";
        }
        if (i == "target_angle") {
          _st.info = "距离" + this._statuses["target_angle_number"] + "°";
        }
        this.statuses.push(_st);
      }
    }

  }

  ngOnDestroy() {
    this.listener.unsubscribe();
  }

}
