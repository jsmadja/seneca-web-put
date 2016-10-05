'use strict';

module.exports = function plugin() {
    var seneca = this;

    seneca.add('role:todo,cmd:list', (msg, done) => {

        console.log(msg.request$.method);
        console.log(msg.request$);

        done(null, {ok: true});
    });
};