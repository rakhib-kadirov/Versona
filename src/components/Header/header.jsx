import '../../styles/Header/logo/logo.css';
import '../../styles/Header/header.css';
import { scrollToElement } from '../Main/scrollToElement/scrollToElement';

export function Header() {
  return (
    <>
      <section className='header'>
        <div className='container'>
          <div className="logo-container">
            <div className="logo voice-wave" aria-hidden="true">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
            <div className="logo-center center-bar" aria-hidden="true">
              <span className="bar" />
            </div>
            <div className="logo voice-wave reverse" aria-hidden="true">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
          </div>
          <div className='header-text'>
            <h1 className='header-title'>Versona</h1>
            {/* <p className='header-subtitle'>Your SaaS solution for voice verification</p> */}
            <p className='header-subtitle'>Your voice defines your identity.</p>
          </div>
          {/* <div className='header-list'>
            <ul className='list-items'>
              <li><a>Mode</a></li>
              <li><a>Product</a></li>
              <li><a>Blogs</a></li>
            </ul>
          </div> */}
        </div>
        <div className='header-buttons'>
          {/* <button className='button-login'>Log In</button> */}
          <button onClick={scrollToElement} className='button-started'>Get Started</button>
        </div>
      </section>
    </>
  );
}