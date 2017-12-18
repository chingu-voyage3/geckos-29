import { Component, OnInit } from '@angular/core'

// services
import { HomeService } from '../../home.service';

// models
import { Topic } from '../../models/topic.interface';

@Component({
    selector: 'home',
    styleUrls: ['home.component.css'],
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{    
    topics: Topic[];
    constructor(private homeService: HomeService) {

    }

    ngOnInit(): void { 
        this.homeService
            .getTopics()
            .subscribe((data : Topic[]) => this.topics = data);
    }

}