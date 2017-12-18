import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Topic } from './models/topic.interface';

const TOPIC_API: string = '/api/topics';

@Injectable()
export class HomeService {
    constructor(private http: Http) {

    }

    getTopics(): Observable<Topic[]> {
        return this.http
            .get(TOPIC_API)
            .map((response: Response) => response.json());
    }
}