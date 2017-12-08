import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpUtil {

  noCacheHeaders: HttpHeaders;

  constructor() {
    this.noCacheHeaders = this.getHeaders()
  }

  getHeaders() {
    let httpHeaders = new HttpHeaders();

    return httpHeaders;
  };

}