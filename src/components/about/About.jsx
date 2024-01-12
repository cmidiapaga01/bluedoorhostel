import React from "react";
import "./About.css";
import aboutImage from "../../assets/images/img_4.jpg";

const About = () => {
  return (
    <section className="about section-p bg-dark" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={aboutImage} alt="Onde estamos" />
          </div>
          <div className="content-right text-white">
            <div className="section-t">
              <h3>How to find us</h3>
            </div>
            <p className="text mb-1">
              Located in Tirana, 1.3 km from Skanderbeg Square, Blue Door Hostel provides accommodation with a garden, private parking, a shared lounge and a terrace. Featuring a bar, the hostel is close to several noted attractions, around 1 km from Tanners' Bridge, 1.1 km from National Theatre of Opera and Ballet of Albania and 1.1 km from Toptani Shopping Centre. The accommodation offers karaoke and a shared kitchen.

              Free WiFi is available to all guests, while selected rooms come with a balcony. At the hostel each room has bed linen and towels.

              Guests at Blue Door Hostel can enjoy a vegetarian breakfast.

              You can play darts at the accommodation, and bike hire and car hire are available.

              Popular points of interest near Blue Door Hostel include National Gallery of Arts Tirana, Clock Tower Tirana and Et'hem Bey Mosque. The nearest airport is Tirana International Mother Teresa, 15 km from the hostel, and the property offers a paid airport shuttle service.

              Couples particularly like the location — they rated it 8.0 for a two-person trip.
            </p>
            <p className="text">
              Why staying here?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
