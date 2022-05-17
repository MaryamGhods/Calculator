const button = document.querySelectorAll('.calculator .buttons input');
const display_window_up = document.querySelector('.calculator .display-window .up') ;
const display_window_down_left = document.querySelector('.calculator .display-window .down .down-left') ;
const display_window_down_right = document.querySelector('.calculator .display-window .down .down-right') ;

const toggle_btn = document.querySelector('.toggle-btn .toggle');
const calculator = document.querySelector('.calculator');

//  toggle btn
toggle_btn.addEventListener('click',()=>{
    calculator.classList.remove('flip-out');
    toggle_btn.classList.toggle('dark-mode');
    calculator.classList.add('flip-in');
    setTimeout(() => {
        calculator.classList.remove('flip-in');
        calculator.classList.add('flip-out');
    }, 500);
    calculator.classList.toggle('dark-mode');    
});


// calculatore progress
button.forEach(function(btn){
    btn.addEventListener('click',()=>{

        if (btn.classList.contains("number-btn") || btn.classList.contains("point-btn") ){
            display_window_down_right.innerHTML = display_window_down_right.innerHTML + btn.value ;
        }
        if(btn.classList.contains("sign-btn")){
            display_window_down_left.innerHTML = btn.value ;
            display_window_up.innerHTML = display_window_up.innerHTML + display_window_down_right.innerHTML + display_window_down_left.innerHTML ;
            display_window_down_right.innerHTML = "";
        }
        if(btn.classList.contains("delete-btn")){
            display_window_down_right.innerHTML = "";
            display_window_down_left.innerHTML = "";
            display_window_up.innerHTML = "";
        }
        if(btn.classList.contains("backspace-btn")){
            const last_number = display_window_down_right.innerHTML.length - 1; 
            display_window_down_right.innerHTML = display_window_down_right.innerHTML.slice(0,last_number)
        }
    });
});