# antenny.ClientApi

All URIs are relative to *https://api.antenny.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClient**](ClientApi.md#createClient) | **POST** /clients | Creates a client
[**deleteClient**](ClientApi.md#deleteClient) | **DELETE** /clients/{clientId} | Deletes a client
[**getClient**](ClientApi.md#getClient) | **GET** /clients/{clientId} | Gets a client
[**listClients**](ClientApi.md#listClients) | **GET** /customers/{custId}/clients | Gets a list of clients



## createClient

> Client createClient(newClient)

Creates a client

Creates a new client

### Example

```javascript
import antenny from 'antenny-js';
let defaultClient = antenny.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new antenny.ClientApi();
let newClient = new antenny.NewClient(); // NewClient | 
apiInstance.createClient(newClient).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newClient** | [**NewClient**](NewClient.md)|  | 

### Return type

[**Client**](Client.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteClient

> deleteClient(clientId)

Deletes a client

Deletes a client

### Example

```javascript
import antenny from 'antenny-js';
let defaultClient = antenny.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new antenny.ClientApi();
let clientId = null; // String | Client Id to get
apiInstance.deleteClient(clientId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**String**](.md)| Client Id to get | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getClient

> Client getClient(clientId)

Gets a client

Gets a client for a customer

### Example

```javascript
import antenny from 'antenny-js';
let defaultClient = antenny.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new antenny.ClientApi();
let clientId = null; // String | Client Id to get
apiInstance.getClient(clientId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**String**](.md)| Client Id to get | 

### Return type

[**Client**](Client.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listClients

> ClientList listClients(custId, opts)

Gets a list of clients

List of clients for a customer

### Example

```javascript
import antenny from 'antenny-js';
let defaultClient = antenny.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new antenny.ClientApi();
let custId = "custId_example"; // String | Customer Id to get clients for
let opts = {
  'sort': "sort_example", // String | Defines sort direction
  'limit': 56, // Number | Limits the number of returned items
  'startKey': "startKey_example" // String | Defines start of page of results
};
apiInstance.listClients(custId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custId** | **String**| Customer Id to get clients for | 
 **sort** | **String**| Defines sort direction | [optional] 
 **limit** | **Number**| Limits the number of returned items | [optional] 
 **startKey** | **String**| Defines start of page of results | [optional] 

### Return type

[**ClientList**](ClientList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

