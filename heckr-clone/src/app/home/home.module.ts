import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


// containers
import { HomeComponent } from './containers/home/home.component';

// components
import { TopicComponent } from './components/topic/topic.component';

// services
import { HomeService } from './home.service';

@NgModule({
    declarations: [
        HomeComponent,
        TopicComponent
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [
        HomeService
    ]
})

export class HomeModule {
    constructor() {

    }
}