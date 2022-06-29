import { Component } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html'
})
export class ListadoComponent {
    public heroes: string[] = ['Ironman', 'Batman', 'Flash', 'Superman'];
    public heroesBorrados: string[] = [];
    public eliminarHeroe = (index: number) => {
        const heroe = this.heroes[index];
        this.heroes.splice(index, 1);
        this.heroesBorrados.push(heroe);
    }
    public restaurarHeroe = (index: number) => {
        const heroe = this.heroesBorrados[index];
        this.heroesBorrados.splice(index, 1);
        this.heroes.push(heroe);
    }
}
