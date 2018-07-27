const db = require(`../models/index.js`);

/**
 * Class AuthController
 */
class AuthController {
  /**
   * @param {*} req
   * @param {*} res
   */

  login(req, res) {
    res.render("user/login");
  }
  logout(req, res) {
    res.redirect("/user/login");
  }

  register(req, res) {
    if (req.method == "POST") {
      bcrypt.hash(req.body.password, null, null, (err, hash) => {
        db.Users.create({ ...req.body, ...{ password: hash } }).then(user => {
          res.redirect("/user/login");
        });
      });
    } else {
      res.render("user/register");
    }
  }
  my_account(req, res) {
    const user = req.user;
    res.render("user/my_account", { user, message: req.flash("error") });
  }
}

module.exports = AuthController;
