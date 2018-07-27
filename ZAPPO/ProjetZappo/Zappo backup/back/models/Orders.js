const { dateToLocale } = require('../lib/parseDate');
/**
 *  Model Order
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Order = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "orders", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      comments: {
        type: DataTypes.STRING
      },
      validation_time: {
        type: DataTypes.DATEONLY,
        get() {
          return dateToLocale(this.getDataValue('validation_time'));
        }
      },
      total: {
        type: DataTypes.FLOAT,
        isNumber: {
          msg: "Invalid price"
        }
      },
      state: {
        type: DataTypes.DATE
      },
      createdAt: {
        type: DataTypes.DATE,
        get() {
          return dateToLocale(this.getDataValue('createdAt'));
        },
      },
      updatedAt: {
        type: DataTypes.DATE,
        get() {
          return dateToLocale(this.getDataValue('updatedAt'));
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        isInt: {
          msg: "It's not a Integer"
        }
      }
    }, {
      tableName: "orders",
      timestamps: false,
      underscored: true
    }
  );
  Order.associate = function (models) {
    Order.belongsToMany(models.products, {
      through: "order_products",
      foreignKey: "order_id"
    });
    Order.belongsTo(models.users);
  };
  return Order;
};

module.exports = Order;