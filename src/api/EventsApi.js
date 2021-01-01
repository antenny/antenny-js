/**
 * Antenny API
 * This is an api that allows you to interact with the Antenny platform. It allows you to manage your clients and subscriptions.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: admin@antenny.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import EventList from '../model/EventList';

/**
* Events service.
* @module api/EventsApi
* @version 1.1.0
*/
export default class EventsApi {

    /**
    * Constructs a new EventsApi. 
    * @alias module:api/EventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Gets a list of events for a subscription
     * Lists events for a subscription
     * @param {String} subId Subscription id
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Defines sort direction
     * @param {module:model/String} opts.level Filters events by level
     * @param {Number} opts.limit Limits the number of returned items
     * @param {String} opts.startKey Defines start of page of results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventList} and HTTP response
     */
    listEventsWithHttpInfo(subId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subId' is set
      if (subId === undefined || subId === null) {
        throw new Error("Missing the required parameter 'subId' when calling listEvents");
      }

      let pathParams = {
        'subId': subId
      };
      let queryParams = {
        'sort': opts['sort'],
        'level': opts['level'],
        'limit': opts['limit'],
        'startKey': opts['startKey']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EventList;
      return this.apiClient.callApi(
        '/subscriptions/{subId}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets a list of events for a subscription
     * Lists events for a subscription
     * @param {String} subId Subscription id
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Defines sort direction
     * @param {module:model/String} opts.level Filters events by level
     * @param {Number} opts.limit Limits the number of returned items
     * @param {String} opts.startKey Defines start of page of results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventList}
     */
    listEvents(subId, opts) {
      return this.listEventsWithHttpInfo(subId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
