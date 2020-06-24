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
        clientId: 4,
        status: {
            name: 'En cours',
            class: 'encours',
            imgUrl: 'encours.svg'
        },
        freelanceId: null,
        dateCreation: '03/06/2020',
        dateDeadline: '30/06/2020'

    },
    {
        id: 2,
        nom: 'Apple Watch S6',
        sku: '123456',
        category: {
            name: 'Multimédia',
            imgUrl: 'multimedia.svg',
        },
        details: {
            fr: 'Nouvelle Apple Watch d\'Apple',
            en: 'New Apple\'s Apple Watch',
            dimensions: {
                depth: 3.0, //mm
                width: 12.0,
                height: 12.0,
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
        clientId: 4,
        status: {
            name: 'En cours',
            class: 'encours',
            imgUrl: 'encours.svg'
        },
        freelanceId: 3,
        dateCreation: '22/04/2020',
        dateDeadline: '28/06/2020'
    },
    {
        id: 3,
        nom: 'Table de jardin en bois',
        sku: '123456',
        category: {
            name: 'Mobilier',
            imgUrl: 'mobilier.svg',
        },
        details: {
            fr: 'Table de jardin exterieur en chêne, avec 6 chaises',
            en: 'Outdoor oak garden table with 6 chairs',
            dimensions: {
                depth: 1200.0, //mm
                width: 3000.0,
                height: 1800.0,
            },
            materials: ['bois', 'fer'],
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
        clientId: 4,
        status: {
            name: 'Envoyé',
            class: 'envoye',
            imgUrl: 'envoye.svg'
        },
        freelanceId: 3,
        dateCreation: '08/06/2020',
        dateDeadline: '29/06/2020'

    }
];

export default models;