import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage implements OnInit {
  categoriaForm: FormGroup = new FormGroup({ nombrecategoria: new FormControl('') });

  constructor(
    private categoriaService: CategoriasService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.categoriaForm = this.fb.group({ nombrecategoria: [''] });
  }

  formSubmit() {
    if (!this.categoriaForm.valid) {
      return false;
    } else {
      this.categoriaService.crearCategoria(this.categoriaForm.value).then((res: any) => {
        console.log(res);
        this.categoriaForm.reset();
        this.router.navigate(['/categorias']);
      }).catch((err: any) => {
        console.log(err);
      });
      return true;
    }
  }

}
