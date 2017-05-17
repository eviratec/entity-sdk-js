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
    define(['ApiClient', 'model/UUserIDTypeListAttributes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UUserIDTypeListAttributes'));
  } else {
    // Browser globals (root is window)
    if (!root.EviratecEntity) {
      root.EviratecEntity = {};
    }
    root.EviratecEntity.InlineResponse200 = factory(root.EviratecEntity.ApiClient, root.EviratecEntity.UUserIDTypeListAttributes);
  }
}(this, function(ApiClient, UUserIDTypeListAttributes) {
  'use strict';




  /**
   * The InlineResponse200 model module.
   * @module model/InlineResponse200
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @class
   * @param ID {Number} 
   */
  var exports = function(ID) {
    var _this = this;

    _this['ID'] = ID;









  };

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'Number');
      }
      if (data.hasOwnProperty('ParentID')) {
        obj['ParentID'] = ApiClient.convertToType(data['ParentID'], 'Number');
      }
      if (data.hasOwnProperty('ClassName')) {
        obj['ClassName'] = ApiClient.convertToType(data['ClassName'], 'String');
      }
      if (data.hasOwnProperty('Slug')) {
        obj['Slug'] = ApiClient.convertToType(data['Slug'], 'String');
      }
      if (data.hasOwnProperty('Label')) {
        obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
      }
      if (data.hasOwnProperty('Created')) {
        obj['Created'] = ApiClient.convertToType(data['Created'], 'Date');
      }
      if (data.hasOwnProperty('Modified')) {
        obj['Modified'] = ApiClient.convertToType(data['Modified'], 'Date');
      }
      if (data.hasOwnProperty('Deleted')) {
        obj['Deleted'] = ApiClient.convertToType(data['Deleted'], 'Date');
      }
      if (data.hasOwnProperty('Attributes')) {
        obj['Attributes'] = ApiClient.convertToType(data['Attributes'], [UUserIDTypeListAttributes]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Number} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {Number} ParentID
   */
  exports.prototype['ParentID'] = undefined;
  /**
   * @member {String} ClassName
   */
  exports.prototype['ClassName'] = undefined;
  /**
   * @member {String} Slug
   */
  exports.prototype['Slug'] = undefined;
  /**
   * @member {String} Label
   */
  exports.prototype['Label'] = undefined;
  /**
   * @member {Date} Created
   */
  exports.prototype['Created'] = undefined;
  /**
   * @member {Date} Modified
   */
  exports.prototype['Modified'] = undefined;
  /**
   * @member {Date} Deleted
   */
  exports.prototype['Deleted'] = undefined;
  /**
   * @member {Array.<module:model/UUserIDTypeListAttributes>} Attributes
   */
  exports.prototype['Attributes'] = undefined;



  return exports;
}));


