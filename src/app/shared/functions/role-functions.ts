import { Injectable } from '@angular/core';
import { FeaturesEnum } from 'src/app/models/permission/permission.enum';

@Injectable({
  providedIn: 'root'
})
export class Role {
  static role(f: FeaturesEnum, a: any) {
    return f+'.'+a
  }
  role(f: FeaturesEnum, a: any) {
    return f+'.'+a;
  }
}
