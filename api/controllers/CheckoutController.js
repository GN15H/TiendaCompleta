import mercadopago from "mercadopago"

const handler = (req, res) =>{
  
  // Here is where we configure our session, setting the access token provided by MP
  mercadopago.configure({
    access_token: "APP_USR-5749759633679659-020122-6e5ffa76569074cdc03ae4c2523de497-1297952377"/*process.env.REACT_APP_ACCESS_TOKEN*/,
  })

 
  // Here we create the "Preference", this is the config for the payment
  const preference= {
    
    binary_mode: true,
   
    items: [
      {
        title: req.body.items[0].title,
        description: req.body.items[0].description,
        picture_url: req.body.items[0].picture_url,
        quantity: req.body.items[0].quantity,
        currency_id: "currency needed (COP, USD, etc)",
        unit_price: req.body.items[0].unit_price
      }
    ],
    // Data of the user * REQUIRED
    payer: {
      name: 'Nick' ,
      surname: 'Snick',
      email: 'cristobalochoacadavid@gmail.com' 
    },
    // When the user finishes the payment, depending of the status of the payment he'll be redirected, you gotta put your custom urls
    back_urls: {
      success: "https://localhost:3000/productos",
      failure: "https://localhost:3000/",
      pending: "https://localhost:3000/carrito"
    } ,
    // This is always "approved"
    auto_return: "approved"
  }
      
  // Here we config the preference, it's like send it to MP and then its API returns a response object.
  // We just need the id from it, so we set the response to { global: response.body.id }. 
  // This will send an object literal where we can access the ID for our frontend button
  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.status(200).json({global: 'melo'})
    })
    .catch((error) => {
      // In an error appears, we'll send the error.
      res.status(500).json({global: 'malo'})
    })
}

export default handler;