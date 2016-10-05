'use strict';

module.exports = [
    {
        prefix: '/todo',
        pin: 'role:todo,cmd:*',
        map: {
            list: {
                GET: true, PUT: true
            }
        }
    }
];