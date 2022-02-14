let fields = [];
let current_shape = 'cross';

function fill_shape(id) {
    if (current_shape == 'cross') {
        current_shape = 'circle';
        document.getElementById('player_2').classList.remove('player-inactive');
        document.getElementById('player_1').classList.add('player-inactive');
    } 
    else {
        current_shape = 'cross';
        document.getElementById('player_1').classList.remove('player-inactive');
        document.getElementById('player_2').classList.add('player-inactive');
    }

    fields[id] = current_shape;
    console.log(fields);
    draw();
    check_winner();
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

function check_winner() {
    let winner; 

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
    }
    else if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
    }
    else if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
    }
    else if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
    }
    else if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
    }
    else if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
    }
    else if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
    }
    else if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
    }

    if(!!winner) {
        console.log('GEWONNEN:', winner);
    }
}