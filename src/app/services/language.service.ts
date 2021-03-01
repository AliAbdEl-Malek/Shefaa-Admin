import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  getDefaultLanguage(){
    return "ar";
  }

  getLanguage(){
    return localStorage.getItem("lang");
  }

  setLanguage(lang:string){
    return localStorage.setItem("lang",lang);
  }
}
