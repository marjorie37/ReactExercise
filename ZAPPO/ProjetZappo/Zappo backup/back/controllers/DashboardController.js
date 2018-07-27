const db = require(`../models/index.js`);
const _ = require('lodash');
const { dateNow, localeToDate, timestampToLocale }= require('../lib/parseDate');

/**
 * Class Admin Controller
 */
class DashboardController {
    /**
     * Exemple
     * @param {*} req
     * @param {*} res
     */
    dashboard(req, res) {
        
       
        async function dash() {
            const orders = await db.orders.findAll({
                where: {
                    validation_time: localeToDate(dateNow())
                },
                include: [{
                    model: db.products
                }]
            }).then(results => results);
            const users = await db.users.findAll().then(users => users);
            const resultats = _.filter(orders, {
                state: "done"
            });
            const todayUser = users.filter(elt => timestampToLocale(elt.createdAt) === dateNow());
            const CA = orders.reduce((acc, elt) => acc + elt.total, 0);
            const panier = CA / orders.length;
            const product = orders.map(elt => {
                const pizza = elt.products.filter(el => el.category_id === 1);
                return pizza.length;
            });
            const nbPizza = product.reduce((acc, el) => acc + el, 0);
            const donnees = {
                panier: panier ? `${panier} €` : 0,
                ca: CA > 0 ? `${panier} €` : "Aucune commande",
                users: todayUser.length,
                pizza: nbPizza
            };
            res.render("admin/dashboard", {
                donnees,
                user:req.user
            })
        }
        dash();
        


    }

}

module.exports = DashboardController;