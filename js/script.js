var html = document.documentElement;

function setHeight(elem){
	elem.style.minHeight = html.clientHeight + "px";
}

var conversion = document.getElementsByClassName("increase-conversion")[0];
setHeight(conversion);
var conversionLeftWrap = document.getElementsByClassName("left-wrap")[0];
setHeight(conversionLeftWrap);
var conversionRightWrap = document.getElementsByClassName("right-wrap")[0];
setHeight(conversionRightWrap);
var principleOfOperation = document.getElementsByClassName("principle-of-operation")[0];
setHeight(principleOfOperation);
var numberOne = document.getElementsByClassName("number-one")[0];
setHeight(numberOne);
var numberOneLeftWrap = document.getElementsByClassName("left-wrap")[1];
setHeight(numberOneLeftWrap);
var numberOneRightWrap = document.getElementsByClassName("right-wrap")[1];
setHeight(numberOneRightWrap);

var menu = document.getElementsByClassName("nav-menu")[0];	
menu.style.display = "block";
var transparency = document.getElementsByClassName("transparency")[0];
var menuIcon = document.createElement("img");
menuIcon.setAttribute("src", "images/icon.png");
menuIcon.style.cssText = "cursor: pointer; position: absolute; top: 30px; left: 20px; height: 40px;";
var navIconMenu = document.createElement("img");
navIconMenu.setAttribute("src", "images/iconBlack.png");
navIconMenu.style.cssText = "cursor: pointer; position: absolute; top: 30px; left: 20px; height: 40px;";
	
var header = document.getElementsByTagName("header")[0];
var headerUl = document.getElementsByClassName("menu")[0];
var logo = document.getElementsByClassName("logo")[0];

if(screen.width < 992 || html.clientWidth < 992) {
	headerUl.style.display = "none";
	header.style.height = "106px";
	
	var value = -70;
	var flagFirst = 0;
	var interval;

	menuIcon.addEventListener("click", function(){
		value = -70;
		interval = setInterval(fluentOpening.bind(null, 0, 1.4), 10);
		transparency.style.display = "block";
		flagFirst++;
	});

	header.appendChild(menuIcon);
	menu.appendChild(navIconMenu);

	function fluentOpening(number, speed){
		value += speed;
		if(value > number) {
			clearInterval(interval);
			return false
		}
		else {
			menu.style.left = Math.floor(value) + "%";
		}
	}
	function fluentClosing(number, speed){
		value += speed;
		if(value > number) {
			clearInterval(interval);
			return false
		}
		else {
			menu.style.left = "-" + Math.floor(value) + "%";
		}
	}

	transparency.addEventListener("click", function(){
		value = 0;
		interval = setInterval(fluentClosing.bind(null, 72, 1.4), 10);
		
		transparency.style.display = "none";
		flagFirst--;		
	});

	navIconMenu.addEventListener("click", function(){
		value = 0;
		interval = setInterval(fluentClosing.bind(null, 72, 1.4), 10);
		
		transparency.style.display = "none";
		flagFirst--;		
	});

	var navMenuUl = document.getElementsByClassName("nav-menu__ul")[0];
	for(var i = 0; i < navMenuUl.children.length; i++) {
		navMenuUl.children[i].addEventListener("click", function(){
			value = 0;
			menu.style.left = "-72%";
			transparency.style.display = "none";
			flagFirst--;
		});
	}

}

//____________________________ projects ____________________________

var imageWrap = document.getElementsByClassName("image-wrap")[0];

var points = document.createElement("div");
for(var i = 0; i < imageWrap.children.length; i++) {
	var point = document.createElement("div");
	points.appendChild(point);
}
imageWrap.appendChild(points);
var imageWrapImg = document.querySelectorAll(".image-wrap img");
for(let i = 0; i < points.children.length; i++) {
	points.children[i].addEventListener("click", function() {
		for(var j = 0; j < imageWrapImg.length; j++) {
			imageWrapImg[j].style.display = "none";
		}
		imageWrapImg[i].style.display = "block";
	});
}
