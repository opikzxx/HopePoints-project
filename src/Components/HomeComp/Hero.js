import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import hero from '../../assets/hero/hero.png';
import './home.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="hero">
        <div className="d-flex">
          <div className="wrap-text">
            <h1 className="title">HopePoints</h1>
            <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eius? Obcaecati perferendis voluptas temporibus. Eius neque qui quam quidem alias.</p>
            <button onClick={() => navigate('/form')}>Laporkan!</button>
          </div>
          <div className="image">
            <img src={hero} alt="hero HopePoints" />
          </div>
        </div>
      </Container>
      <section className="feature">
        <h1 className="fiturTitle">Explore Our Feature</h1>
        <div className="overlay">
          <div className="featureForm">
            <img src="/assets/logo.png" alt="fitur form"></img>
            <h2 className="featureFormTitle">Form</h2>
          </div>
          <div className="featureForm">
            <img src="/assets/logo.png" alt="fitur form"></img>
            <h2 className="featureFormTitle">Maps</h2>
          </div>
          <div className="featureForm">
            <img src="/assets/logo.png" alt="fitur form"></img>
            <h2 className="featureFormTitle">Office</h2>
          </div>
        </div>
        <button onClick={() => navigate('')}>Registrasi</button>
      </section>
      <section class="faq">
        <div class="container">
          <div class="faq-title">
            <h2>Cara Penggunaan</h2>
            <p>Silahkan cek tutorial berikut agar kamu tidak salah langkah ya</p>
          </div>
          <ul class="faq-list">
            <li data-aos="fade-up" data-aos-delay="100" class="aos-init aos-animate">
              <a data-toggle="collapse" class="collapsed" href="#faq1" aria-expanded="false">
                Non consectetur a erat nam at lectus urna duis? <i class="fas fa-arrow-up"></i>
              </a>
              <div id="faq1" class="collapse" data-parent=".faq-list">
                <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200" class="aos-init aos-animate">
              <a data-toggle="collapse" href="#faq2" class="collapsed">
                Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i class="fas fa-arrow-up"></i>
              </a>
              <div id="faq2" class="collapse" data-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper
                  dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300" class="aos-init aos-animate">
              <a data-toggle="collapse" href="#faq3" class="collapsed">
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i class="fas fa-arrow-up"></i>
              </a>
              <div id="faq3" class="collapse" data-parent=".faq-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis
                  convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400" class="aos-init aos-animate">
              <a data-toggle="collapse" href="#faq4" class="collapsed">
                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i class="fas fa-arrow-up"></i>
              </a>
              <div id="faq4" class="collapse" data-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper
                  dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="500" class="aos-init aos-animate">
              <a data-toggle="collapse" href="#faq5" class="collapsed">
                Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="fas fa-arrow-up"></i>
              </a>
              <div id="faq5" class="collapse" data-parent=".faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit
                  turpis cursus in
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="600" class="aos-init aos-animate">
              <a data-toggle="collapse" href="#faq6" class="collapsed">
                Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="fas fa-arrow-up"></i>
              </a>
              <div id="faq6" class="collapse" data-parent=".faq-list">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus
                  vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
