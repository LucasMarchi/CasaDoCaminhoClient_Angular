import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  remove(array, element) {
    return array.filter(e => e !== element);
  }

}
