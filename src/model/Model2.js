/**
 * Eviratec Entity API
 * [eviratec.com.au](https://www.eviratec.com.au) / [3xqt.co](http://www.3xqt.co)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UUserIDTClassNameEntitiesAttributes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UUserIDTClassNameEntitiesAttributes'));
  } else {
    // Browser globals (root is window)
    if (!root.EviratecEntity) {
      root.EviratecEntity = {};
    }
    root.EviratecEntity.Model2 = factory(root.EviratecEntity.ApiClient, root.EviratecEntity.UUserIDTClassNameEntitiesAttributes);
  }
}(this, function(ApiClient, UUserIDTClassNameEntitiesAttributes) {
  'use strict';




  /**
   * The Model2 model module.
   * @module model/Model2
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Model2</code>.
   * @alias module:model/Model2
   * @class
   * @param typeID {Number} 
   * @param attributes {Array.<module:model/UUserIDTClassNameEntitiesAttributes>} 
   */
  var exports = function(typeID, attributes) {
    var _this = this;

    _this['TypeID'] = typeID;
    _this['Attributes'] = attributes;
  };

  /**
   * Constructs a <code>Model2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Model2} obj Optional instance to populate.
   * @return {module:model/Model2} The populated <code>Model2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TypeID')) {
        obj['TypeID'] = ApiClient.convertToType(data['TypeID'], 'Number');
      }
      if (data.hasOwnProperty('Attributes')) {
        obj['Attributes'] = ApiClient.convertToType(data['Attributes'], [UUserIDTClassNameEntitiesAttributes]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} TypeID
   */
  exports.prototype['TypeID'] = undefined;
  /**
   * @member {Array.<module:model/UUserIDTClassNameEntitiesAttributes>} Attributes
   */
  exports.prototype['Attributes'] = undefined;



  return exports;
}));


