# EviratecEntityApi.EntityApi

All URIs are relative to *https://entity-api.preview.eviratec.software*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEntity**](EntityApi.md#createEntity) | **POST** /U/{UserID}/T/{ClassName}/Entities | Creates a new Entity
[**deleteEntityByEntityID**](EntityApi.md#deleteEntityByEntityID) | **DELETE** /U/{UserID}/T/{ClassName}/E/{EntityID} | Deletes an existing Entity
[**getEntityByEntityID**](EntityApi.md#getEntityByEntityID) | **GET** /U/{UserID}/T/{ClassName}/E/{EntityID} | Retrieves an existing Entity
[**getEntityList**](EntityApi.md#getEntityList) | **GET** /U/{UserID}/T/{ClassName}/Entity/List | Retrieves a list of Entities


<a name="createEntity"></a>
# **createEntity**
> createEntity(model, userID, className)

Creates a new Entity



### Example
```javascript
var EviratecEntityApi = require('eviratec_entity_api');

var apiInstance = new EviratecEntityApi.EntityApi();

var model = new EviratecEntityApi.Model2(); // Model2 | The new **Entity** to add

var userID = 3.4; // Number | The ID of the user who owns the resource

var className = "className_example"; // String | The EntityType's ClassName


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createEntity(model, userID, className, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**Model2**](Model2.md)| The new **Entity** to add | 
 **userID** | **Number**| The ID of the user who owns the resource | 
 **className** | **String**| The EntityType&#39;s ClassName | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEntityByEntityID"></a>
# **deleteEntityByEntityID**
> deleteEntityByEntityID(userID, className, entityID)

Deletes an existing Entity



### Example
```javascript
var EviratecEntityApi = require('eviratec_entity_api');

var apiInstance = new EviratecEntityApi.EntityApi();

var userID = 3.4; // Number | The ID of the user who owns the resource

var className = "className_example"; // String | The EntityType's ClassName

var entityID = 3.4; // Number | The Entity's ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEntityByEntityID(userID, className, entityID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **Number**| The ID of the user who owns the resource | 
 **className** | **String**| The EntityType&#39;s ClassName | 
 **entityID** | **Number**| The Entity&#39;s ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntityByEntityID"></a>
# **getEntityByEntityID**
> InlineResponse2001 getEntityByEntityID(userID, className, entityID)

Retrieves an existing Entity



### Example
```javascript
var EviratecEntityApi = require('eviratec_entity_api');

var apiInstance = new EviratecEntityApi.EntityApi();

var userID = 3.4; // Number | The ID of the user who owns the resource

var className = "className_example"; // String | The EntityType's ClassName

var entityID = 3.4; // Number | The Entity's ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEntityByEntityID(userID, className, entityID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **Number**| The ID of the user who owns the resource | 
 **className** | **String**| The EntityType&#39;s ClassName | 
 **entityID** | **Number**| The Entity&#39;s ID | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntityList"></a>
# **getEntityList**
> [InlineResponse2001] getEntityList(userID, className)

Retrieves a list of Entities



### Example
```javascript
var EviratecEntityApi = require('eviratec_entity_api');

var apiInstance = new EviratecEntityApi.EntityApi();

var userID = 3.4; // Number | The ID of the user who owns the resource

var className = "className_example"; // String | The EntityType's ClassName


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEntityList(userID, className, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **Number**| The ID of the user who owns the resource | 
 **className** | **String**| The EntityType&#39;s ClassName | 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

