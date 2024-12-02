const siteContent = {
  header: {
    logo: '<span>J</span>osh.',
    navItems: ["Home", "About", "Services", "Skills", "Portfolio", "Contact"],
  },
  sections: [
    {
      id: "home",
      className: "home",
      content: `
        <div class="home-content scroll-scale">
					<h1>Hi! I'm Joshua Mendoza</h1>
					<div class="change-text">
						<h3>And I'm</h3>
						<h3>
							<span class="word">Student</span>
							<span class="word">UI/UX&nbsp;Developer</span>
							<span class="word">Web/Game&nbsp;Designer</span>
							<span class="word">Frontend&nbsp;Developer</span>
						</h3>
					</div>
					<p>Currently 3rd Year major in Software Developer in Marinduque State University.
					specializing UI/UX, Frontend Development, and Digital Designs.</p>

					<div class="info-box">
						<div class="email-info">
							<h5>Email:</h5>
							<span>mendoza.joshua.malapad@gmail.com</span>	
						</div>
						<div class="facebook-info">
							<h5>Behance:</h5>
							<span>behance.net/josh</span>
						</div>
					</div>
					<div class="btn-box">
						<a href="#about" id="readMoreBtn" class="btn">Read More!</a>
						<a href="#contact" id="hireBtn" class="btn">Hire Me Now!</a>
					</div>
					<div class="social-icons">
						<a href="https://www.facebook.com/joshua.mendoza.520900/"><i class='bx bxl-facebook'></i></a>
						<a href="https://www.instagram.com/jo_shuam/"><i class='bx bxl-instagram'></i></a>
						<a href="https://www.tiktok.com/@yui.nikushimi"><i class='bx bxl-tiktok'></i></a>
						<a href="https://www.youtube.com/@MENDOZAJOSHUAM."><i class='bx bxl-youtube'></i></a>
					</div>
				</div>
				<div class="home-image scroll-scale">
					<div class="img-box">
						<img src="images/man.png" alt="">
					</div>
					<div class="liquid-shape">
							<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
							<path fill="#12f7ff">
								<animate attributeName="d"
									dur="20000ms"
									repeatCount="indefinite"
									values="
									M424.5,304.5Q440,359,382.5,370Q325,381,287.5,399.5Q250,
									418,205.5,411Q161,404,115.5,379Q70,354,35.5,302Q1,250,
									47.5,205Q94,160,131,134Q168,108,209,98Q250,88,309.5,
									66.5Q369,45,389.5,101Q410,157,409.5,203.5Q409,250,
									424.5,304.5Z;

									M458,298Q417,346,390.5,396.5Q364,447,307,438.5Q250,
									430,209.5,410.5Q169,391,115,375Q61,359,71.5,304.5Q82,
									250,81.5,201Q81,152,125.5,132Q170,112,210,65Q250,18,
									288.5,67.5Q327,117,361,141.5Q395,166,447,208Q499,250,
									458,298Z;

									M424.5,303.5Q435,357,388,382.5Q341,408,295.5,442Q250,
									476,206.5,438.5Q163,401,139,364.5Q115,328,60,289Q5,250,
									60,211Q115,172,139.5,136Q164,100,207,96Q250,92,289.5,
									103Q329,114,383,128Q437,142,425.5,196Q414,250,424.5,303.5Z;

									M436,288Q381,326,357.5,361Q334,396,292,445.5Q250,495,196,
									466.5Q142,438,104,397Q66,356,49.5,303Q33,250,74.5,211Q116,
									172,124,108.5Q132,45,191,24.5Q250,4,309.5,24.5Q369,45,400,
									95Q431,145,461,197.5Q491,250,436,288Z;

									M432,302.5Q432,355,380.5,371.5Q329,388,289.5,442Q250,496,
									205,451.5Q160,407,127,373.5Q94,340,62,295Q30,250,34,189Q38,
									128,97,108Q156,88,203,74Q250,60,293,80.5Q336,101,377.5,127Q419,
									153,425.5,201.5Q432,250,432,302.5Z;

									M422.5,300Q423,350,382.5,380Q342,410,296,432.5Q250,455,194,
									449.5Q138,444,104,399Q70,354,82.5,302Q95,250,87,200.5Q79,151,
									108.5,104Q138,57,194,39Q250,21,287.5,70Q325,119,386,127.5Q447,
									136,434.5,193Q422,250,422.5,300Z;

									M445,296Q409,342,384,390.5Q359,439,304.5,448.5Q250,458,193,
									452.5Q136,447,123.5,388.5Q111,330,58,290Q5,250,61,211.5Q117,173,
									145.5,145.5Q174,118,212,66Q250,14,312.5,24Q375,34,413,84Q451,134,
									466,192Q481,250,445,296Z;

									M424.5,304.5Q440,359,382.5,370Q325,381,287.5,399.5Q250,
									418,205.5,411Q161,404,115.5,379Q70,354,35.5,302Q1,250,
									47.5,205Q94,160,131,134Q168,108,209,98Q250,88,309.5,
									66.5Q369,45,389.5,101Q410,157,409.5,203.5Q409,250,
									424.5,304.5Z;
									"
								></animate>
							</path>            
							</svg>  
						</div>

						<div class="liquid-shape">
							<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
							<path fill="#12f7ff">
								<animate attributeName="d"
									dur="20000ms"
									repeatCount="indefinite"
									values="
									M424.5,304.5Q440,359,382.5,370Q325,381,287.5,399.5Q250,
									418,205.5,411Q161,404,115.5,379Q70,354,35.5,302Q1,250,
									47.5,205Q94,160,131,134Q168,108,209,98Q250,88,309.5,
									66.5Q369,45,389.5,101Q410,157,409.5,203.5Q409,250,
									424.5,304.5Z;

									M458,298Q417,346,390.5,396.5Q364,447,307,438.5Q250,
									430,209.5,410.5Q169,391,115,375Q61,359,71.5,304.5Q82,
									250,81.5,201Q81,152,125.5,132Q170,112,210,65Q250,18,
									288.5,67.5Q327,117,361,141.5Q395,166,447,208Q499,250,
									458,298Z;

									M424.5,303.5Q435,357,388,382.5Q341,408,295.5,442Q250,
									476,206.5,438.5Q163,401,139,364.5Q115,328,60,289Q5,250,
									60,211Q115,172,139.5,136Q164,100,207,96Q250,92,289.5,
									103Q329,114,383,128Q437,142,425.5,196Q414,250,424.5,303.5Z;

									M436,288Q381,326,357.5,361Q334,396,292,445.5Q250,495,196,
									466.5Q142,438,104,397Q66,356,49.5,303Q33,250,74.5,211Q116,
									172,124,108.5Q132,45,191,24.5Q250,4,309.5,24.5Q369,45,400,
									95Q431,145,461,197.5Q491,250,436,288Z;

									M432,302.5Q432,355,380.5,371.5Q329,388,289.5,442Q250,496,
									205,451.5Q160,407,127,373.5Q94,340,62,295Q30,250,34,189Q38,
									128,97,108Q156,88,203,74Q250,60,293,80.5Q336,101,377.5,127Q419,
									153,425.5,201.5Q432,250,432,302.5Z;

									M422.5,300Q423,350,382.5,380Q342,410,296,432.5Q250,455,194,
									449.5Q138,444,104,399Q70,354,82.5,302Q95,250,87,200.5Q79,151,
									108.5,104Q138,57,194,39Q250,21,287.5,70Q325,119,386,127.5Q447,
									136,434.5,193Q422,250,422.5,300Z;

									M445,296Q409,342,384,390.5Q359,439,304.5,448.5Q250,458,193,
									452.5Q136,447,123.5,388.5Q111,330,58,290Q5,250,61,211.5Q117,173,
									145.5,145.5Q174,118,212,66Q250,14,312.5,24Q375,34,413,84Q451,134,
									466,192Q481,250,445,296Z;

									M424.5,304.5Q440,359,382.5,370Q325,381,287.5,399.5Q250,
									418,205.5,411Q161,404,115.5,379Q70,354,35.5,302Q1,250,
									47.5,205Q94,160,131,134Q168,108,209,98Q250,88,309.5,
									66.5Q369,45,389.5,101Q410,157,409.5,203.5Q409,250,
									424.5,304.5Z;
									"
								></animate>
							</path>            
							</svg>  
						</div>
				</div>
      `,
    },
    {
      id: "about",
      className: "about",
      content: `
        <div class="img-about scroll-scale">
					<img src="images/about-me-pic3.png" alt="About Me">
					<div class="info-about1"><span>0</span><p>Experience</p></div>
					<div class="info-about2"><span>0</span><p>Projects Complete</p></div>
					<div class="info-about3"><span>0</span><p>Happy Clients</p></div>
				</div>
				<div class="about-content scroll-scale">
					<span>Let me introduce myself</span>
					<h2>About Me</h2>
					<h3>A story of good</h3>
					<p>I am a passionate and dedicated creative professional specializing in UI/UX design, web development, and graphic design. With a keen eye for detail and a commitment to excellence, I turn ideas into visually stunning and functional digital experiences. Every project is an opportunity to innovate and connect, blending creativity with technical expertise to deliver results that resonate. Let's create something extraordinary together!</p>
					<div class="btn-box">
						<a href="#services" id="moreInfoBtn" class="btn">More Info!</a>
					</div>
				</div>
      `,
    },
		{
      id: "services",
      className: "services",
      content: `
        <div class="main-text scroll-scale">
					<span>What I will do for you</span>
					<h2>Our Services</h2>
				</div>
				<div class="section-services scroll-bottom">
					<div class="service-box">
						<i class='bx bx-layer service-icon'></i>
						<h3>UI/UX Design</h3>
						<p>I specialize in designing user-friendly interfaces that combine creativity and functionality. My goal is to create seamless experiences that captivate users and enhance their interaction with digital products.</p>
						<div class="btn-box service-btn">
							<a href="#skills" id="view" class="btn">Read More</a>
						</div>
					</div>
					<div class="service-box">
						<i class='bx bx-code-alt service-icon'></i>
						<h3>Web Development</h3>
						<p>I develop responsive, high-performing websites tailored to meet your unique needs. With a focus on clean code and modern technologies, I ensure your online presence is both functional and visually appealing.</p>
						<div class="btn-box service-btn">
							<a href="#skills" id="view2" class="btn">Read More</a>
						</div>
					</div>
					<div class="service-box">
						<i class='bx bx-desktop service-icon'></i>
						<h3>Graphic Designer</h3>
						<p>I create impactful visual designs that effectively convey your message and strengthen your brand identity. From logos to marketing materials, I bring ideas to life with creativity and precision.</p>
						<div class="btn-box service-btn">
							<a href="#skills" id="view3" class="btn">Read More</a>
						</div>
					</div>
				</div>
      `,
    },
		{
      id: "skills",
      className: "skills",
      content: `
        <div class="main-text scroll-scale">
					<span>technical and professional</span>
					<h2>My Skills</h2>
				</div>

				<div class="skill-main">
					<div class="skill-left scroll-scale">
						<h3>Technical Skills</h3>
						<div class="skill-bar">
							<div class="info">
								<p>HTML</p>
								<p>50%</p>
							</div>
							<div class="bar">
								<span class="html"></span>
							</div>
						</div>

						<div class="skill-bar">
							<div class="info">
								<p>Figma</p>
								<p>20%</p>
							</div>
							<div class="bar">
								<span class="figma"></span>
							</div>
						</div>

						<div class="skill-bar">
							<div class="info">
								<p>Javascript</p>
								<p>10%</p>
							</div>
							<div class="bar">
								<span class="javascript"></span>
							</div>
						</div>

						<div class="skill-bar">
							<div class="info">
								<p>CSS</p>
								<p>30%</p>
							</div>
							<div class="bar">
								<span class="css"></span>
							</div>
						</div>
					</div>

					<div class="skill-right scroll-scale">
						<h3>Professional Skills</h3>
						<div class="skill-bar2">
							<div class="info">
								<p>Team Work</p>
								<p>50%</p>
							</div>
							<div class="bar">
								<span class="teamWork"></span>
							</div>
						</div>

						<div class="skill-bar2">
							<div class="info">
								<p>Creativity</p>
								<p>80%</p>
							</div>
							<div class="bar">
								<span class="creativity"></span>
							</div>
						</div>

						<div class="skill-bar2">
							<div class="info">
								<p>Project Management</p>
								<p>40%</p>
							</div>
							<div class="bar">
								<span class="projectManagement"></span>
							</div>
						</div>

						<div class="skill-bar2">
							<div class="info">
								<p>Communication</p>
								<p>60%</p>
							</div>
							<div class="bar">
								<span class="communication"></span>
							</div>
							<div class="btn-box">
								<a href="#portfolio" class="btn">View More</a>
							</div>
						</div>
					</div>
				</div>
      `,
    },
		{
      id: "portfolio",
      className: "portfolio",
      content: `
        <div class="main-text scroll-scale">
					<span>What I will do for you</span>
					<h2>My Projects</h2>
				</div>

				<div class="container">
					<div class="fillter-buttons scroll-scale">
						<button class="button" data-fillter="all">All</button>
						<button class="button" data-fillter="product">Product</button>
						<button class="button" data-fillter="inter">Interacting</button>
						<button class="button" data-fillter="web">Web App</button>
					</div>

					<div class="portfolio-gallery scroll-bottom">
						<div class="port-box mix product">
							<div class="port-image">
								<img src="images/1.png" alt="">	
							</div>
							<div class="port-content">
								<h3>Valorant Website</h3>
								<p>
									My simple design for adaptive website of Valorant containing 4 webpages using HTML and CSS only.
								</p>
								<a href="https://kurimawxd.github.io/APP_DEVELOPMENT_WJ/"><i class='bx bx-link-external' ></i></a>
							</div>
						</div>

						<div class="port-box mix product">
							<div class="port-image">
								<img src="images/2.png" alt="">	
							</div>
							<div class="port-content">
								<h3>Prototype</h3>
								<p>
									A UI/UX or prototype website of "The Boac Hotel" for reservation and booking of Room using mockplus.
								</p>
								<a href="https://rp.mockplus.com/rps/rDoe6NJcG8/0BiAm9nCG? Please view 《UI The Boac Hotel Reservation web》"><i class='bx bx-link-external' ></i></a>
							</div>
						</div>

						<div class="port-box mix inter">
							<div class="port-image">
								<img src="images/3.jpg" alt="">	
							</div>
							<div class="port-content">
								<h3>Graphics Designer</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga amet, repudiandae porro itaque quae.
								</p>
								<a href="#"><i class='bx bx-link-external' ></i></a>
							</div>
						</div>

						<div class="port-box mix inter">
							<div class="port-image">
								<img src="images/4.jpg" alt="">	
							</div>
							<div class="port-content">
								<h3>Graphics Designer</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga amet, repudiandae porro itaque quae.
								</p>
								<a href="#"><i class='bx bx-link-external' ></i></a>
							</div>
						</div>

						<div class="port-box mix web">
							<div class="port-image">
								<img src="images/5.jpg" alt="">	
							</div>
							<div class="port-content">
								<h3>Graphics Designer</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga amet, repudiandae porro itaque quae.
								</p>
								<a href="#"><i class='bx bx-link-external' ></i></a>
							</div>
						</div>

						<div class="port-box mix web">
							<div class="port-image">
								<img src="images/6.jpg" alt="">	
							</div>
							<div class="port-content">
								<h3>Graphics Designer</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga amet, repudiandae porro itaque quae.
								</p>
								<a href="#"><i class='bx bx-link-external' ></i></a>
							</div>
						</div>
					</div>
				</div>
      `,
    },
		{
      id: "contact",
      className: "contact",
      content: `
        <div class="main-text scroll-scale">
					<span>ask me question</span>
					<h2>Contact Me</h2>
				</div>
				
				<form action="" class="scroll-bottom">
					<input type="text" placeholder="Your Name">
					<input type="text" placeholder="Your Email">
					<input type="text" placeholder="Your Address">
					<input type="number" placeholder="Phone Number">
					<textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
					<div class="btn-box formBtn">
						<a href="#footer" type="submit" class="btn">Send Message</a>
					</div>
				</form>
      `,
    },
		{
      id: "footer",
      className: "footer",
      content: `
          <p class="scroll-scale">&copy; 2024 Marinduque State College | Panfilo Manguera, Sr. Road, Tanza, Boac, Marinduque - Philippines | Tel No. (042) 332-2028/2727. All Rights Reserved.</p>
					<a href="#home" id="goTop"><i class='bx bx-up-arrow-alt' ></i></a>
      `,
    },
  ],
};


const renderHeader = ({ logo, navItems }) => {
  const header = document.createElement("header");
  header.innerHTML = `
    <div class="logo">${logo}</div>
    <ul class="navlist">
      ${navItems.map((item, index) => `<li><a href="#${item.toLowerCase()}" style="--i:${index + 1};">${item}</a></li>`).join("")}
    </ul>
    <div id="menu-icon" class="bx bx-menu"></div>
  `;
  container.appendChild(header);
};


const renderSections = (sections) => {
  sections.forEach(({ id, className, content }) => {
    const section = document.createElement("section");
    section.id = id;
    section.className = className;
    section.innerHTML = content;
    container.appendChild(section);
  });
};


const container = document.getElementById("container");

// Render header and sections
renderHeader(siteContent.header);
renderSections(siteContent.sections);






//effects, animations, etc.-------------------------//

let words = document.querySelectorAll(".word");
words.forEach((word) =>{
  let letters = word.textContent.split("")
  word.textContent = "";
  letters.forEach((letter) =>{
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex= words.length -1;
words[currentWordIndex].style.opacity = "1";
let changeText = ()=>{
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter,i)=>{
    setTimeout(()=>{
      letter.className = "letter out";
    },i * 80);
  });

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{
      letter.className = "letter in";
    },340 + i * 80);
  });
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)




// toggle icon navbar----------------------------------------------////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}

window.onscroll = ()=>{
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
}


// parallax----------------------------------------------////
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting) {
      entry.target.classList.add("show-items");
    }else{
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));











//view ABOUT-------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.querySelector("#readMoreBtn");
  const aboutSection = document.querySelector("#about");
	

  // Initially hide the about section
  aboutSection.style.display = "none";
	

  readMoreBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Toggle the display property of #about
    if (aboutSection.style.display === "none") {
      aboutSection.style.display = "flex";
    }
  });
});


//view CONTACT-------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  const hireBtn = document.querySelector("#hireBtn");
  const contactSection = document.querySelector("#contact");

  // Initially hide the about section
  contactSection.style.display = "none";

  hireBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Toggle the display property of #about
    if (contactSection.style.display === "none" || !contactSection.style.display) {
      contactSection.style.display = "block";
    }
  });
});


//view SERVICES-------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  const moreInfoBtn = document.querySelector("#moreInfoBtn");
  const servicesSection = document.querySelector("#services");

  moreInfoBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Toggle the display property of #services
    if (servicesSection.style.display === "none" || !servicesSection.style.display) {
      servicesSection.style.display = "block";
    }
  });
});


//view SKILLS & PORTFOLIO-------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector("#skills");
  const projectSection = document.querySelector("#portfolio");

  // Initially hide the sections
  skillsSection.style.display = "none";
  projectSection.style.display = "none";

  // Function to toggle sections
  const toggleSections = (event, button) => {
    event.preventDefault(); // Prevent default anchor behavior

    if (skillsSection.style.display === "none" && projectSection.style.display === "none") {
      skillsSection.style.display = "block";
      projectSection.style.display = "block";
    }
  };

  // Add event listeners for all buttons
  document.querySelectorAll("#view, #view2, #view3").forEach((button) => {
    button.addEventListener("click", (event) => toggleSections(event, button));
  });
});



//view HEADER----------------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  const arrowUp = document.querySelector("#goTop");
  const headerSection = document.querySelector("header");
	

  // Initially hide the about section
	headerSection.style.display = "none";
	

  arrowUp.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Toggle the display property of #about
    if (headerSection.style.display === "none") {
      headerSection.style.display = "flex";
    }
  });
});


//active menu---------------------------//////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
  let len = section.length;
  while(--len && window.scrollY + 97 < section[len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);






