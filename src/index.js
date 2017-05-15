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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Entity', 'model/EntityAttribute', 'model/EntityType', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/Model', 'model/Model1', 'model/Model2', 'model/NewEntity', 'model/NewEntityAttribute', 'model/NewEntityType', 'model/NewTypeAttribute', 'model/TypeAttribute', 'model/UUserIDTClassNameEntitiesAttributes', 'model/UUserIDTClassNameEntityListAttributes', 'model/UUserIDTypeListAttributes', 'model/UUserIDTypesAttributes', 'api/EntityApi', 'api/EntityAttributeApi', 'api/EntityTypeApi', 'api/TypeAttributeApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Entity'), require('./model/EntityAttribute'), require('./model/EntityType'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/Model'), require('./model/Model1'), require('./model/Model2'), require('./model/NewEntity'), require('./model/NewEntityAttribute'), require('./model/NewEntityType'), require('./model/NewTypeAttribute'), require('./model/TypeAttribute'), require('./model/UUserIDTClassNameEntitiesAttributes'), require('./model/UUserIDTClassNameEntityListAttributes'), require('./model/UUserIDTypeListAttributes'), require('./model/UUserIDTypesAttributes'), require('./api/EntityApi'), require('./api/EntityAttributeApi'), require('./api/EntityTypeApi'), require('./api/TypeAttributeApi'));
  }
}(function(ApiClient, Entity, EntityAttribute, EntityType, InlineResponse200, InlineResponse2001, Model, Model1, Model2, NewEntity, NewEntityAttribute, NewEntityType, NewTypeAttribute, TypeAttribute, UUserIDTClassNameEntitiesAttributes, UUserIDTClassNameEntityListAttributes, UUserIDTypeListAttributes, UUserIDTypesAttributes, EntityApi, EntityAttributeApi, EntityTypeApi, TypeAttributeApi) {
  'use strict';

  /**
   * _eviratec_com_au_httpswww_eviratec_com_au___3xqt_co_httpwww_3xqt_co.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var EviratecEntityApi = require('index'); // See note below*.
   * var xxxSvc = new EviratecEntityApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new EviratecEntityApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new EviratecEntityApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new EviratecEntityApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Entity model constructor.
     * @property {module:model/Entity}
     */
    Entity: Entity,
    /**
     * The EntityAttribute model constructor.
     * @property {module:model/EntityAttribute}
     */
    EntityAttribute: EntityAttribute,
    /**
     * The EntityType model constructor.
     * @property {module:model/EntityType}
     */
    EntityType: EntityType,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The Model model constructor.
     * @property {module:model/Model}
     */
    Model: Model,
    /**
     * The Model1 model constructor.
     * @property {module:model/Model1}
     */
    Model1: Model1,
    /**
     * The Model2 model constructor.
     * @property {module:model/Model2}
     */
    Model2: Model2,
    /**
     * The NewEntity model constructor.
     * @property {module:model/NewEntity}
     */
    NewEntity: NewEntity,
    /**
     * The NewEntityAttribute model constructor.
     * @property {module:model/NewEntityAttribute}
     */
    NewEntityAttribute: NewEntityAttribute,
    /**
     * The NewEntityType model constructor.
     * @property {module:model/NewEntityType}
     */
    NewEntityType: NewEntityType,
    /**
     * The NewTypeAttribute model constructor.
     * @property {module:model/NewTypeAttribute}
     */
    NewTypeAttribute: NewTypeAttribute,
    /**
     * The TypeAttribute model constructor.
     * @property {module:model/TypeAttribute}
     */
    TypeAttribute: TypeAttribute,
    /**
     * The UUserIDTClassNameEntitiesAttributes model constructor.
     * @property {module:model/UUserIDTClassNameEntitiesAttributes}
     */
    UUserIDTClassNameEntitiesAttributes: UUserIDTClassNameEntitiesAttributes,
    /**
     * The UUserIDTClassNameEntityListAttributes model constructor.
     * @property {module:model/UUserIDTClassNameEntityListAttributes}
     */
    UUserIDTClassNameEntityListAttributes: UUserIDTClassNameEntityListAttributes,
    /**
     * The UUserIDTypeListAttributes model constructor.
     * @property {module:model/UUserIDTypeListAttributes}
     */
    UUserIDTypeListAttributes: UUserIDTypeListAttributes,
    /**
     * The UUserIDTypesAttributes model constructor.
     * @property {module:model/UUserIDTypesAttributes}
     */
    UUserIDTypesAttributes: UUserIDTypesAttributes,
    /**
     * The EntityApi service constructor.
     * @property {module:api/EntityApi}
     */
    EntityApi: EntityApi,
    /**
     * The EntityAttributeApi service constructor.
     * @property {module:api/EntityAttributeApi}
     */
    EntityAttributeApi: EntityAttributeApi,
    /**
     * The EntityTypeApi service constructor.
     * @property {module:api/EntityTypeApi}
     */
    EntityTypeApi: EntityTypeApi,
    /**
     * The TypeAttributeApi service constructor.
     * @property {module:api/TypeAttributeApi}
     */
    TypeAttributeApi: TypeAttributeApi
  };

  return exports;
}));
