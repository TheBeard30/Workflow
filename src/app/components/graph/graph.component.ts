import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Graph } from '@antv/x6';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.less']
})
export class GraphComponent implements OnInit,OnChanges {

  @ViewChild('graph') graphDiv: ElementRef;	

  @Input() backGroundColor: string = '#ffffff';
  @Output() backgroundColorChange: EventEmitter<string> = new EventEmitter();

  graph: Graph;


  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
  }


  ngOnChanges(change: SimpleChanges){
	if(change.backGroundColor && change.backGroundColor.currentValue && this.graph){
		this.backGroundColor = change.backGroundColor.currentValue as string;
		this.graph.drawBackground({color: this.backGroundColor})
	}
  }

  ngAfterViewInit() {
	const data = {
		// 节点
		nodes: [
		  {
			id: 'node1', // String，可选，节点的唯一标识
			x: 40,       // Number，必选，节点位置的 x 值
			y: 40,       // Number，必选，节点位置的 y 值
			width: 80,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: 'hello', // String，节点标签
		  },
		  {
			id: 'node2', // String，节点的唯一标识
			x: 160,      // Number，必选，节点位置的 x 值
			y: 180,      // Number，必选，节点位置的 y 值
			width: 80,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: 'world', // String，节点标签
		  },
		],
		// 边
		edges: [
		  {
			source: 'node1', // String，必须，起始节点 id
			target: 'node2', // String，必须，目标节点 id
		  },
		],
	};

	let element = this.graphDiv.nativeElement;
	const graph = new Graph({
		container: element,
		width: element.offsetWidth,
		height: element.offsetHeight,
		background: {
			color: this.backGroundColor, // 设置画布背景颜色
		},
		grid: {
			size: 10,      // 网格大小 10px
			visible: true, // 渲染网格背景
		},
	});


	graph.fromJSON(data);

	this.graph = graph;
  };
 

}
