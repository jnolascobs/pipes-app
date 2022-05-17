import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'fly'
})
export class FlyPipe implements PipeTransform {

    transform(value: string): string {
        return (value) ? "vuela" : "no vuela";
    }

}