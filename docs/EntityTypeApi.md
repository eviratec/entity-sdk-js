# EviratecEntityApi.EntityTypeApi

All URIs are relative to *https://entity-api.preview.eviratec.software*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEntityType**](EntityTypeApi.md#createEntityType) | **POST** /U/{UserID}/Types | Creates a new EntityType
[**getEntityTypeByClassName**](EntityTypeApi.md#getEntityTypeByClassName) | **GET** /U/{UserID}/T/{ClassName} | Retrieves an existing EntityType
[**getEntityTypeList**](EntityTypeApi.md#getEntityTypeList) | **GET** /U/{UserID}/Type/List | Retrieves a list of Types


<a name="createEntityType"></a>
# **createEntityType**
> createEntityType(model, userID)

Creates a new EntityType



### Example
```javascript
var EviratecEntityApi = require('entity-sdk');

var apiInstance = new EviratecEntityApi.EntityTypeApi();

var model = new EviratecEntityApi.Model(); // Model | The new **EntityType** to add

var userID = 3.4; // Number | The ID of the user who owns the resource


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createEntityType(model, userID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**Model**](Model.md)| The new **EntityType** to add | 
 **userID** | **Number**| The ID of the user who owns the resource | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntityTypeByClassName"></a>
# **getEntityTypeByClassName**
> InlineResponse200 getEntityTypeByClassName(userID, className)

Retrieves an existing EntityType



### Example
```javascript
var EviratecEntityApi = require('entity-sdk');

var apiInstance = new EviratecEntityApi.EntityTypeApi();

var userID = 3.4; // Number | The ID of the user who owns the resource

var className = "className_example"; // String | The EntityType's ClassName


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEntityTypeByClassName(userID, className, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **Number**| The ID of the user who owns the resource | 
 **className** | **String**| The EntityType&#39;s ClassName | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntityTypeList"></a>
# **getEntityTypeList**
> [InlineResponse200] getEntityTypeList(userID)

Retrieves a list of Types



### Example
```javascript
var EviratecEntityApi = require('entity-sdk');

var apiInstance = new EviratecEntityApi.EntityTypeApi();

var userID = 3.4; // Number | The ID of the user who owns the resource


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEntityTypeList(userID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **Number**| The ID of the user who owns the resource | 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

