import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // panels!: [];
  panelOpenState: boolean[] = [];
  panels: any = [
  {id:1, header:'Lorem ipsum dolor amet sit?', content:'Lorem ipsun dolor sit amet, condjfc bfchjrf bhfcjreh bjhnfer gyertrhtnf gbfh sit out woith bhjnn bd', expanded: false},
  {id:2, header:'Lorem ipsum dolor amet sit?', content:'Lorem ipsun dolor sit amet, condjfc bfchjrf bhfcjreh bjhnfer gyertrhtnf gbfh sit out woith bhjnn bd', expanded: false},
  {id:3, header:'Lorem ipsum dolor amet sit?', content:'Lorem ipsun dolor sit amet, condjfc bfchjrf bhfcjreh bjhnfer gyertrhtnf gbfh sit out woith bhjnn bdT ', expanded: false},
  {id:4, header:'Lorem ipsum dolor amet sit?', content:'Lorem ipsun dolor sit amet, condjfc bfchjrf bhfcjreh bjhnfer gyertrhtnf gbfh sit out woith bhjnn bd', expanded: false},
]
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 0; i++) {
      this.panels.push({ title: i });
      this.panelOpenState.push(false);
    }
  }
  toggle(expanded: boolean) {
    expanded = !expanded;
  }
    
}
