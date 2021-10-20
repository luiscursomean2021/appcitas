import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { User } from 'src/app/Core/Interfaces/User';
import { UsersListDataSource } from './users-list-datasource';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<User>;
  dataSource!: UsersListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {}

  ngAfterViewInit(): void {
    this.refreshData();
  }

  refreshData() {
    /*this.usersService.getUsuarios().subscribe(data => {
      this.listaUsuarios = data;
      this.initTableData(data);
    });*/
    console.log("refresh data");
  }

  initTableData(data:User[]) {
    this.dataSource = new UsersListDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
  }

}
