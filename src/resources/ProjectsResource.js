import AdminJs from 'adminjs';

import Project from '../models/project';

export default {
    resource: Project,
    options: {
        parent: {
            icon: 'Roadmap'
        },
        properties: {
            id: {
                position: 1,
            },
            name: {
                position: 2,
                isRequired: true,
            },
            description: {
                position: 3,
                type: 'textarea',
            },
            userId: {
                position: 4, 
            },
            user_id: {
                isVisible: false,
            },
            status: {
                position: 5, 
                isRequired: true,
                availableValues: [
                    { value: 'active', label: 'Ativo' },
                    { value: 'archived', label: 'Arquivado' },
                ],
                isVisible: { list: true, filter: true, show: true, edit: true },
            },
            createdAt: {
                position: 7,
                isVisible: { list: true, filter: true, show: true, edit: false } 
            },
            updatedAt: {
                position: 8,
                isVisible: { list: true, filter: true, show: true, edit: false } 
            },
        }
    }
};


