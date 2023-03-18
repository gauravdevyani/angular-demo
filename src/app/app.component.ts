// import {Component} from '@angular/core';

// export interface StudentData {
//   storeName: string;
//   ownerName: string;
//   address: string;
//   updatedAt: string;
// }

// const STUDENT_RECORD: StudentData[] = [
//   {
//     storeName: "Vijay Laxmi Traders", 
//     ownerName: 'Rathna Babu', 
//     address: "176 , Mahadev Totla Nagar , Indore", 
//     updatedAt: "16-03-2023   4:00:00 PM"
//   },
//   {
//     storeName: "Vijay Laxmi Traders", 
//     ownerName: 'Rathna Babu', 
//     address: "176 , Mahadev Totla Nagar , Indore", 
//     updatedAt: "16-03-2023   4:00:00 PM"
//   },
//   {
//     storeName: "Vijay Laxmi Traders", 
//     ownerName: 'Rathna Babu', 
//     address: "176 , Mahadev Totla Nagar , Indore", 
//     updatedAt: "16-03-2023   4:00:00 PM"
//   },
// ];


// @Component({
//     selector: 'app-root',
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css']
// })


// export class AppComponent {
//   displayedColumns: string[] = ['storeName', 'ownerName', 'address', 'updatedAt' , 'actions'];
//   dataSource = STUDENT_RECORD;
// }






import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogCompComponent } from './dialog-comp/dialog-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(public dialog:MatDialog) {}
  
  openDialog(){
    this.dialog.open(DialogCompComponent)
  }

  displayedColumns: string[] = ['storeName', 'ownerName', 'address', 'updatedAt' , 'actions'];
  dataSource = new MatTableDataSource<StudentData>(STUDENT_RECORD);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface StudentData {
  storeName: string;
  ownerName: string;
  address: string;
  updatedAt: string;
}

const STUDENT_RECORD: StudentData[] = [
  {
    storeName: "Vijay Laxmi Traders", 
    ownerName: 'Rathna Babu', 
    address: "176 , Mahadev Totla Nagar , Indore", 
    updatedAt: "16-03-2023   4:00:00 PM"
  },
  {
    storeName: "Vijay Laxmi Traders", 
    ownerName: 'Rathna Babu', 
    address: "176 , Mahadev Totla Nagar , Indore", 
    updatedAt: "16-03-2023   4:00:00 PM"
  },
  {
    storeName: "Vijay Laxmi Traders", 
    ownerName: 'Rathna Babu', 
    address: "176 , Mahadev Totla Nagar , Indore", 
    updatedAt: "16-03-2023   4:00:00 PM"
  },
];



