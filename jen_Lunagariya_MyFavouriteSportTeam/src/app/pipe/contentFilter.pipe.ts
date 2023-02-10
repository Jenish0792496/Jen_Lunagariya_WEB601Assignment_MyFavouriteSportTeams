import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ContentFilterPipe'
})
export class ContentFilterPipe implements PipeTransform {
  transform(contents: any[], type?: string): any[] {
    if (!type) {
      return contents.filter(content => !content.type);
    }
    return contents.filter(content => content.type === type);
  }
}
