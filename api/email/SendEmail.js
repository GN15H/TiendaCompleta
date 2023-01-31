import { text } from 'express';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'mandingoscrack@gmail.com',
        pass: 'ijxeuznbmjxhehad'
    }
})

function sendMail(prod) {
    transporter.sendMail({
        from: `tienda <tiendafig@gmail.com`,
        to: "cristobal.ochoa@utp.edu.co",
        subject: `Avisto stock mínimo`,
        text: `El stock del producto ${prod} se esta agotando`
    }).then(console.info)
    .catch(console.catch)
}


export {sendMail};