/**
 * Build.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    app_type: {
      type: 'integer',
      required: true
    },
    build_type: {
      type: 'string',
      required: true,
      defaultsTo: ''
    },
    release_type: {
      type: 'string',
      required: true,
      defaultsTo: ''
    },
    version: {
      type: 'string',
      required: true,
      defaultsTo: ''
    },
    creater: {
      type: 'string',
      required: true
    },
    create_time: {
      type: 'date',
      required: true
    },
    update_time: {
      type: 'date',
      required: false
    }
  }
};
