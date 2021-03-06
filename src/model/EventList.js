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
import Event from './Event';

/**
 * The EventList model module.
 * @module model/EventList
 * @version 1.3.0
 */
class EventList {
    /**
     * Constructs a new <code>EventList</code>.
     * @alias module:model/EventList
     */
    constructor() { 
        
        EventList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventList} obj Optional instance to populate.
     * @return {module:model/EventList} The populated <code>EventList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventList();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Event]);
            }
            if (data.hasOwnProperty('lastKey')) {
                obj['lastKey'] = ApiClient.convertToType(data['lastKey'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Event>} items
 */
EventList.prototype['items'] = undefined;

/**
 * @member {String} lastKey
 */
EventList.prototype['lastKey'] = undefined;






export default EventList;

