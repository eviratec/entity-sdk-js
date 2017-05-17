# EviratecEntityApi.EntityAttributeApi

All URIs are relative to *https://entity-api.preview.eviratec.software*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEntityAttributeByAttributeKey**](EntityAttributeApi.md#deleteEntityAttributeByAttributeKey) | **DELETE** /U/{UserID}/T/{ClassName}/E/{EntityID}/A/{AttributeKey} | Deletes an existing EntityAttribute
[**getEntityAttributeByAttributeKey**](EntityAttributeApi.md#getEntityAttributeByAttributeKey) | **GET** /U/{UserID}/T/{ClassName}/E/{EntityID}/A/{AttributeKey} | Retrieves an existing EntityAttribute
[**updateEntityAttributeByAttributeKey**](EntityAttributeApi.md#updateEntityAttributeByAttributeKey) | **PUT** /U/{UserID}/T/{ClassName}/E/{EntityID}/A/{AttributeKey} | 


<a name="deleteEntityAttributeByAttributeKey"></a>
# **deleteEntityAttributeByAttributeKey**
> deleteEntityAttributeByAttributeKey(userID, className, entityID, attributeKey)

Deletes an existing EntityAttribute



### Example
```javascript
var EviratecEntityApi = require('entity-sdk');

var apiInstance = new EviratecEntityApi.EntityAttributeApi();

var userID = 3.4; // Number | The ID of the user who owns the resource

var className = "className_example"; // String | The EntityType's ClassName

var entityID = 3.4; // Number | The Entity's ID

var attributeKey = "attributeKey_example"; // String | The Attribute's AttributeKey


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEntityAttributeByAttributeKey(userID, className, entityID, attributeKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **Number**| The ID of the user who owns the resource | 
 **className** | **String**| The EntityType&#39;s ClassName | 
 **entityID** | **Number**| The Entity&#39;s ID | 
 **attributeKey** | **String**| The Attribute&#39;s AttributeKey | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntityAttributeByAttributeKey"></a>
# **getEntityAttributeByAttributeKey**
> UUserIDTClassNameEntityListAttributes getEntityAttributeByAttributeKey(userID, className, entityID, attributeKey)

Retrieves an existing EntityAttribute



### Example
```javascript
var EviratecEntityApi = require('entity-sdk');

var apiInstance = new EviratecEntityApi.EntityAttributeApi();

var userID = 3.4; // Number | The ID of the user who owns the resource

var className = "className_example"; // String | The EntityType's ClassName

var entityID = 3.4; // Number | The Entity's ID

var attributeKey = "attributeKey_example"; // String | The Attribute's AttributeKey


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEntityAttributeByAttributeKey(userID, className, entityID, attributeKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **Number**| The ID of the user who owns the resource | 
 **className** | **String**| The EntityType&#39;s ClassName | 
 **entityID** | **Number**| The Entity&#39;s ID | 
 **attributeKey** | **String**| The Attribute&#39;s AttributeKey | 

### Return type

[**UUserIDTClassNameEntityListAttributes**](UUserIDTClassNameEntityListAttributes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateEntityAttributeByAttributeKey"></a>
# **updateEntityAttributeByAttributeKey**
> updateEntityAttributeByAttributeKey(userID, className, entityID, attributeKey)





### Example
```javascript
var EviratecEntityApi = require('entity-sdk');

var apiInstance = new EviratecEntityApi.EntityAttributeApi();

var userID = 3.4; // Number | The ID of the user who owns the resource

var className = "className_example"; // String | The EntityType's ClassName

var entityID = 3.4; // Number | The Entity's ID

var attributeKey = "attributeKey_example"; // String | The Attribute's AttributeKey


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateEntityAttributeByAttributeKey(userID, className, entityID, attributeKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **Number**| The ID of the user who owns the resource | 
 **className** | **String**| The EntityType&#39;s ClassName | 
 **entityID** | **Number**| The Entity&#39;s ID | 
 **attributeKey** | **String**| The Attribute&#39;s AttributeKey | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

