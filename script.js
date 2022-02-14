let fields = [];
let current_shape = 'cross';

function fill_shape(id) {
    if (current_shape == 'cross') {
        current_shape = 'circle';
    } 
    else {
        current_shape = 'cross';
    }

    fields[id] = current_shape;
    console.log(fields);
    draw();
}

function draw() {
    for(let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle_' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross_' + i).classList.remove('d-none');
        }
    }

}