const models = [
    {
        id: 1,
        nom: 'iPhone 12',
        sku: '123456',
        category: 'Téléphonie',
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
        }
    },
    {
        id: 2,
        nom: 'Apple Watch S6',
        sku: '123456',
        category: 'Objets connectés',
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
        }
    }
];

export default models;