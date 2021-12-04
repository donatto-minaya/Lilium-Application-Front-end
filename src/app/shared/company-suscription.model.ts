export class CompanySuscription {
    company_id:string = JSON.stringify(JSON.parse(localStorage.getItem('id') || '{}'));
    rol_id:number;
    business_id:number;
    company_name:string = localStorage.getItem('nombre') || "";
    company_time_open:number;
    company_time_close:number;
    company_age:string = localStorage.getItem('edad') || ""
    company_password:string = localStorage.getItem('clave') || "";
    company_email:string = localStorage.getItem('correo') || "";
    company_paypal_email:string;
    company_mastercard_email:string;
    company_phone:string = localStorage.getItem('telefono') || "";
}
