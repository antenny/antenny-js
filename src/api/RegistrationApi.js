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
import Registration from '../model/Registration';

/**
* Registration service.
* @module api/RegistrationApi
* @version 1.3.0
*/
export default class RegistrationApi {

    /**
    * Constructs a new RegistrationApi. 
    * @alias module:api/RegistrationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Gets a customers registration
     * @param {String} custId Customer Id for registration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Registration} and HTTP response
     */
    getRegistrationWithHttpInfo(custId) {
      let postBody = null;
      // verify the required parameter 'custId' is set
      if (custId === undefined || custId === null) {
        throw new Error("Missing the required parameter 'custId' when calling getRegistration");
      }

      let pathParams = {
        'custId': custId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Registration;
      return this.apiClient.callApi(
        '/customers/{custId}/registration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets a customers registration
     * @param {String} custId Customer Id for registration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Registration}
     */
    getRegistration(custId) {
      return this.getRegistrationWithHttpInfo(custId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
