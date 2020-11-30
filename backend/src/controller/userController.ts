import {Request,Response} from 'express'
import EmailService from '../services/EmailServices'

const userGroup = [
    {name: 'Jorge',idade: '50'},
    {name: 'Mateus',idade: '19'},
]

export default {
    async index(req:Request,res:Response){
        return res.json(userGroup)
    },
    async create(req:Request,res:Response){
        const emailService = new EmailService;

        emailService.sendMail({
            to: {
                name:'jose',
                email:'jose@email.com'
            },
            message: {
                subject:'nothing',
                email:'fop@yahoo.com'
            }
        })
    }
}