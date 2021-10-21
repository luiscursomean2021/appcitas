const mongoose = require('mongoose');
const User = require('../Models/User')
const Animal = require('../models/Animal');

const dbName = 'appcitas';
mongoose.connect(`mongodb://localhost/${dbName}`);

//Seed de usuarios
const users = [
     
    {
        _id: new mongoose.mongo.ObjectId(),
        username: 'admin',
        email: 'admin@gmail.com',
        password: '$2b$12$yy1gke3jtbziA7p6dLGTNuQ.GkipyHhgSoR42s9/Da2D3ig8KhmCa',// pass==> admin
        userType: 'Administrador'
    }
]

User
    .create(users)
    .then(response => {
        console.log('Se han creado', response.length)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error', err))


// Seed de animales
const animals = [{
        nombre: 'Moddy',
        edad: '1',
        raza: 'Chow Chow',
        tamanio: 'Mediano',
        imagen: 'https://www.hola.com/imagenes/estar-bien/20200630171192/razas-perro-chino-chow-chow/0-842-64/chow-chow-8a-a.jpg',
        descripcion: 'Es una raza canina originaria del Norte de China.​​ Se cree que fue uno de los perros nativos utilizados como modelo para el perro de Foo, los guardianes tradicionales de piedra que se encuentran en frente de los templos y palacios budistas',
        vacunas: true,
        id_usuario: "4f88592a06c05e4de90d0bc6"
    },
    {
        nombre: 'Coco',
        edad: '4',
        raza: 'Alaskan Malamute',
        tamanio: 'Grande',
        imagen: 'https://t2.ea.ltmcdn.com/es/razas/9/3/3/img_339_alaskan-malamute_0_orig.jpg',
        descripcion: 'Su apariencia parecida a la de un lobo ha hecho que esta raza capture la atención de todas las personas amantes de los perros, puesto que su impresionante porte y precioso manto no pasa desapercibido. En ocasiones, se suele confundir esta raza con la del husky siberiano, sin embargo, como veremos, existen notables diferencias entre ambas.',
        vacunas: false,
        id_usuario: "4f88592a06c05e4de90d0bc5",
    }, {
        nombre: 'Thor',
        edad: '2',
        raza: 'Pit Bull',
        tamanio: 'Mediano',
        imagen: 'https://soyunperro.com/wp-content/uploads/2022/06/perro-pitbull-esperando-una-orden-696x437.jpg',
        descripcion: 'El pit bull terrier americano es uno de los perros más populares en la actualidad. Aunque cueste de imaginar hoy en día por el estigma que padece, la historia del pit bull empieza en las granjas, como un perro protector del ganado. Posteriormente, se popularizó en las peleas de perros, una práctica indeseable que pareció alejarle de su pasado como perro niñera.',
        vacunas: false,
        id_usuario: "4f88592a06c05e4de90d0bc5",
    }, {
        nombre: 'Max',
        edad: '6',
        raza: 'Akita inu',
        tamanio: 'Grande',
        imagen: 'https://t1.ea.ltmcdn.com/es/razas/7/0/1/img_107_akita-inu-o-akita-japones_0_600.jpg',
        descripcion: 'El akita inu o también llamado akita japonés es una raza que procede de Japón, Asia, y en su país natal se considera un tesoro nacional. Ha sido objeto de veneración como símbolo de buena salud, prosperidad y buena fortuna. En su honor, y a raíz de la historia de Hachiko, se le concedió a esta maravillosa raza un monumento nacional.',
        vacunas: true,
        id_usuario: "4f88592a06c05e4de90d0bc4",
    }, {
        nombre: 'Rocky',
        edad: '15',
        raza: 'Setter Irlandes',
        tamanio: 'Grande',
        imagen: 'https://t2.ea.ltmcdn.com/es/razas/4/5/1/img_154_setter-irlandes-rojo_0_600.jpg',
        descripcion: 'El setter irlandés rojo, también conocido simplemente como setter irlandés, es considerado uno de los perros más hermosos y glamurosos del planeta debido a su figura esbelta y su hermoso pelaje rojizo. Aunque originalmente fue un perro de caza, su innegable belleza hizo de él un perro que frecuenta más las exposiciones caninas que los cotos de caza.',
        vacunas: true,
        id_usuario: "4f88592a06c05e4de90d0bc4",
    }, {
        nombre: 'Toby',
        edad: '5',
        raza: 'Caniche',
        tamanio: 'Pequeño',
        imagen: 'https://t1.ea.ltmcdn.com/es/razas/2/1/0/img_12_caniche-o-poodle-toy_0_600.jpg',
        descripcion: 'Es una raza canina originaria del Norte de China.​​ Se cree que fue uno de los perros nativos utilizados como modelo para el perro de Foo, los guardianes tradicionales de piedra que se encuentran en frente de los templos y palacios budistas',
        vacunas: true,
        id_usuario: "4f88592a06c05e4de90d0bc3",

    }, {
        nombre: 'Simba',
        edad: '3',
        raza: 'Labrador Retreiver',
        tamanio: 'Grande',
        imagen: 'https://t2.ea.ltmcdn.com/es/razas/0/0/1/img_100_labrador-retriever_0_600.jpg',
        descripcion: 'El labrador retriever es una de las razas de perros más populares del mundo, teniendo en cuenta la cantidad de ejemplares registrados. Se conoce también como perro labrador, cobrador de labrador o perdiguero de labrador. Se trata de una raza originaria de Terranova, el actual Canadá. Es un perro noble, hermoso y muy inteligente, apropiado para todo tipo de familias.',
        vacunas: false,
        id_usuario: "4f88592a06c05e4de90d0bc2",

    }, {
        nombre: 'Luna',
        edad: '18',
        raza: 'Border Collie',
        tamanio: 'Mediano',
        imagen: 'https://t1.ea.ltmcdn.com/es/razas/3/6/0/img_63_border-collie_0_600.jpg',
        descripcion: 'El border collie es considerado el perro más inteligente del mundo, según Stanley Coren, el profesor e investigador neuropsicológico del famoso libro "La inteligencia de los perros", publicado en 1994. El border collie es una raza canina que destaca por poseer una amplia capacidad de aprendizaje en distintos ámbitos: obediencia canina básica, avanzada, habilidades caninas, pastoreo o Agility entre otros.',
        vacunas: true,
        id_usuario: "4f88592a06c05e4de90d0bc2",

    }, {
        nombre: 'Kira',
        edad: '10',
        raza: 'Bichon Maltes',
        tamanio: 'Pequeño',
        imagen: 'https://t1.ea.ltmcdn.com/es/razas/7/0/0/img_7_bichon-maltes_0_600.jpg',
        descripcion: 'El Bichón Maltés es una raza de tamaño toy surgida del Mediterráneo, siendo Italia quien tomó el patrocinio de la raza. Los orígenes están asociados a Italia, Malta y a la isla de Mljet (Croacia) aún así, su origen es algo incierto.',
        vacunas: true,
        id_usuario: "4f88592a06c05e4de90d0bc1",
    }
]

Animal
    .create(animals)
    .then(response => {
        console.log('Se han creado', response.length)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error', err))