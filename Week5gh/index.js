module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        console.log('on',arguments);
        return this;

    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        console.log('off',arguments)
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        console.log('emit',arguments)
        return this;
    }

};
