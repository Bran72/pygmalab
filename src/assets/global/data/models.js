const models = [
    {
        id: 1,
        nom: 'iPhone 12',
        sku: '123456',
        category: {
            name: 'Multimédia',
            imgUrl: 'multimedia.svg',
        },
        details: {
            fr: 'Nouvel iPhone d\'Apple',
            en: 'New Apple\'s iPhone',
            description: 'Un téléphone de la marque Apple modélisé avec une coque en argent.',
            dimensions: {
                depth: 2.0, //mm
                width: 15.0,
                height: 26.0,
            },
            materials: ['aluminium', 'glass'],
            scale: 1,
            url: ''
        },
        photos: ['link1', 'link2'],
        files: {
            gtlf: ['link1', 'link2'],
            photos: ['link1', 'link2'],
            android: ['link1', 'link2'],
            ios: ['link1', 'link2'],
            rendered: ['link1', 'link2'],
            igs: ['link1', 'link2'],
            dsmax: ['link1', 'link2']
        },
        clientId: 3,
        status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
        },
        freelanceId: null,
        dateCreation: '23/06/2020',
        dateDeadline: '30/07/2020'

    }
];

export default models;