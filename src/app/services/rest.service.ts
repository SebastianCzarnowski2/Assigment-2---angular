import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})


export class RestService {
    private adress: string = "https://official-joke-api.appspot.com/jokes/ten"

    constructor(
        private http: HttpClient
    ) { }

    public getJokeData(): any {
        return this.http.get(this.adress)
            .pipe(
                map((res: any) => res)
            )
    }
}