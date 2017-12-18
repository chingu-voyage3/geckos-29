import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { HomeComponent } from './containers/home/home.component';

// components
import { TopicComponent } from './components/topic/topic.component';

@NgModule({
    declarations: [
        HomeComponent,
        TopicComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {
    constructor() {

    }
}