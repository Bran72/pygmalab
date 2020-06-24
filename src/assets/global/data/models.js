const models = [
    {
        id: 1,
        nom: 'iPhone 12',
        sku: '123456',
        category: {
            name: 'Multimédia',
            imgUrl: '@/assets/icons/categories/multimedia.svg',
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
        status: 'en-attente',
        freelanceId: 3,
        dateCreation: new Date('03/06/2020'),
        dateDeadline: new Date('30/06/2020')

    },
    {
        id: 2,
        nom: 'Apple Watch S6',
        sku: '123456',
        category: {
            name: 'Multimédia',
            imgUrl: '@/assets/icons/categories/multimedia.svg',
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
        status: 'en-cours',
        freelanceId: 3,
        dateCreation: new Date('22/04/2020'),
        dateDeadline: new Date('28/06/2020')
    },
    {
        id: 3,
        nom: 'Table de jardin en bois',
        sku: '123456',
        category: {
            name: 'Mobilier',
            imgUrl: '@/assets/icons/categories/mobilier.svg',
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
        status: 'en-cours',
        freelanceId: 3,
        dateCreation: new Date('08/06/2020'),
        dateDeadline: new Date('29/06/2020')

    }
];

export default models;