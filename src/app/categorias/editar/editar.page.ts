import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  actualizarForm: FormGroup = new FormGroup({ nombrecategoria: new FormControl('') });
  id: string = '';

  constructor(
    private categoriaService: CategoriasService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.activateRoute.snapshot.paramMap.get('categoriaid')!;
    this.categoriaService.obtenerCategoria(this.id).valueChanges().subscribe((res: any) => {
      this.actualizarForm.setValue(res);
    });
  }

  ngOnInit() {
    this.actualizarForm = this.fb.group({
      nombrecategoria: ['']
    });
  }

  actuaForm() {
    this.categoriaService.actualizarCategoria(this.id, this.actualizarForm.value)
      .then((res: any) => {
        this.router.navigate(['/categorias']);
      })
      .catch((err: any) => {
        console.log(err);
      })
  }

}
