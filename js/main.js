$(document).ready(function () {
    var turnCount = 0;

    var cells = $('#board').find('td');

    var cell1 = $('#board').find('#1');
    var cell2 = $('#board').find('#2');
    var cell3 = $('#board').find('#3');
    var cell4 = $('#board').find('#4');
    var cell5 = $('#board').find('#5');
    var cell6 = $('#board').find('#6');
    var cell7 = $('#board').find('#7');
    var cell8 = $('#board').find('#8');
    var cell9 = $('#board').find('#9');

    var board = new Array(9);

    var buttonNewGame = $('#board').find('#btnNewGame').on('click', function () {
        cell1.text('');
        cell2.text('');
        cell3.text('');
        cell4.text('');
        cell5.text('');
        cell6.text('');
        cell7.text('');
        cell8.text('');
        cell9.text('');
    });

    var buttonPlayComputer = $('#board').find('#btnPlayComputer').on('click', function () {
        min = Math.ceil(1);
        max = Math.floor(10);

        var cellNumber = Math.floor(Math.random() * (max - min)) + min;

        board(cellNumber) = 'X';

        cell1.text(cellNumber);
    });

    cells.on('click', function () {
        if (turnCount % 2 === 0) {
            //$(this).text('X');
            //var randomNumber = 1;
            //if (randomNumber == 1) {
              //  cell1.text('X');
            //}

            $(this).text('X');
            checkVictory('X');
        } else {
            $(this).text('O');
            checkVictory('O');
        }
        turnCount++;
    });

    function checkVictory(player) {
        if (cell1.text() !== '') {
            if (cell1.text() == cell2.text() && cell1.text() == cell3.text()) {
                alert('Game over! ' + player + ' is the winner!');
            }
        }

        if (cell4.text() !== '') {

            if (cell4.text() == cell5.text() && cell4.text() == cell6.text()) {
                alert('Game over! ' + player + 'is the winner!');

            }
        }

        if (cell7.text() !== '') {

            if (cell7.text() == cell8.text() && cell7.text() == cell9.text()) {
                alert('Game over! ' + player + 'is the winner!');

            }
        }

        if (cell1.text() !== '') {

            if (cell1.text() == cell4.text() && cell1.text() == cell7.text()) {
                alert('Game over! ' + player + 'is the winner!');

            }
        }

        if (cell2.text() !== '') {

            if (cell2.text() == cell5.text() && cell2.text() == cell8.text()) {
                alert('Game over! ' + player + 'is the winner!');

            }
        }


        if (cell3.text() !== '') {

            if (cell3.text() == cell6.text() && cell3.text() == cell9.text()) {
                alert('Game over! ' + player + 'is the winner!');

            }
        }


        if (cell1 !== '') {

            if (cell1 == cell5 && cell1 == cell9) {
                alert('Game over! ' + player + 'is the winner!');

            }
        }


        if (cell3 !== '') {

            if (cell3 == cell5 && cell3 == cell7) {
                alert('Game over! ' + player + 'is the winner!');

            }
        }

    }

});
