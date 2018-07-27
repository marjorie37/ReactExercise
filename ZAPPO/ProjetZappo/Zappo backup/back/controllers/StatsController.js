const db = require(`../models/index.js`);

class StatsController {
  stats(req, res) {
    db.orders
      .findAll({
        include: [{ model: db.products }, { model: db.users }]
      })
      .then(stats => {
        console.log('====================================');
        console.log(stats);
        console.log('====================================');
        res.render("stats/statistiques", { stats });
      });
  }
}

module.exports = StatsController;
