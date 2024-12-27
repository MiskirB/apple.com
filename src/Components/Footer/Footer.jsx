import React, { useState } from "react";
import icon16 from "../../assets/images/icons/16.png"; // Replace with your actual path for the flag icon.

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-internal-wrapper">
        <div className="footer-upper-text-container">
          1. Hearing Aid and Hearing Test: The Hearing Aid feature has received
          FDA authorization. The Hearing Test and Hearing Aid features are
          supported on AirPods Pro 2 with the latest firmware paired with a
          compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and are
          intended for people 18 years old or older. The Hearing Aid feature is
          also supported on a compatible Mac with macOS Sequoia and later. It is
          intended for people with perceived mild to moderate hearing loss.
          <br />
          Hearing Protection: The Hearing Protection feature works with AirPods
          Pro 2 with the latest firmware when paired with a compatible iPhone,
          iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later.
          Feature is only available in the U.S. and Canada. See
          support.apple.com/120850 for total attenuation and more information.
          The Hearing Protection feature is not suitable for protection against
          extremely loud impulse sounds, such as gunfire, fireworks, or
          jackhammers, or against sustained sounds louder than 110 dBA.
          <br />
          2.Available in two models: AirPods 4 and AirPods 4 with Active Noise
          Cancellation.
          <br />
          3. Trade‑in values will vary based on the condition, year, and
          configuration of your eligible trade‑in device. Not all devices are
          eligible for credit. You must be at least the age of majority to be
          eligible to trade in for credit or for an Apple Gift Card. Trade‑in
          value may be applied toward qualifying new device purchase, or added
          to an Apple Gift Card. Actual value awarded is based on receipt of a
          qualifying device matching the description provided when estimate was
          made. Sales tax may be assessed on full value of a new device
          purchase. In‑store trade‑in requires presentation of a valid photo ID
          (local law may require saving this information). Offer may not be
          available in all stores, and may vary between in‑store and online
          trade‑in. Some stores may have additional requirements. Apple or its
          trade‑in partners reserve the right to refuse, cancel, or limit
          quantity of any trade‑in transaction for any reason. More details are
          available from Apple’s trade-in partner for trade‑in and recycling of
          eligible devices. Restrictions and limitations may apply.
          <br />
          Apple Intelligence is available in beta on all iPhone 16 models,
          iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and
          Mac models with M1 and later, with Siri and device language set to
          English (Australia, Canada, Ireland, New Zealand, South Africa, UK, or
          U.S.), as part of an iOS 18, iPadOS 18, and macOS Sequoia software
          update. Additional features and languages will be available in April,
          with more languages coming over the course of the year. Languages
          supported in 2025 include Chinese, English (India, Singapore), French,
          German, Italian, Japanese, Korean, Portuguese, Spanish, and
          Vietnamese.
          <br />A subscription is required for Apple Arcade, Apple Fitness+,
          Apple Music, and Apple TV+.
          <br />
          Features are subject to change. Some features, applications, and
          services may not be available in all regions or all languages.
          <a href="#"> Full terms apply</a>.
        </div>

        {/* Footer links section */}
        <div className="footer-links-wrapper">
          {/* Section 1 */}
          <div className="footer-links-wrapper-1">
            <h3 onClick={() => toggleSection("section1")}>Shop and Learn</h3>
            <ul className={openSections.section1 ? "active" : ""}>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">iPad</a>
              </li>
              <li>
                <a href="#">iPhone</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="footer-links-wrapper-2">
            <h3 onClick={() => toggleSection("section2")}>Services</h3>
            <ul className={openSections.section2 ? "active" : ""}>
              <li>
                <a href="#">Apple Music</a>
              </li>
              <li>
                <a href="#">Apple TV+</a>
              </li>
              <li>
                <a href="#">Apple Fitness+</a>
              </li>
              <li>
                <a href="#">iCloud</a>
              </li>
              <li>
                <a href="#">Apple Podcasts</a>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="footer-links-wrapper-3">
            <h3 onClick={() => toggleSection("section3")}>Apple Store</h3>
            <ul className={openSections.section3 ? "active" : ""}>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at Apple</a>
              </li>
              <li>
                <a href="#">Apple Trade In</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shopping Help</a>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="footer-links-wrapper-4">
            <h3 onClick={() => toggleSection("section4")}>For Business</h3>
            <ul className={openSections.section4 ? "active" : ""}>
              <li>
                <a href="#">Apple and Business</a>
              </li>
              <li>
                <a href="#">Shop for Business</a>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="footer-links-wrapper-5">
            <h3 onClick={() => toggleSection("section5")}>About Apple</h3>
            <ul className={openSections.section5 ? "active" : ""}>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Apple Leadership</a>
              </li>
              <li>
                <a href="#">Career Opportunities</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="my-apple-wrapper">
          More ways to shop: <a href="#">Find an Apple Store</a> or
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>

        <div className="copyright-wrapper">
          <div className="copyright">
            Copyright &copy; 2019 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sales and Refunds</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footer-country">
            <div className="flag-wrapper">
              <img src={icon16} alt="Country flag" />
            </div>
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import icon16 from "../../assets/images/icons/16.png";

// const Footer = () => {
//   return (
//     <footer className="footer-wrapper">
//       <div className="internal-wrapper">
// <div className="upper-text-container">
//   1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
//   promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in
//   good condition. Additional trade‑in values require purchase of a new
//   iPhone, subject to availability and limits. Must be at least 18. Apple
//   or its trade-in partners reserve the right to refuse or limit any
//   Trade In transaction for any reason. In‑store trade‑in requires
//   presentation of a valid, government-issued photo ID (local law may
//   require saving this information). Sales tax may be assessed on full
//   value of new iPhone. Additional terms from Apple or Apple’s trade-in
//   partners may apply. Monthly pricing: Available to qualified customers
//   and requires 0% APR, 24‑month installment loan with Citizens One, and
//   iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon.{" "}
//   <a href="#"> Full terms apply</a>.
// </div>
//         <div className="footer-links-wrapper">
//           <div className="links-wrapper-1">
//             <h3>Shop and Learn</h3>
//             <ul>
//               <li>
//                 <a href="#">Mac</a>
//               </li>
//               <li>
//                 <a href="#">iPad</a>
//               </li>
//               <li>
//                 <a href="#">iPhone</a>
//               </li>
//               <li>
//                 <a href="#">Watch</a>
//               </li>
//               <li>
//                 <a href="#">TV</a>
//               </li>
//               <li>
//                 <a href="#">Music</a>
//               </li>
//               <li>
//                 <a href="#">AirPods</a>
//               </li>
//               <li>
//                 <a href="#">HomePod</a>
//               </li>
//               <li>
//                 <a href="#">iPod touch</a>
//               </li>
//               <li>
//                 <a href="#">Accessories</a>
//               </li>
//               <li>
//                 <a href="#">Gift Cards</a>
//               </li>
//             </ul>
//           </div>
//           <div className="links-wrapper-2">
//             <h3>Services</h3>
//             <ul>
//               <li>
//                 <a href="#">Apple Music</a>
//               </li>
//               <li>
//                 <a href="#">Apple News+</a>
//               </li>
//               <li>
//                 <a href="#">Apple TV+</a>
//               </li>
//               <li>
//                 <a href="#">Apple Arcade</a>
//               </li>
//               <li>
//                 <a href="#">Apple Card</a>
//               </li>
//               <li>
//                 <a href="#">iCloud</a>
//               </li>
//             </ul>
//             <h3>Account</h3>
//             <ul>
//               <li>
//                 <a href="#">Manage Your Apple ID</a>
//               </li>
//               <li>
//                 <a href="#">Apple Store Account</a>
//               </li>
//               <li>
//                 <a href="#">iCloud.com</a>
//               </li>
//             </ul>
//           </div>
//           <div className="links-wrapper-3">
//             <h3>Apple Store</h3>
//             <ul>
//               <li>
//                 <a href="#">Find a Store</a>
//               </li>
//               <li>
//                 <a href="#">Genius Bar</a>
//               </li>
//               <li>
//                 <a href="#">Today at Apple</a>
//               </li>
//               <li>
//                 <a href="#">Apple Camp</a>
//               </li>
//               <li>
//                 <a href="#">Field Trip</a>
//               </li>
//               <li>
//                 <a href="#">Apple Store App</a>
//               </li>
//               <li>
//                 <a href="#">Refurbished and Clearance</a>
//               </li>
//               <li>
//                 <a href="#">Financing</a>
//               </li>
//               <li>
//                 <a href="#">Apple Trade In</a>
//               </li>
//               <li>
//                 <a href="#">Order Status</a>
//               </li>
//               <li>
//                 <a href="#">Shopping Help</a>
//               </li>
//             </ul>
//           </div>
//           <div className="links-wrapper-4">
//             <h3>For Business</h3>
//             <ul>
//               <li>
//                 <a href="#">Apple and Business</a>
//               </li>
//               <li>
//                 <a href="#">Shop for Business</a>
//               </li>
//             </ul>
//             <h3>For Education</h3>
//             <ul>
//               <li>
//                 <a href="#">Apple and Education</a>
//               </li>
//               <li>
//                 <a href="#">Shop for College</a>
//               </li>
//             </ul>
//             <h3>For Healthcare</h3>
//             <ul>
//               <li>
//                 <a href="#">Manage Your Apple ID</a>
//               </li>
//               <li>
//                 <a href="#">Apple Store Account</a>
//               </li>
//               <li>
//                 <a href="#">iCloud.com</a>
//               </li>
//             </ul>
//             <h3>For Government</h3>
//             <ul>
//               <li>
//                 <a href="#">Apple and Education</a>
//               </li>
//               <li>
//                 <a href="#">Shop for College</a>
//               </li>
//             </ul>
//           </div>

//           <div className="links-wrapper-5">
//             <h3>Apple Values</h3>
//             <ul>
//               <li>
//                 <a href="#">Find a Store</a>
//               </li>
//               <li>
//                 <a href="#">Genius Bar</a>
//               </li>
//               <li>
//                 <a href="#">Today at Apple</a>
//               </li>
//               <li>
//                 <a href="#">Apple Camp</a>
//               </li>
//               <li>
//                 <a href="#">Field Trip</a>
//               </li>
//               <li>
//                 <a href="#">Apple Store App</a>
//               </li>
//             </ul>
//             <h3>About Apple</h3>
//             <ul>
//               <li>
//                 <a href="#">Find a Store</a>
//               </li>
//               <li>
//                 <a href="#">Genius Bar</a>
//               </li>
//               <li>
//                 <a href="#">Today at Apple</a>
//               </li>
//               <li>
//                 <a href="#">Apple Camp</a>
//               </li>
//               <li>
//                 <a href="#">Field Trip</a>
//               </li>
//               <li>
//                 <a href="#">Apple Store App</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="my-apple-wrapper">
//           More ways to shop: <a href="#">Find an Apple Store</a> or
//           <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
//         </div>
//         <div className="copyright-wrapper">
//           <div className="copyright">
//             Copyright &copy; 2019 Apple Inc. All rights reserved.
//           </div>
//           <div className="footer-links-terms">
//             <ul>
//               <li>
//                 <a href="#">Privacy Policy</a>
//               </li>
//               <li>
//                 <a href="#">Terms of Use</a>
//               </li>
//               <li>
//                 <a href="#">Sales and Refunds</a>
//               </li>
//               <li>
//                 <a href="#">Legal</a>
//               </li>
//               <li>
//                 <a href="#">Site Map</a>
//               </li>
//             </ul>
//           </div>
//           <div className="footer-country">
//             <div className="flag-wrapper">
//               <img src={icon16} />
//             </div>
//             <div className="footer-country-name">United States</div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
