import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HEROESMock } from "../mock-heroes";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroesLista: Hero[];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(valorRetorno => (this.heroesLista = valorRetorno));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
