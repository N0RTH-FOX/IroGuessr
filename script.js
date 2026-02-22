const submit = document.getElementById("submit");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const ans_color_code = document.getElementById("ans_color_code");
const submit_color_code = document.getElementById("submit_color_code");
const r_def = document.getElementById("r_def");
const g_def = document.getElementById("g_def");
const b_def = document.getElementById("b_def");
const point = document.getElementById("point");

const range_ans = document.getElementById("range_ans");
const red_ans = document.getElementById("red_ans");
const green_ans = document.getElementById("green_ans");
const blue_ans = document.getElementById("blue_ans");

const submit_div = document.getElementById("submit_div");
const ans_div = document.getElementById("ans_div");

let quest_red = Math.floor(Math.random()*255)
let quest_green = Math.floor(Math.random()*255)
let quest_blue = Math.floor(Math.random()*255)

let submit_color = "#000000";
let quest_color = "#"+ 
    quest_red.toString(16).padStart(2,0)+ 
    quest_blue.toString(16).padStart(2,0)+ 
    quest_green.toString(16).padStart(2,0);
document.querySelector("body").style.setProperty('--quest_color',quest_color);

submit.addEventListener("click", () => {
    red.disabled = true;
    green.disabled = true;
    blue.disabled = true;

    submit_color = "#"+
        Math.floor(red.value).toString(16).padStart(2,0)+
        Math.floor(green.value).toString(16).padStart(2,0)+
        Math.floor(blue.value).toString(16).padStart(2,0);
    document.querySelector("body").style.setProperty('--submit_color',submit_color);

    ans_color_code.textContent = quest_color
    submit_color_code.textContent = submit_color
    r_def.textContent = quest_red - red.value;
    g_def.textContent = quest_green - green.value;
    b_def.textContent = quest_blue - blue.value;
    point.textContent = 100 - 
        Math.abs(quest_red - red.value)-
        Math.abs(quest_green - green.value)-
        Math.abs(quest_blue - blue.value);
    
    submit_div.style.display = "none";
    ans_div.style.display = "block";

    red_ans.value = quest_red;
    green_ans.value = quest_green;
    blue_ans.value = quest_blue;
    range_ans.style.display = "block";
    range_ans.style.zIndex = "1"
});