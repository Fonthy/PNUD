const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors((req, callback) => {
    const corsOptions = {
        origin: '*', // Autorise toutes les origines
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes autorisées
        // allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Headers autorisés
        // exposedHeaders: ['Authorization'], // Headers exposés au client
    };
    callback(null, corsOptions);

}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));



const personRoute = require('./routes/personnel')
const recette = require('./routes/recette')
const derivationRecetteRoute = require('./routes/derivationRecette')

const validationDemandeRoute = require('./routes/validationDemande')
const generation_ticket = require('./routes/generationTicket')


const utilisateur_route = require('./routes/utilisateur')
const admin_route = require('./routes/admin')
const public_route = require('./routes/public')
const service_route = require('./routes/service')
const ticket_route = require('./routes/ticket')
const demande_route = require('./routes/demande')

app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});

app.use('/personnel', personRoute)
app.use('/recette', recette)
app.use('./derivationRecette', derivationRecetteRoute)
app.use('/connection', utilisateur_route)
app.use('/validationDemandeRoute', validationDemandeRoute)
app.use('/generationTicket', generation_ticket)

app.use('/admin', admin_route)
app.use('/utilisateur', utilisateur_route)

app.use('/public', public_route)
app.use('/service', service_route)
app.use('/ticket', ticket_route)

app.use('/demande', demande_route)

const port = 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
});
