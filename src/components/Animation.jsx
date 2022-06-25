import React from "react";

export const Animation = () => {
  return (
    <div>
      <section className="hero" id="hero-scene">
        <section className="move pd-0">
          <div className="container">
            <section className="treatment pd-0">
              <img src="/assets/img/parachains/KUSAMA-GIFS_3.gif" alt="Image" />
              <div className="typed-text-wrap">
                <span className="typed-text typed-text-hero d-block">
                  PARACHAINS ARE HERE
                </span>
                <a
                  href="/parachains"
                  className="hero-cta btn btn-outline-primary"
                  style="margin-right: 0;"
                >
                  Learn more
                </a>
              </div>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};
