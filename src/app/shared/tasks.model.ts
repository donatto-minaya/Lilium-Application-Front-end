export class Tasks {
    task_id:number;
    company_id:string = JSON.stringify(JSON.parse(localStorage.getItem('id') || '{}'));;
    title:string;
    fechaInicio:string;
    fechaTerminada:string;
}
