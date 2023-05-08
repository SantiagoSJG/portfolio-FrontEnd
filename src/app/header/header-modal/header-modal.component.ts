import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.css']
})
export class HeaderModalComponent {
  constructor(private sanitizer: DomSanitizer,
    private rest: RestService
    ) {}

  archivos: any = [];

  previsualizacion: string = "";

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        reject({
          base: null
        });
      };
    } catch (e) {
    base: null;
    }
  })

  recomendacionImagen: boolean = true;
  errorImagen: boolean = false;

  @ViewChild('archivoInput') inputFile: ElementRef;
  @ViewChild('nuevaImagen') imagen: ElementRef;
  @ViewChild('hooola') imagenVieja: ElementRef;

  capturarImagen(event: any) {
    
    console.log(this.imagenVieja.nativeElement.src)

    const imagenCapturada = event.target.files[0];

    let extPermitidas = /\.(png|jpe?g)$/i;

    console.log(this.imagen.nativeElement.src)

    if(!extPermitidas.exec(imagenCapturada.name)) {
      this.recomendacionImagen = false;
      this.errorImagen = true;
      this.imagen.nativeElement.src = "";
    } else {
      // this.extraerBase64(imagenCapturada).then((imagen:any) => {
      //   this.previsualizacion = imagen.base;
      //   console.log(imagen);
      // });
      
      // this.archivos.push(imagenCapturada);
      console.log(imagenCapturada)
      console.log(this.imagen)
      if (imagenCapturada) {
        this.recomendacionImagen = false;
        this.errorImagen = false;
  
        let imagenNueva = this.imagen
        console.log(imagenNueva)
  
        const visor = new FileReader();
  
        visor.onload = (e) => {
          console.log(e.target?.result)
          imagenNueva.nativeElement.src = e.target?.result;

          console.log(imagenNueva.nativeElement.innerHTML)
        }
  
        visor.readAsDataURL(imagenCapturada)
      }
    }
  }

  subirImagen(): any {
    try {
      const formulario = new FormData();
      this.archivos.forEach((archivo: string | Blob) => {
        formulario.append('files', archivo)
        console.log(archivo);
      });

      this.rest.post('http://localhost:3001/upload', formulario)
      .subscribe((res: any) => {
        console.log('Respuesta del servidor ', res)
      });

    } catch (e) {
      console.log('Error ' + e);
    }
  }
}