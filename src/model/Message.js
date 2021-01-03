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

/**
 * The Message model module.
 * @module model/Message
 * @version 1.1.0
 */
class Message {
    /**
     * Constructs a new <code>Message</code>.
     * @alias module:model/Message
     * @param format {module:model/Message.FormatEnum} 
     * @param content {String} 
     */
    constructor(format, content) { 
        
        Message.initialize(this, format, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, format, content) { 
        obj['format'] = format;
        obj['content'] = content;
    }

    /**
     * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Message} obj Optional instance to populate.
     * @return {module:model/Message} The populated <code>Message</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Message();

            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Message.FormatEnum} format
 */
Message.prototype['format'] = undefined;

/**
 * @member {String} content
 */
Message.prototype['content'] = undefined;





/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
Message['FormatEnum'] = {

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "binary"
     * @const
     */
    "binary": "binary"
};



export default Message;
