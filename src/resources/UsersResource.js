import AdminJs from 'adminjs';

import User from '../models/user';

export default {
    resource: User,
    options: {
        properties: {
            id: {
                position: 1,
            },
            initials: {
                position: 2,
                isVisible: { list: true, filter: true, show: true, edit: false },
            },
            name: {
                position: 3,
                isRequired: true,
            },
            email: {
                position: 4, 
                isRequired: true,
            },
            status: {
                position: 5,
                isVisible: { list: true, filter: true, show: true, edit: false },
            },
            role: {
                position: 6,
                isVisible: { list: true, filter: true, show: true, edit: false },
            }
        }
    }
};


