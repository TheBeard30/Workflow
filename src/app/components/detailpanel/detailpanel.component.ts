import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Graph } from '@antv/x6';

@Component({
  selector: 'app-detailpanel',
  templateUrl: './detailpanel.component.html',
  styleUrls: ['./detailpanel.component.less']
})
export class DetailpanelComponent implements OnInit {

  
  @Input() backgroundColor: string = '#ffffff';
  @Output() backgroundColorChange: EventEmitter<string> = new EventEmitter();

  @Input() node: {[K: string]: any};

  backgroundOptions: {[K: string]: any} = {};

  color: string;

  constructor() { }

  ngOnInit(): void {
    this.color = this.backgroundColor;
  }


  ngOnChange(simpleChange: SimpleChanges){
    
  }

  backgroundChange($event){
    this.backgroundColorChange.emit(this.backgroundColor = $event);
    this.backgroundOptions['color'] = $event;
  }

}
