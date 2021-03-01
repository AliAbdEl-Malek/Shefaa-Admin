import { Injectable } from "@angular/core";

@Injectable()
export class TextService
{
    isEmptyText(text:string):boolean
    {
      if(text==null || text.length==0 )
        return true;

        return false;
    }
}