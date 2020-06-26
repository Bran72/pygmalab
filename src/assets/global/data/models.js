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
            //gtlf: [{name: 'export-3d_rendu_iphone12_2020.gtlf', size: 20475484}],
            gtlf: [],
            photos: [{name: 'iphone12_3d-rendered.png', size: 514}, {name: 'iphone12_3d-rendered(2).png', size: 1034}],
            android: [{name: 'android_src.appbundle', size: 2014}, {name: 'android_src.appbundle', size: 2048}],
            ios: [{name: 'ios_src.xcodeproj', size: 204}, {name: 'ios_src2.xcodeproj', size: 200}],
            rendered: [],
            igs: [],
            dsmax: []
        },
        clientId: 4,
        status: {
            name: 'En cours',
            class: 'encours',
            imgUrl: 'encours.svg'
        },
        freelanceId: 3,
        dateCreation: '26/06/2020',
        dateDeadline: '30/06/2020'

    },
    {
        id: 2,
        nom: 'Apple Watch S6',
        sku: '12',
        category: {
            name: 'Multimédia',
            imgUrl: 'multimedia.svg',
        },
        details: {
            fr: 'Nouvelle Apple Watch d\'Apple',
            en: 'New Apple\'s Apple Watch',
            description: 'Une montre de la marque Apple modélisée avec une coque en argent.',
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
            gtlf: [],
            photos: ['link1', 'link2'],
            android: ['link1', 'link2'],
            ios: ['link1', 'link2'],
            rendered: ['link1', 'link2'],
            igs: ['link1', 'link2'],
            dsmax: ['link1', 'link2']
        },
        clientId: 5,
        status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
        },
        freelanceId: null,
        dateCreation: '26/06/2020',
        dateDeadline: '08/08/2020'

    },
    {
        id: 3,
        nom: 'Piston essence',
        sku: '124',
        category: {
            name: 'Transports',
            imgUrl: 'transport.svg',
        },
        details: {
            fr: 'Joli piston essence',
            en: '',
            description: 'Un piston essence que je souhaite faire réaliser en 3D.',
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
        clientId: 5,
        status: {
            name: 'En cours',
            class: 'encours',
            imgUrl: 'encours.svg'
        },
        freelanceId: 3,
        dateCreation: '30/05/2020',
        dateDeadline: '29/07/2020'
    },
    {
        id: 4,
        nom: 'Abat jour',
        sku: '124fr',
        category: {
            name: 'Mobilier',
            imgUrl: 'mobilier.svg',
        },
        details: {
            fr: 'Abat Jour',
            en: '',
            description: 'Un abat jour à réaliser (et décliner ?) pour ma société',
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
        clientId: 2,
        status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
        },
        freelanceId: null,
        dateCreation: '22/06/2020',
        dateDeadline: '13/07/2020'
    },
    {
        id: 5,
        nom: 'Couverts design',
        sku: '12TRE4',
        category: {
            name: 'Alimentaire',
            imgUrl: 'alimentaire.svg',
        },
        details: {
            fr: 'Nouveaux couverts',
            en: '',
            description: 'Nouvelle et future gamme de couverts à réaliser.',
            dimensions: {
                depth: 2.0, //mm
                width: 15.0,
                height: 26.0,
            },
            materials: ['glass'],
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
        clientId: 5,
        status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
        },
        freelanceId: null,
        dateCreation: '24/06/2020',
        dateDeadline: '01/07/2020'

    },
    {
        id: 6,
        nom: 'Assiette design',
        sku: '12TRE4',
        category: {
            name: 'Alimentaire',
            imgUrl: 'alimentaire.svg',
        },
        details: {
            fr: 'Nouvelle Assiette',
            en: '',
            description: 'Après les couverts, une nouvelle demande pour une assiette.',
            dimensions: {
                depth: 2.0, //mm
                width: 15.0,
                height: 26.0,
            },
            materials: ['glass'],
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
        clientId: 5,
        status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
        },
        freelanceId: null,
        dateCreation: '24/06/2020',
        dateDeadline: '01/07/2020'
    },
    {
        id: 7,
        nom: 'Nouvel iMac',
        sku: '124',
        category: {
            name: 'Technologie',
            imgUrl: 'technologie.svg',
        },
        details: {
            fr: 'Futur iMac',
            en: '',
            description: 'Design d\'un iMac que j\'aimerais voir un jour',
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
        clientId: 5,
        status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
        },
        freelanceId: null,
        dateCreation: '13/06/2020',
        dateDeadline: '27/01/2021'
    },
    {
        id: 8,
        nom: 'Xbox One',
        sku: '124fr',
        category: {
            name: 'Technologie',
            imgUrl: 'technologie.svg',
        },
        details: {
            fr: 'Xbox One',
            en: '',
            description: 'L\'Xbox One remise au goût du jour',
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
        clientId: 2,
        status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
        },
        freelanceId: null,
        dateCreation: '08/06/2020',
        dateDeadline: '06/07/2020'
    },
    {
        id: 9,
        nom: 'Piscine',
        sku: '12TRE4',
        category: {
            name: 'Nature',
            imgUrl: 'nature.svg',
        },
        details: {
            fr: 'Piscine design',
            en: '',
            description: 'Test pour notre future gamme de piscine !',
            dimensions: {
                depth: 2.0, //mm
                width: 15.0,
                height: 26.0,
            },
            materials: ['bois'],
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
        clientId: 5,
        status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
        },
        freelanceId: null,
        dateCreation: '10/06/2020',
        dateDeadline: '01/07/2022'
    },
    {
        id: 10,
        nom: 'VTT',
        sku: '12TRE4',
        category: {
            name: 'Transports',
            imgUrl: 'transport.svg',
        },
        details: {
            fr: 'VTT nouvelle génération',
            en: '',
            description: 'Nous souhaitons un rendu 3D de notre nouveau VTT pour mettre dans un catalogue.',
            dimensions: {
                depth: 2.0, //mm
                width: 15.0,
                height: 26.0,
            },
            materials: ['aluminium'],
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
        clientId: 5,
        status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
        },
        freelanceId: null,
        dateCreation: '25/06/2020',
        dateDeadline: '18/07/2020'
    },
    {
        id: 11,
        nom: 'Trotinette',
        sku: '12TRE4',
        category: {
            name: 'Transports',
            imgUrl: 'transport.svg',
        },
        details: {
            fr: 'Trotinette électrique tuning',
            en: '',
            description: 'Idée de trotinette plus jolies que l\'ancien modèle',
            dimensions: {
                depth: 2.0, //mm
                width: 15.0,
                height: 26.0,
            },
            materials: ['aluminium'],
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
        clientId: 5,
        status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
        },
        freelanceId: null,
        dateCreation: '24/06/2020',
        dateDeadline: '01/07/2020'
    },
    {
        id: 12,
        nom: 'Ruche à abeilles',
        sku: '12TRE4',
        category: {
            name: 'Nature',
            imgUrl: 'nature.svg',
        },
        details: {
            fr: 'Ruche à abeilles 3D',
            en: '',
            description: "Soucieux de nos petites abeilles, je souhaite faire réaliser un modèle 3D d'une ruche, qui sera ensuite imprimée en 3D !",
            dimensions: {
                depth: 2.0, //mm
                width: 15.0,
                height: 26.0,
            },
            materials: ['plastic'],
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
        clientId: 5,
        status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
        },
        freelanceId: null,
        dateCreation: '24/06/2020',
        dateDeadline: '12/07/2020'
    },
];

export default models;