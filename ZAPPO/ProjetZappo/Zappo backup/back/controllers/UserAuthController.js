const db = require(`../models/index.js`);
const { hashPassword } = require("../middlewares/bcryptPassword");
/**
 * Class UserAuthController
 */
class UserAuthController {
  /**
   * @param {*} req
   * @param {*} res
   */

  logout(req, res) {
    req.logout();
    res.redirect("/user/login");
  }

  myAccount(req, res) {
    const user = req.user;
    res.json(user);
  }

  create(req, res) {
    const user = req.body;
    const currentUser = hashPassword(user, user.password);
    currentUser.then(newUser =>
      db.users.create(newUser).then(newUser => res.json(newUser))
    );
  }

  modify(req, res) {
    const user = req.body;
    res.json(user);
  }

  update(req, res) {
    const user = req.body;
    const currentUser = hashPassword(user, user.password);
    currentUser.then(newUser => {
      db.users
        .update(newUser, { where: { id: req.params.id } })
        .then(user => {
          res.json(user);
        });
    });
  }


  delete(req, res) {
    db.users.findById(req.params.id).then(user => {
      user.destroy().then(() => {
        res.json({flash:"Compte Supprimé"});
      });
    });
  }


  lostPassword(req, res) {
    const user = req.user;
    res.render("user/lostPassword");
  }
}

module.exports = UserAuthController;
