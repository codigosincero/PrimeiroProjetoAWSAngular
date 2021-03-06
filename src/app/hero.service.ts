import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROESMock } from "./mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROESMock);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROESMock.find(hero => hero.id === id));
  }
}
