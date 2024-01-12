import './style.css'
import orlando from '/images/orland.jpg'
import contrata from '/images/contrata.jpg'
import quizical from '/images/quizical.jpg'
import movement from '/images/movement.jpg'
import github from '/images/github.svg'
import linkedin from '/images/linkedin.svg'
import twitter from '/images/twitter.svg'
import arrowUp from '/images/arrow-up.svg'

document.querySelector('#app').innerHTML = `
  <div>
  <!-- ***** Header ***** -->

  <header class="header" role="banner" id="top">
    <div class="row">
      <nav class="nav" role="navigation">
        <ul class="nav__items">
          <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
          <!-- <li class="nav__item"><a href="#clients" class="nav__link">Clients</a></li> -->
          <li class="nav__item">
            <a href="#about" class="nav__link">About</a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header__text-box row">
      <div class="header__text">
        <h1 class="heading-primary">
          <!-- Replace the following name with your name -->
          <span>Orlando Flores</span>
        </h1>
        <!-- Put a small paragraph about yourself -->
        <p>A Front-End Developer based in Bolivia, BO
</p>
        <a href="#contact" class="btn btn--pink">Get in touch</a>
      </div>
    </div>
  </header>

  <main role="main">

    <!-- ***** Work ***** -->

    <section class="work" id="work">
      <div class="row">
        <h2>My Work</h2>
        <div class="work__boxes">

          <!-- Each div with the work__box class is a project. -->

          <div class="work__box">
            <div class="work__text">
              <h3>Contrata</h3>
              <p>
                A platform to connect people with qualified services.
              </p>
              <ul class="work__list">
                <li>HTML</li>
                <li>React</li>
                <li>Tailwind</li>
              </ul>

              <div class="work__links">
                <a href="https://contrata.vercel.app/" target="_blank" class="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/No-Country/S6-15-M-MERN" title="View Source Code" target="_blank">
                  <img src="${github}" class="work__code" alt="GitHub">
                </a>
              </div>
            </div>
            <div class="work__image-box">
              <a href="https://contrata.vercel.app/" target="_blank" class="link__text">
                <img src="${contrata}" class="work__image" alt="Project 1" />
              </a>
            </div>
          </div>

          <div class="work__box">
            <div class="work__text">
              <h3>MOVEment</h3>
              <p>
                Sportswear trade and social support.
              </p>
              <ul class="work__list">
                <li>React</li>
                <li>Tailwind</li>
                <li>HTML</li>
                <li>TypeScript</li>
              </ul>

              <div class="work__links">
                <a href="https://c854pernfront-5m8om.ondigitalocean.app/home" target="_blank" class="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/No-Country/c8-t-54-pern" target="_blank">
                  <img src="${github}" class="work__code" title="View Source Code" alt="GitHub">
                </a>
              </div>
            </div>
            <div class="work__image-box">
              <a href="https://c854pernfront-5m8om.ondigitalocean.app/home" target="_blank" class="link__text">
              <img src="${movement}" class="work__image" alt="Project 2" /></a>
            </div>
          </div>

          <div class="work__box">
            <div class="work__text">
              <h3>Quizzical App</h3>
              <p>
                A quiz game.
              </p>
              <ul class="work__list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>

              <div class="work__links">
                <a href="https://lalomax.github.io/quizzical-game/" target="_blank" class="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/lalomax/quizzical-game" target="_blank">
                  <img src="${github}" class="work__code" title="View Source Code" alt="GitHub">
                </a>
              </div>
            </div>
            <div class="work__image-box">
              <a href="https://lalomax.github.io/quizzical-game/" target="_blank" class="link__text">
                <img src="${quizical}" class="work__image" alt="Project 3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ***** Clients ***** -->
<!-- 
    <section class="client" id="clients">
      <div class="row">
        <h2>Clients</h2>
        <div class="client__logos">
          <img src="./images/ronjones.png" class="client__logo" alt="Company 2" />
          <img src="./images/goldengrid.png" class="client__logo" alt="Company 3" />
          <img src="./images/bullseye.png" class="client__logo" alt="Company 1" />
          <img src="./images/mighty-furnitures.png" class="client__logo" alt="Company 1" />
          <img src="./images/fastlane.png" class="client__logo" alt="Company 3" />
          <img src="./images/chippy.png" class="client__logo" alt="Company 1" />
        </div>
      </div>
    </section> -->

    <!-- ***** About ***** -->

    <section class="about" id="about">
      <div class="row">
        <h2>About Me</h2>
        <div class="about__content">
          <div class="about__text">
            <!-- Replace the below paragraph with info about yourself -->
           I'm a web developer and learning enthusiast based out of Bolivia, BO. I love building apps that solve real-world problems, and that are delightful to use. My specialities include React JS, Tailwind CSS, and Styled Components.</p>
            <p>My background is in control and developing web, and I have a bachelors degree in Systems from El Alto's Public University (UPEA). I also like to hiking.</p>
            <!-- Provide a link to your resume -->
            <a href="https://orlandocv.netlify.app/" target="_blank" class="btn">My Resume</a>
          </div>

          <div class="about__photo-container">
            <!-- Add a nice photo of yourself -->
            <img class="about__photo" src="${orlando}" alt="" />
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- ***** Contact ***** -->

  <section class="contact" id="contact">
    <div class="row">
      <h2>Get in Touch</h2>
      <div class="contact__info">
        <p>
          Are you looking for a fast-performing and user-friendly website to
          represent your product or business? or looking for any kind of
          consultation? or want to ask questions? or have some advice for me
          or just want to say "Hi 👋" in any case feel free to Let me know. I
          will do my best to respond back. 😊 The quickest way to reach out to
          me is via an email.
        </p>
        <!-- Replace the email with yours -->
        <a href="mailto:lalomax365@gmail.com" class="btn">lalomax365@gmail.com</a>
      </div>
    </div>
  </section>

  <!-- ***** Footer ***** -->

  <footer role="contentinfo" class="footer">
    <div class="row">
      <!-- Update the links to point to your accounts -->
      <ul class="footer__social-links">
        <li class="footer__social-link-item">
          <a href="https://twitter.com/OrlandoFloresH" title="Link to Twitter Profile" target="_blank">
            <img src="${twitter}" class="footer__social-image" alt="Twitter">
          </a>
        </li>
        <li class="footer__social-link-item">
          <a href="https://github.com/lalomax" title="Link to Github Profile" target="_blank">
            <img src="${github}" class="footer__social-image" alt="Github">
          </a>
        <!--
        </li>
        <li class="footer__social-link-item">
          <a href="https://codepen.io/nisar_hassan" title="Link to Codepen Profile">
            <img src="./images/codepen.svg" class="footer__social-image" alt="Codepen">
          </a>
        </li>
        -->
        <li class="footer__social-link-item">
          <a href="https://www.linkedin.com/in/orlando-flores365/" target="_blank" title="Link to Linkedin Profile">
            <img src="${linkedin}" title="Link to Linkedin Profile" class="footer__social-image" alt="Linkedin">
          </a>
        </li>
      </ul>

      <!-- If you give me some credit by keeping the below paragraph, will be huge for me 😊 Thanks. -->
      
      <!-- <p>
        &copy; 2020 - Template designed & developed by <a href="https://nisar.dev" class="link">Nisar</a>.
      </p>
      
      <div class="footer__github-buttons">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=nisarhassan12&repo=portfolio-template&type=watch&count=true"
          frameborder="0" scrolling="0" width="170" height="20" title="Watch Portfolio Template on GitHub">
        </iframe>
      </div>
       -->
    </div>
  </footer>

  <a href="#top" class="back-to-top" title="Back to Top">
    <img src="${arrowUp}" alt="Back to Top" class="back-to-top__image"/>
  </a>
  // <script src="{./index.js}"></script>
  </div>
`


