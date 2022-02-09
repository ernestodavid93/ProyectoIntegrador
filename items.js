function addItem(item){
    const itemHTML =
    '<div">\n'+
        '<div class="card col-lg-4" style="width: 18rem;">\n' +
                '<h5 class="card-title text-center">'+item.titulo+'</h5>\n' +
            '    <img src="'+item.foto +'" class="card-img-top" alt="image">\n' +
            '    <div class="card-body">\n' +
            '        <p class="card-text">'+item.precio+'</p>\n' +
            '        <p class="card-text"> <i class="fas fa-bed"></i>  Habitaciones: '+item.habitaciones+'</p>\n' +
            '        <p class="card-text"> <i class="fas fa-bath"></i>  Baños: '+item.sanitario+'</p>\n' +
            '        <p class="card-text"> <i class="fas fa-car"></i>  Cochera: '+item.cochera+'</p>\n' +
            '        <p class="card-text"> <i class="fas fa-map-marker-alt"></i>  Ubicacion'+item.ubicacion+'</p>\n' +
            '        <p class="card-text">'+item.descripcion+'</p>\n' +
            '        <a href="#" class="btn btn-primary">Add</a>\n' +
            '     </div>\n' +
        '</div>\n' +
    '</div>\n'+
    '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({

    'titulo':'Habitacion cerca de chapu',
    'foto': './img/card2.jpg',
    'precio':'$4,999',
    'habitaciones':'1',
    'sanitario':'1',
    'cochera':'1',
    'ubicacion':'Justo Sierra no.145',
    'descripcion':'Habitacion de lugo con buena ubicacion'
    
});

addItem({

    'titulo':'Departamento por CUAAD',
    'foto': './img/card2.jpg',
    'precio':'$3,999',
    'habitaciones':'2',
    'sanitario':'1',
    'cochera':'1',
    'ubicacion':'Av Calzada Independencia no.1245',
    'descripcion':'Departamento amueblado para estudiantes del CUAAD'
    
});

addItem({

    'titulo':'Habitacion cerca de CUCEI',
    'foto': './img/card2.jpg',
    'precio':'$4,999',
    'habitaciones':'1',
    'sanitario':'1',
    'cochera':'0',
    'ubicacion':'Av Revolucion no.345',
    'descsa': 'habitacion cerca del cucei amueblada'
    
});
    
addItem({
    'titulo': 'Departamento',
    'foto': '/img/card2.jpg',
    'precio': '2100$',
    'habitaciones': '2',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Independencia no.299',
    'descripcion': 'Departamento con dos cuartos'
})

addItem({
    'titulo': 'Rommie',
    'foto': '/img/card5.jpg',
    'precio': '1000$',
    'habitaciones': '1',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Calzada Independencia no.423',
    'descripcion': 'Dormitorio para estudiante'
})


addItem({
    'titulo': 'Habitacion por CUCEA',
    'foto': '/img/card4.jpg',
    'precio': '2500$',
    'habitaciones': '1',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Periferico Norte no.233',
    'descripcion': 'Habitacion para estudiante cerca de la univerdad cucea'
})

addItem({
    'titulo': 'Rommie Cucei',
    'foto': '/img/card5.jpg',
    'precio': '1500$',
    'habitaciones': '2',
    'sanitario': '1',
    'cochera': '1',
    'ubicacion': 'Boulevard Marcelino Barragan no.63',
    'descripcion': 'Habitaciones para estnudiantes disponibles'
})

addItem({
    'titulo': 'Renta de departamento',
    'foto': '/img/card6.jpg',
    'precio': '3500$',
    'habitaciones': '2',
    'sanitario': '2',
    'cochera': '0',
    'ubicacion': 'Marcelino Barragan no.25',
    'descripcion': 'Habitaciones para estudiantes'
})

addItem({
    'titulo': 'Casa para estudiante CUAAD',
    'foto': '/img/card3.jpg',
    'precio': '2300$',
    'habitaciones': '4',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Calzada Independencia no.2522',
    'descripcion': 'Casa amplia para compartir entre estudiantes'
})