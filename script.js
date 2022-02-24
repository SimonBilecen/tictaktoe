let fields = [];
let current_shape = 'cross';
let game_over = false;

function fill_shape(id) {
    if (!fields[id] && !game_over) {
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

function restart() {
    game_over = false;
    fields = [];
    document.getElementById('game_over').classList.add('d-none');
    document.getElementById('restart_button').classList.add('d-none');

    for (let i = 1; i < 8; i++) {
        document.getElementById('line-' + i).classList.add('d-none');
    }

    for (let j = 0; j < 9; j++) {
        document.getElementById('circle_' + j).classList.add('d-none');
        document.getElementById('cross_' + j).classList.add('d-none');
    }
}

function check_winner() {
    let winner; 

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[6] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1.2)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1.2)';
    }

    if(!!winner) {
        console.log('GEWONNEN:', winner);
        game_over = true;

       setTimeout(function() {
        document.getElementById('game_over').classList.remove('d-none');
        document.getElementById('restart_button').classList.remove('d-none');
       }, 1500);
    }
}