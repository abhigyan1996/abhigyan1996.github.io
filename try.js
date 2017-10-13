$(function() {

    var anim_id;

    //saving dom objects to variables
    var container = $('#container');
    var car = $('#arrow');
    var car_1 = $('#car_1');
    var car_2 = $('#car_2');
    var car_3 = $('#car_3');
    var car_4 = $('#car_4');
    var line_1 = $('#line_1');
    var line_2 = $('#line_2');
    var line_3 = $('#line_3');
    var line_4 = $('#line_4');
    var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var score = $('#score');

    //saving some initial setup
    var container_left = parseInt(container.css('left'));
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var car_width = parseInt(car.width());
    var car_height = parseInt(car.height());

    //some other declarations
    var game_over = false;
    var count=0;
    var score_counter = 1;
    var myscore = 0;
    var speed = 2;
    var line_speed = 2;
    var move_right = false;

    $(document).ready(function(){
      $("#shoot").click(function(){
        $("#arrow").show(10)
        .animate({left:'81%'},450)
        .hide(10)
        .animate({left:'10%'},10)
    });
});   
    $(document).ready(function(){
      $("#shoot").click(function(){
        $("#archer").animate({left:'5%'},200)
        .animate({left:'0%'})
    });
});   

    $(document).ready(function(){
      $("#shoot").click(function(){
        $("#shoot").hide(10)
        .animate({left:'81%'},500)
        .animate({left:'0%'},10)
        .show(10);
    });
});   

var music = document.getElementById("sound1")
var button = document.getElementById("shoot");
var display = document.getElementById("score");
var display1 = document.getElementById("score1");

      button.onclick = function(){
        count++;
        music.play();
        display.innerHTML = count;
      }   
    

    /* ------------------------------GAME CODE STARTS HERE------------------------------------------- */ 

    /* Move the cars and lines */


    anim_id = requestAnimationFrame(hey);

    function hey() {
         if (collision(car, car_1) || collision(car, car_2) || collision(car, car_3) || collision(car, car_4)) {
            count--;
            display.innerHTML=count;
            display1.innerHTML=count;
            stop_the_game();
            return;
        }

        score_counter++;

        
        if (score_counter % 500 == 0) {
            speed++;
            line_speed++;
        }

        
        
        line_down(line_1);
        line_down(line_2);
        line_down(line_3);
        line_down(line_4);

        anim_id = requestAnimationFrame(hey);
    }

    

    function line_down(line) {
        var line_current_top = parseInt(line.css('top'));
        if (line_current_top > container_height) {
            line_current_top = -300;
        }
        line.css('top', line_current_top + line_speed);
    }

    restart_btn.click(function() {
        location.reload();
    });

    function stop_the_game() {
        restart_div.slideDown(10);
        restart_btn.focus(10);
        game_over = true;
    }

    /* ------------------------------GAME CODE ENDS HERE------------------------------------------- */


    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }



});