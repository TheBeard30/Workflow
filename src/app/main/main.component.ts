import { Component, OnInit, ViewChild } from '@angular/core';
import { Graph } from '@antv/x6';
import { DetailpanelComponent } from '../components/detailpanel/detailpanel.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  @ViewChild('detailPanel') detailPanel: DetailpanelComponent;

  // 画布背景颜色
  graphBackgroundColor: string = '#ffffff';

  constructor() { }

  ngOnInit(): void {
  }

  backgroundColorChange($event){

  }

}
