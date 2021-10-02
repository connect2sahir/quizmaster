import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/src/services/categories.service';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: Category = {
    title: "", description: "", cid: 0
  };
  formTile: string = 'Add category';
  constructor(private router: Router, private catService: CategoriesService, private snackBar: MatSnackBar, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

  
    this.activateRoute.params.subscribe((data) => {


      this.category.cid = data['id'];
      if( this.category.cid!=0){

      this.catService.getCategoryByid(this.category.cid).subscribe((data) => {
        this.category.title = data['title'];

        this.category.description = data['description'];
        this.formTile = 'Update category';

      })
    }
    })
  

  }

  formSubmit() {
    if (this.formTile!='Update category') {
      this.catService.addCategory(this.category).subscribe((data) => {
       
          this.snackBar.open("Category added successfully", "ok");
      
       
      })
    }
    if (this.category.cid != 0 && this.formTile==='Update category') {
      this.catService.addCategory(this.category).subscribe((data) => {
        
        this.snackBar.open("Category updated successfully", "ok");
      })
    }
    setTimeout(()=>{
    this.router.navigate(['admindash/admin/viewcategories']);
  },3000)
  }

}
