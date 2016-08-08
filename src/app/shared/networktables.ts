import { Injectable, provide } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import '../../../vendor/networktables';

@Injectable()
export class NetworkTablesService {
  private static instance: any = null;
  public static getInstance(): any {
    if (NetworkTablesService.instance === null) {
       NetworkTablesService.instance = new NetworkTablesService;
    }
    return NetworkTablesService.instance;
  }

  private ntService: any;
  private isConnected: boolean;

  constructor(
  ) {
    this.ntService = new (window["NetworkTables"])("ws://" + window.location.hostname + ":5802/networktables/ws")
    this._globalListener = Observable.fromEventPattern(
      f => this.ntService["addGlobalListener"](f, true),
      f => this.ntService["removeGlobalListener"](f)
    );
    this._wsListener = Observable.fromEventPattern(
      f => this.ntService["addWsConnectionListener"](f, true),
      f => this.ntService["removeWsConnectionListener"](f)
    );
    this._robotListener = Observable.fromEventPattern(
      f => this.ntService["addRobotConnectionListener"](f, true),
      f => this.ntService["removeRobotConnectionListener"](f)
    );

    this._robotListener.subscribe(status => this._robotStatus = status);
    this._wsListener.subscribe(status => this._wsStatus = status);
  }

  private _globalListener: any;
  private _wsListener: any;
  private _robotListener: any;

  private _robotStatus: boolean;
  private _wsStatus: boolean;

  public getValue(key, defaultValue): any {
    return this.ntService["getValue"](key, defaultValue);
  }

  public putValue(key, value): any {
    return this.ntService["putValue"](key, value);
  }

  get globalListener(): Observable<any> {
    return this._globalListener;
  }

  get wsListener(): Observable<any> {
    return this._wsListener;
  }

  get robotListener(): Observable<any> {
    return this._robotListener;
  }

  get robotStatus(): boolean {
    return this._robotStatus;
  }

  get wsStatus(): boolean {
    return this._wsStatus;
  }
}

export const NETWORKTABLES_SERVICE_PROVIDER = provide(NetworkTablesService, {
  useFactory: (): NetworkTablesService => NetworkTablesService.getInstance()
});
