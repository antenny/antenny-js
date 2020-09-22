# antenny.EventsApi

All URIs are relative to *https://api.antenny.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listEvents**](EventsApi.md#listEvents) | **GET** /subscriptions/{subId}/events | Gets a list of events for a subscription



## listEvents

> EventList listEvents(subId, opts)

Gets a list of events for a subscription

Lists events for a subscription

### Example

```javascript
import antenny from 'antenny-js';
let defaultClient = antenny.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new antenny.EventsApi();
let subId = null; // String | Subscription id
let opts = {
  'sort': "sort_example", // String | Defines sort direction
  'level': "level_example", // String | Filters events by level
  'limit': 56, // Number | Limits the number of returned items
  'startKey': "startKey_example" // String | Defines start of page of results
};
apiInstance.listEvents(subId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subId** | [**String**](.md)| Subscription id | 
 **sort** | **String**| Defines sort direction | [optional] 
 **level** | **String**| Filters events by level | [optional] 
 **limit** | **Number**| Limits the number of returned items | [optional] 
 **startKey** | **String**| Defines start of page of results | [optional] 

### Return type

[**EventList**](EventList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

