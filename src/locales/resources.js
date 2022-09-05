const commonProps = {
    status: 'Situação',
    createdAt: 'Criação',
    updatedAt: 'Atualização'
}

export default {
    users: {
        actions: {
            resetPasswrd: 'Redefinir Senha'
        },
        properties: {
            id: 'ID',
            initials: 'Iniciais',
            name: 'Nome',
            email: 'Email',
            password: "Senha",
            passwordHash: 'Senha Criptografada',
            role: 'Perfil',
            ...commonProps,
        },
    },
    projects: {
        properties: {
            id: 'ID',
            name: 'Nome',
            description: 'Descrição',
            userId: 'Responsável',
            ...commonProps,
        }
    },
    tasks: {
        actions: {
            detailedStats: 'Visão detalhada',
        },
        properties: {
            id: 'ID',
            due_date: 'Data Entrega',
            effort: 'Esforço',
            title: 'Título',
            description: 'Descrição',
            userId: 'Responsável',
            projectId: 'Projeto',
        },
    }
}