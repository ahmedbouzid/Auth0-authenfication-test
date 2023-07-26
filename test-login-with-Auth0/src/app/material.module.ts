import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [

    MatButtonModule ,
    MatIconModule ,
    MatTooltipModule ,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule ,
    MatGridListModule,
    MatSidenavModule ,
    MatPaginatorModule ,
    MatTableModule ,

  ],
  exports: [
    MatButtonModule ,
    MatIconModule ,
    MatTooltipModule ,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule ,
    MatGridListModule ,
    MatSidenavModule ,
    MatPaginatorModule ,
    MatTableModule ,

  ],


})

export class MaterialModule
{}
