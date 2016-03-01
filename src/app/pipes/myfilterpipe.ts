import {Injectable, Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'myfilter'
})
@Injectable()
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        return items.filter(item => item.countryID.toString() === args[0].toString());
    }
}
