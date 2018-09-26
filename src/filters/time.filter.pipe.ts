import {Pipe} from '@angular/core';
 
@Pipe({
  name: 'time'
})
export class TimeFilter {
  transform(value) {
 
   
              function z(n) {return (n<10? '0' : '') + n;}
              var seconds = value % 60;
              var minutes = Math.floor(value / 60);
              var hours = Math.floor(minutes / 60);
              return (z(hours) +':'+z(minutes)+':'+z(seconds));
     
  }
}