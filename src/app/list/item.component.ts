import {Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'list-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class ListItemComponent implements OnInit {
    @Input() contact: any = {};
    @Output() routerNavigate = new EventEmitter<number>();
    constructor(){}
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
    goDetail(num: number){
        this.routerNavigate.emit(num)
    }
}