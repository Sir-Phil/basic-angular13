import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'star-rate',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.scss']

})

export class StarComponent implements OnChanges{

    @Input() starRating: number;
    starRateWidth: number;
    @Output() starRatingClicked: EventEmitter<string> = new EventEmitter<string>()

    constructor(){}  

ngOnChanges(): void {
    this.starRateWidth = this.starRating * 75 / 5;
}

onClick(): void {
    this.starRatingClicked.emit(`The rating ${this.starRating} was clicked`)
}

}