var pl1 = document.querySelector("#pl1");
var pl2 = document.querySelector("#pl2");
var p1sc = document.querySelector("#p1sc");
var p2sc = document.querySelector("#p2sc");
var res = document.querySelector("#reset");
var num = document.querySelector("input");
var lim = document.querySelector("#lim");
var p1scr = 0, p2scr = 0;
var gamovr = false;
var winscr = 5;

pl1.addEventListener("click", function(){
	if (!gamovr) {
		p1scr++;
		if (p1scr === winscr) {
			gamovr = true;
			p1sc.classList.add("winner");
			p2sc.classList.add("loser");
		}
		p1sc.textContent = p1scr;
	}
});
pl2.addEventListener("click", function(){
	if (!gamovr) {
		p2scr++;
		if (p2scr === winscr) {
			gamovr = true;
			p2sc.classList.add("winner");
			p1sc.classList.add("loser");
		}
		p2sc.textContent = p2scr;
	}
});

res.addEventListener("click", function(){
	reset();
});

num.addEventListener("change", function(){
	lim.textContent = num.value;
	winscr = Number(num.value);
	reset();
});

function reset()
{
	p1scr = 0;
	p2scr = 0;
	gamovr = false;
	p1sc.textContent = 0;
	p2sc.textContent = 0;
	p1sc.classList.remove("winner", "loser");
	p2sc.classList.remove("winner", "loser");
}