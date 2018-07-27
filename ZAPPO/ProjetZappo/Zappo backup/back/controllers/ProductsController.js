const db = require(`../models/index.js`);
const _ = require("lodash");
/**produits
 * Class Products Controller
 */
class ProductsController {
  /**
   * Exemple
   * @param {*} req
   * @param {*} res
   */
  products(req, res) {
    db.products.findAll({include:[{model:db.category}]}).then(resultats => {
      const results = _.groupBy(resultats, element => element.sub_category);
      res.render("products/productsList", { results});
    });
  }

  productsByCategory(req, res) {
    db.products
      .findAll({ where: { category_id: req.params.category_id } })
      .then(resultats => {
        const results = _.groupBy(resultats, element => element.sub_category);
        res.render("products/productsList", { results });
      });
  }

  /////////////////////////////////////////////
  //         Adding a product in DB          //
  /////////////////////////////////////////////

  // Formulaire d'ajout de produit
  addProduct(req, res) {
    res.render("products/editProduct");
  }

  // Creation de l'entrée en base
  createProduct(req, res) {
    db.products.create(req.body).then(resultat => {
      req.flash("success", "Produit ajouté avec succès");
      res.redirect("/admin/produits");
    });
  }

  /////////////////////////////////////////////
  //        Update of the items in DBB       //
  /////////////////////////////////////////////

  // 1. formulaire
  editProduct(req, res) {
    db.products.findById(req.params.id).then(product => {
      res.render("products/editProduct", { product });
    });
  }

  // 2. update of the database
  updateProduct(req, res) {
    if(!req.body.allergens)req.body.allergens={};
    db.products
      .update(req.body, { where: { id: req.params.id } })
      .then(product => {
        req.flash("success", "Produit modifié avec succès");
        res.redirect(`/admin/produits/editer/${req.params.id}`);
      });
  }

  // 3. toggle visibility of the product
  toggleVisibility(req, res) {
    db.products.findById(req.params.id)
      .then(product => {
        req.flash("success", product.state ? `${product.name} désactivé` : `${product.name} activé`);
        product.state ^=1;
        product.save();
        res.redirect("/admin/produits");
      });
  }
}

module.exports = ProductsController;
