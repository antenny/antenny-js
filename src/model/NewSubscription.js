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

import ApiClient from '../ApiClient';
import Endpoint from './Endpoint';
import Resource from './Resource';

/**
 * The NewSubscription model module.
 * @module model/NewSubscription
 * @version 1.3.0
 */
class NewSubscription {
    /**
     * Constructs a new <code>NewSubscription</code>.
     * @alias module:model/NewSubscription
     * @param customerId {String} 
     * @param region {module:model/NewSubscription.RegionEnum} 
     * @param resource {module:model/Resource} 
     * @param endpoint {module:model/Endpoint} 
     */
    constructor(customerId, region, resource, endpoint) { 
        
        NewSubscription.initialize(this, customerId, region, resource, endpoint);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, customerId, region, resource, endpoint) { 
        obj['customerId'] = customerId;
        obj['region'] = region;
        obj['resource'] = resource;
        obj['endpoint'] = endpoint;
    }

    /**
     * Constructs a <code>NewSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewSubscription} obj Optional instance to populate.
     * @return {module:model/NewSubscription} The populated <code>NewSubscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewSubscription();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('customerId')) {
                obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = Resource.constructFromObject(data['resource']);
            }
            if (data.hasOwnProperty('endpoint')) {
                obj['endpoint'] = Endpoint.constructFromObject(data['endpoint']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
NewSubscription.prototype['name'] = undefined;

/**
 * @member {String} customerId
 */
NewSubscription.prototype['customerId'] = undefined;

/**
 * @member {module:model/NewSubscription.RegionEnum} region
 */
NewSubscription.prototype['region'] = undefined;

/**
 * @member {module:model/Resource} resource
 */
NewSubscription.prototype['resource'] = undefined;

/**
 * @member {module:model/Endpoint} endpoint
 */
NewSubscription.prototype['endpoint'] = undefined;





/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
NewSubscription['RegionEnum'] = {

    /**
     * value: "us-east-1"
     * @const
     */
    "us-east-1": "us-east-1",

    /**
     * value: "us-east-2"
     * @const
     */
    "us-east-2": "us-east-2",

    /**
     * value: "us-west-1"
     * @const
     */
    "us-west-1": "us-west-1",

    /**
     * value: "us-west-2"
     * @const
     */
    "us-west-2": "us-west-2",

    /**
     * value: "ap-northeast-1"
     * @const
     */
    "ap-northeast-1": "ap-northeast-1",

    /**
     * value: "ap-northeast-2"
     * @const
     */
    "ap-northeast-2": "ap-northeast-2",

    /**
     * value: "ap-southeast-1"
     * @const
     */
    "ap-southeast-1": "ap-southeast-1",

    /**
     * value: "ap-southeast-2"
     * @const
     */
    "ap-southeast-2": "ap-southeast-2",

    /**
     * value: "eu-central-1"
     * @const
     */
    "eu-central-1": "eu-central-1",

    /**
     * value: "eu-west-1"
     * @const
     */
    "eu-west-1": "eu-west-1",

    /**
     * value: "eu-west-2"
     * @const
     */
    "eu-west-2": "eu-west-2"
};



export default NewSubscription;

