# antenny.RegistrationApi

All URIs are relative to *https://api.antenny.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRegistration**](RegistrationApi.md#getRegistration) | **GET** /customers/{custId}/registration | Gets a customers registration



## getRegistration

> Registration getRegistration(custId)

Gets a customers registration

### Example

```javascript
import antenny from 'antenny-js';
let defaultClient = antenny.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new antenny.RegistrationApi();
let custId = null; // String | Customer Id for registration
apiInstance.getRegistration(custId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custId** | [**String**](.md)| Customer Id for registration | 

### Return type

[**Registration**](Registration.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

