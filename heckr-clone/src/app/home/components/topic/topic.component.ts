import { Component, Input, OnChanges } from '@angular/core'

// models
import { Topic } from '../../models/topic.interface';

@Component({
    selector: 'topic',
    styleUrls: ['topic.component.css'],
    templateUrl: 'topic.component.html'
})

export class TopicComponent implements OnChanges {    
    constructor() {

    }

    @Input()
    detail: Topic;

    ngOnChanges(changes): void {
        if(changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }
}