import React from "react";
import laptop from "../../assets/images/home/mac-laptop.jpg";
import watch from "../../assets/images/icons/watch-series5-logo.png";
import applecard from "../../assets/images/icons/apple-card-logo.png";
import appletv from "../../assets/images/icons/apple-tv-logo.png";
import servantlogo from "../../assets/images/icons/servant-logo.png";
import newipad from "../../assets/images/icons/new-ipad-logo.png";

const Section = () => {
  return (
    <div className="main-highlight-wrapper">
      <div className="container">
        <div className="internal-wrapper">
          <div className="model">16-inch model</div>

          <div className="product-title">MacBook Pro</div>

          <div className="brief-description">The best for the brightest.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>

          <div className="main-image-wrapper">
            <img src={laptop} />
          </div>
        </div>
        <div />
      </div>
      <div className="second-highlight-wrapper">
        <div className="internal-wrapper">
          <div className="title-wrapper">iPhone 11 Pro</div>

          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>

          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="third-highlight-wrapper">
        <div className="internal-wrapper">
          <div className="title-wrapper">iPhone 11</div>
          <div className="description-wrapper">
            Just the right amount of everything.
          </div>
          <div className="price-wrapper">
            From $16.62/mo. or $399 with trade‑in.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fourth-highlight-wrapper">
        <div className="left-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={watch} />
            </div>
          </div>
          <div className="description-wrapper">
            With the new Always-On Retina display.
            <br />
            You’ve never seen a watch like this.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={applecard} />
            </div>
          </div>
          <div className="description-wrapper">
            Get 3% Daily Cash on purchases from Apple using Apple Card.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fifth-highlight-wrapper">
        <div className="left-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={appletv} />
            </div>
          </div>

          <div className="tvshow-logo-wrapper">
            <img src={servantlogo} />
          </div>

          <div className="watch-more-wrapper">
            <a href="#">Watch the trailer</a>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">AirPods Pro</div>
          </div>

          <div className="description-wrapper">
            Magic like you’ve never heard.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sixth-highlight-wrapper">
        <div className="left-side-wrapper">
          <div className="model">16-inch model</div>

          <div className="product-title-small">MacBook Pro</div>

          <div className="description-wrapper">The best for the brightest.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={newipad} />
            </div>
          </div>

          <div className="description-wrapper">
            Like a computer. Unlike any computer.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
