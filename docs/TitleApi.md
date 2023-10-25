# TempApi.TitleApi

All URIs are relative to *https://83.212.100.226:6014/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createtitle**](TitleApi.md#createtitle) | **POST** /title | Creates the data
[**deletetitle**](TitleApi.md#deletetitle) | **DELETE** /title/{titleId} | Delete the element
[**getAlltitle**](TitleApi.md#getAlltitle) | **GET** /title/getAll | Get all the data
[**getByParamstitle**](TitleApi.md#getByParamstitle) | **GET** /title/getByParams | Get all the data based on user query
[**gettitle**](TitleApi.md#gettitle) | **GET** /title/{titleId} | Get the element
[**updatetitle**](TitleApi.md#updatetitle) | **PUT** /title/{titleId} | Updates the element



## createtitle

> Title createtitle(title)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitleApi();
let title = new TempApi.Title(); // Title | data to be created
apiInstance.createtitle(title, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | [**Title**](Title.md)| data to be created | 

### Return type

[**Title**](Title.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletetitle

> deletetitle(titleId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitleApi();
let titleId = "titleId_example"; // String | the Id parameter
apiInstance.deletetitle(titleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titleId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlltitle

> [Title] getAlltitle()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitleApi();
apiInstance.getAlltitle((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Title]**](Title.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamstitle

> [Title] getByParamstitle(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitleApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamstitle(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Title]**](Title.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gettitle

> Title gettitle(titleId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitleApi();
let titleId = "titleId_example"; // String | the Id parameter
apiInstance.gettitle(titleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titleId** | **String**| the Id parameter | 

### Return type

[**Title**](Title.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatetitle

> Title updatetitle(titleId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitleApi();
let titleId = "titleId_example"; // String | the Id parameter
let opts = {
  'title': new TempApi.Title() // Title | data to be updated
};
apiInstance.updatetitle(titleId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titleId** | **String**| the Id parameter | 
 **title** | [**Title**](Title.md)| data to be updated | [optional] 

### Return type

[**Title**](Title.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

