import { Component, Input } from '@angular/core';
import { SkillService } from '../skill.service';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: Skill[] = [];

  @Input() indice: number;
  @Input() habilidad: Skill;

  constructor(private skillService: SkillService) {};

  ngOnInit(): void {
    this.skills = this.skillService.skills
  }

  mostrarHabilidad(habilidad: Skill) {
    console.log(habilidad)
  }

  eliminarHabilidad(habilidad: Skill) {
    this.skillService.eliminar(habilidad)
  }

  editarHabilidad(skill: Skill, nuevoSkill: number) {
    this.skillService.editar(skill, nuevoSkill)

    this.modoEdicionSkill = !this.modoEdicionSkill
  }

  modoEdicionSkill: boolean = false;

  btnEditarSkill: boolean = false;

  skill: number;

  mensaje(i: number) {

    console.log(`Modo edición es ${this.modoEdicionSkill}`)
  };

  mensajee(i: number) {
    console.log(`Modo edición es ${this.modoEdicionSkill}`)

    console.log(`Indice es ${i}`)

    this.skillService.editar(this.skills[i], 6)
  };

  mostrarEdicion(i: number) {
    this.skill = 10
  }
}