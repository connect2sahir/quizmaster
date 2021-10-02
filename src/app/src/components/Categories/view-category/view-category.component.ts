import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/src/services/categories.service';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  public category!: Category[];

  constructor(private categoryService: CategoriesService,private router:Router) { }

  ngOnInit(): void {
    this.categoryService.viewallcategories().subscribe((data) => {
      this.category = data;
    })
  }
  deletcat(cid: number) {
    this.categoryService.deletecat(cid).subscribe();
    window.location.reload();
  }

  addCat(){
    this.router.navigate(['admindash/admin/addcategory']);
  }

  update(c:Category){
    this.router.navigate(['admindash/admin/addcategory',c.cid]);
  }
}
