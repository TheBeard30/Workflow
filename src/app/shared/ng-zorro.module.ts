import { NgModule } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
    exports: [
        NzTabsModule,
        NzInputModule
    ]
})
export class NgZorroModule{

}