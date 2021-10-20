import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Animal } from 'src/app/Core/Interfaces/Animal';
import { AnimalService } from 'src/app/Core/Services/Animal.service';
import { ListaDataSource } from './lista-datasource';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Animal>;
  dataSource: ListaDataSource;
  lstAnimal!: Animal[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'raza', 'edad', 'tamanio', 'vacunas', 'actions'];

  constructor(private service: AnimalService) {
    this.dataSource = new ListaDataSource([]);
  }

  ngOnInit() {
    this.service.getAnimales().subscribe(data => {
      this.dataSource = new ListaDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;

    });
  }

  ngAfterViewInit(): void {
    this.service.getAnimales().subscribe(data => {
      this.dataSource = new ListaDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }
}
