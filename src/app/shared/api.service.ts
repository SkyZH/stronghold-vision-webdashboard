import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  title = 'Zodiac 的视觉中枢';

  public getCamera(id): string {
    switch(id) {
      case 0:
        return "/stream.mjpg";
      case 1:
        return "http://" + window.location.hostname + ":5805/?action=stream";
    }
  }
}
