interface IMailTo{
    name:string;
    email:string;
}


interface IMailMessage {
    subject: string;
    email: string;
    attachment?: string[]; //campo opcional
}
//  interface I
interface IMessageDTO {
    to: IMailTo;
    message:IMailMessage;
}

class EmailService {
    sendMail({to,message}:IMessageDTO){
        console.log(`nombre: ${to.name}, correo electrónico: ${to.email}`)
    }
}
export default EmailService;