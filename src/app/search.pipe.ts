import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,args?:any): any {
    if(!value) {return null;} //if no data
    if(!args) {return value;} //if no search data 
 
    args=args.toLowerCase();
    return  value.filter((item:any)=>{
     return JSON.stringify(item).toLocaleLowerCase().includes(args);
    })
   }

}
