import { Skill } from "./skill.model";

export class SkillService {
    skills: Skill[] = [
        new Skill("HTML", 7),
        new Skill("CSS", 5),
        new Skill("Programación", 5),
        new Skill("JavaScript", 5),
        new Skill("Angular", 6)
    ]

    eliminar(habilidad: Skill) {
        const indice: number = this.skills.indexOf(habilidad)

        this.skills.splice(indice,1)
    }

    editar(habilidad: Skill, nuevoSkill: number) {
        habilidad.skill = nuevoSkill
    }
}