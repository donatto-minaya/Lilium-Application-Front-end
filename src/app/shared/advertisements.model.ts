export class Advertisements {
    titulo:string;
    descripcion:string;
    empresa:string;
    negocio:string;
    descripcionNegocio:string;
    tipoJornada:string;
    fechaCreacion:string;

    // Para el post
    title:string;
    company_id:string = JSON.stringify(JSON.parse(localStorage.getItem('id') || '{}'));
    description:string;
    tipoJornadaId:string;
    fechaCreada:string;
}
