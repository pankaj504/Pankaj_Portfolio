// refresh page
// window.location.href = 'http://127.0.0.1:5500/interview/idx.html#home';

// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar')
menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}
// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
    // console.log('top',top)
		let offSet = sec.offsetTop - 100;
    // console.log('offset',offSet)

		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");
		if (top >= offSet && top < offSet + height) {
			// active navbar links
			navLinks.forEach(links => {
				links.classList.remove("active");
				document
					.querySelector("header nav a[href*=" + id + "]")
					.classList.add("active");
			});
			// active sections for animations on scroll
			sec.classList.add('show-animate');
		}
		// if want to use animation that repeates on scroll use this
		else{
			sec.classList.remove('show-animate');

		}
	});
	// sticky header
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 100);
  // remove toggle icon and navlinks when click navbar links(scroll)

	menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
// animation footer on scroll
let footer=document.querySelector('footer');
footer.classList.toggle('show-animate',this.innerHeight+this.scrollY>=document.scrollingElement.scrollHeight);

};
