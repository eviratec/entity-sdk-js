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
    define(['ApiClient', 'model/UUserIDTClassNameEntityListAttributes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UUserIDTClassNameEntityListAttributes'));
  } else {
    // Browser globals (root is window)
    if (!root.EviratecEntity) {
      root.EviratecEntity = {};
    }
    root.EviratecEntity.EntityAttributeApi = factory(root.EviratecEntity.ApiClient, root.EviratecEntity.UUserIDTClassNameEntityListAttributes);
  }
}(this, function(ApiClient, UUserIDTClassNameEntityListAttributes) {
  'use strict';

  /**
   * EntityAttribute service.
   * @module api/EntityAttributeApi
   * @version 1.0.0
   */

  /**
   * Constructs a new EntityAttributeApi. 
   * @alias module:api/EntityAttributeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteEntityAttributeByAttributeKey operation.
     * @callback module:api/EntityAttributeApi~deleteEntityAttributeByAttributeKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an existing EntityAttribute
     * 
     * @param {Number} userID The ID of the user who owns the resource
     * @param {String} className The EntityType&#39;s ClassName
     * @param {Number} entityID The Entity&#39;s ID
     * @param {String} attributeKey The Attribute&#39;s AttributeKey
     * @param {module:api/EntityAttributeApi~deleteEntityAttributeByAttributeKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteEntityAttributeByAttributeKey = function(userID, className, entityID, attributeKey, callback) {
      var postBody = null;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling deleteEntityAttributeByAttributeKey");
      }

      // verify the required parameter 'className' is set
      if (className == undefined || className == null) {
        throw new Error("Missing the required parameter 'className' when calling deleteEntityAttributeByAttributeKey");
      }

      // verify the required parameter 'entityID' is set
      if (entityID == undefined || entityID == null) {
        throw new Error("Missing the required parameter 'entityID' when calling deleteEntityAttributeByAttributeKey");
      }

      // verify the required parameter 'attributeKey' is set
      if (attributeKey == undefined || attributeKey == null) {
        throw new Error("Missing the required parameter 'attributeKey' when calling deleteEntityAttributeByAttributeKey");
      }


      var pathParams = {
        'UserID': userID,
        'ClassName': className,
        'EntityID': entityID,
        'AttributeKey': attributeKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/U/{UserID}/T/{ClassName}/E/{EntityID}/A/{AttributeKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEntityAttributeByAttributeKey operation.
     * @callback module:api/EntityAttributeApi~getEntityAttributeByAttributeKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UUserIDTClassNameEntityListAttributes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves an existing EntityAttribute
     * 
     * @param {Number} userID The ID of the user who owns the resource
     * @param {String} className The EntityType&#39;s ClassName
     * @param {Number} entityID The Entity&#39;s ID
     * @param {String} attributeKey The Attribute&#39;s AttributeKey
     * @param {module:api/EntityAttributeApi~getEntityAttributeByAttributeKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UUserIDTClassNameEntityListAttributes}
     */
    this.getEntityAttributeByAttributeKey = function(userID, className, entityID, attributeKey, callback) {
      var postBody = null;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling getEntityAttributeByAttributeKey");
      }

      // verify the required parameter 'className' is set
      if (className == undefined || className == null) {
        throw new Error("Missing the required parameter 'className' when calling getEntityAttributeByAttributeKey");
      }

      // verify the required parameter 'entityID' is set
      if (entityID == undefined || entityID == null) {
        throw new Error("Missing the required parameter 'entityID' when calling getEntityAttributeByAttributeKey");
      }

      // verify the required parameter 'attributeKey' is set
      if (attributeKey == undefined || attributeKey == null) {
        throw new Error("Missing the required parameter 'attributeKey' when calling getEntityAttributeByAttributeKey");
      }


      var pathParams = {
        'UserID': userID,
        'ClassName': className,
        'EntityID': entityID,
        'AttributeKey': attributeKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UUserIDTClassNameEntityListAttributes;

      return this.apiClient.callApi(
        '/U/{UserID}/T/{ClassName}/E/{EntityID}/A/{AttributeKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEntityAttributeByAttributeKey operation.
     * @callback module:api/EntityAttributeApi~updateEntityAttributeByAttributeKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} userID The ID of the user who owns the resource
     * @param {String} className The EntityType&#39;s ClassName
     * @param {Number} entityID The Entity&#39;s ID
     * @param {String} attributeKey The Attribute&#39;s AttributeKey
     * @param {module:api/EntityAttributeApi~updateEntityAttributeByAttributeKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateEntityAttributeByAttributeKey = function(userID, className, entityID, attributeKey, callback) {
      var postBody = null;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling updateEntityAttributeByAttributeKey");
      }

      // verify the required parameter 'className' is set
      if (className == undefined || className == null) {
        throw new Error("Missing the required parameter 'className' when calling updateEntityAttributeByAttributeKey");
      }

      // verify the required parameter 'entityID' is set
      if (entityID == undefined || entityID == null) {
        throw new Error("Missing the required parameter 'entityID' when calling updateEntityAttributeByAttributeKey");
      }

      // verify the required parameter 'attributeKey' is set
      if (attributeKey == undefined || attributeKey == null) {
        throw new Error("Missing the required parameter 'attributeKey' when calling updateEntityAttributeByAttributeKey");
      }


      var pathParams = {
        'UserID': userID,
        'ClassName': className,
        'EntityID': entityID,
        'AttributeKey': attributeKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/U/{UserID}/T/{ClassName}/E/{EntityID}/A/{AttributeKey}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
