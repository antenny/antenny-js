# antenny.SubscriptionApi

All URIs are relative to *https://api.antenny.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscription**](SubscriptionApi.md#cancelSubscription) | **PATCH** /subscriptions/{subId} | Cancels a subscription
[**createSubscription**](SubscriptionApi.md#createSubscription) | **POST** /subscriptions | Creates a subscription
[**getSubscription**](SubscriptionApi.md#getSubscription) | **GET** /subscriptions/{subId} | Gets a subscription
[**listSubscriptions**](SubscriptionApi.md#listSubscriptions) | **GET** /customers/{custId}/subscriptions | Gets a list of subscriptions



## cancelSubscription

> cancelSubscription(subId, inlineObject)

Cancels a subscription

Cancels a subscription for a customer

### Example

```javascript
import antenny from 'antenny-js';
let defaultClient = antenny.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new antenny.SubscriptionApi();
let subId = null; // String | Subscription id
let inlineObject = new antenny.InlineObject(); // InlineObject | 
apiInstance.cancelSubscription(subId, inlineObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subId** | [**String**](.md)| Subscription id | 
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## createSubscription

> Subscription createSubscription(newSubscription)

Creates a subscription

Creates a new subscription

### Example

```javascript
import antenny from 'antenny-js';
let defaultClient = antenny.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new antenny.SubscriptionApi();
let newSubscription = new antenny.NewSubscription(); // NewSubscription | 
apiInstance.createSubscription(newSubscription).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newSubscription** | [**NewSubscription**](NewSubscription.md)|  | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSubscription

> Subscription getSubscription(subId)

Gets a subscription

Gets a subscription

### Example

```javascript
import antenny from 'antenny-js';
let defaultClient = antenny.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new antenny.SubscriptionApi();
let subId = null; // String | Subscription id
apiInstance.getSubscription(subId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subId** | [**String**](.md)| Subscription id | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSubscriptions

> SubscriptionList listSubscriptions(custId, opts)

Gets a list of subscriptions

Lists subscriptions for a customer

### Example

```javascript
import antenny from 'antenny-js';
let defaultClient = antenny.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new antenny.SubscriptionApi();
let custId = "custId_example"; // String | Customer Id to get subscriptions
let opts = {
  'sort': "sort_example", // String | Defines sort direction
  'limit': 56, // Number | Limits the number of returned items
  'startKey': "startKey_example" // String | Defines start of page of results
};
apiInstance.listSubscriptions(custId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custId** | **String**| Customer Id to get subscriptions | 
 **sort** | **String**| Defines sort direction | [optional] 
 **limit** | **Number**| Limits the number of returned items | [optional] 
 **startKey** | **String**| Defines start of page of results | [optional] 

### Return type

[**SubscriptionList**](SubscriptionList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

