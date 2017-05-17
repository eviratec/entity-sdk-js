# EviratecEntity.TypeAttributeApi

All URIs are relative to *https://entity-api.preview.eviratec.software*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTypeAttribute**](TypeAttributeApi.md#createTypeAttribute) | **POST** /U/{UserID}/T/{ClassName}/Attributes | Creates a new TypeAttribute
[**getTypeAttributeByAttributeKey**](TypeAttributeApi.md#getTypeAttributeByAttributeKey) | **GET** /U/{UserID}/T/{ClassName}/A/{AttributeKey} | Retrieves an existing TypeAttribute
[**updateTypeAttributeByAttributeKey**](TypeAttributeApi.md#updateTypeAttributeByAttributeKey) | **PUT** /U/{UserID}/T/{ClassName}/A/{AttributeKey} | 


<a name="createTypeAttribute"></a>
# **createTypeAttribute**
> createTypeAttribute(model, userID, className)

Creates a new TypeAttribute



### Example
```javascript
var EviratecEntity = require('entity-sdk');

var apiInstance = new EviratecEntity.TypeAttributeApi();

var model = new EviratecEntity.Model1(); // Model1 | The new **TypeAttribute** to add

var userID = 3.4; // Number | The ID of the user who owns the resource

var className = "className_example"; // String | The EntityType's ClassName


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createTypeAttribute(model, userID, className, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**Model1**](Model1.md)| The new **TypeAttribute** to add | 
 **userID** | **Number**| The ID of the user who owns the resource | 
 **className** | **String**| The EntityType&#39;s ClassName | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTypeAttributeByAttributeKey"></a>
# **getTypeAttributeByAttributeKey**
> UUserIDTypeListAttributes getTypeAttributeByAttributeKey(userID, className, attributeKey)

Retrieves an existing TypeAttribute



### Example
```javascript
var EviratecEntity = require('entity-sdk');

var apiInstance = new EviratecEntity.TypeAttributeApi();

var userID = 3.4; // Number | The ID of the user who owns the resource

var className = "className_example"; // String | The EntityType's ClassName

var attributeKey = "attributeKey_example"; // String | The Attribute's AttributeKey


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTypeAttributeByAttributeKey(userID, className, attributeKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **Number**| The ID of the user who owns the resource | 
 **className** | **String**| The EntityType&#39;s ClassName | 
 **attributeKey** | **String**| The Attribute&#39;s AttributeKey | 

### Return type

[**UUserIDTypeListAttributes**](UUserIDTypeListAttributes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTypeAttributeByAttributeKey"></a>
# **updateTypeAttributeByAttributeKey**
> updateTypeAttributeByAttributeKey(userID, className, attributeKey)





### Example
```javascript
var EviratecEntity = require('entity-sdk');

var apiInstance = new EviratecEntity.TypeAttributeApi();

var userID = 3.4; // Number | The ID of the user who owns the resource

var className = "className_example"; // String | The EntityType's ClassName

var attributeKey = "attributeKey_example"; // String | The Attribute's AttributeKey


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateTypeAttributeByAttributeKey(userID, className, attributeKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **Number**| The ID of the user who owns the resource | 
 **className** | **String**| The EntityType&#39;s ClassName | 
 **attributeKey** | **String**| The Attribute&#39;s AttributeKey | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

