const { createTime } = require('../lib/parseDate');

/**
 *  Model Discounts
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Discounts = (sequelize, DataTypes) => {
    const Discounts = sequelize.define(
        "discounts", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50)
            },
            endAt: {
                type: DataTypes.DATE
            },
            discount_items: {
                type: DataTypes.TEXT,
                notEmpty:true,
                defaultValue:{},
                get() {
                    return JSON.parse(this.getDataValue('discount_items'));
                },
                set(val) {
                    this.setDataValue('discount_items', JSON.stringify(val));
                }
            },
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
            code: {
                type: DataTypes.STRING(15),
                notEmpty: true
            }
        },
        {
          tableName: "discounts",
          underscored: true,
          timestamps: false,
          getterMethods: {
            jsonToStr() {
              return Object.values(this.discount_items)
                .map(el => "* " + el)
                .join(" ");
            }
          }
        }
      );
    return Discounts;
  };

module.exports = Discounts;
