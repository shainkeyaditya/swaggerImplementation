const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const port = process.env.PORT || 5000


const swaggerOptions = {
    swaggerDefinition: {
        info:{
            title: 'customer api',
            description:'customer api info',
            contact:{
                name:'Shainkey Aditya Jain'
            },
            servers:["http://localhost:5000"]
        },
    },   // route
    apis:["app.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions );
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/customer', (req, res) => {
    res.status(200);
    res.send("Customer data");
})
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})