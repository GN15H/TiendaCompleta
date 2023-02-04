import stripe from 'stripe';

const striper = stripe('sk_test_51MWqvEH14MvRoLxVye8GjkRdwGixPT11Vu7UZfiassFJovGnRSno6zd47JwSBWZ18yY6EacgEGzymBqQkJf0NLAt00DKJZnxsn')

//funcion que permite pagar con stripe
export const pay = (req,res) =>{
    let {id,amount, description} = req.body
    striper.paymentIntent.create({amount:amount*100, description:description, currency:'cop', payment_method:id, confirm:true})
}

