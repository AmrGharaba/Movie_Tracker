import React from "react";
import "./aboutus.css";

const AboutUs = props => {

    return (
        <>
            <div className="aboutus">
                <div className="idea">
                    <img className="aboutus-img" src="https://i.pinimg.com/originals/41/84/03/418403901cb473e2b76d8791ee7460c8.jpg" alt="movies collections" />
                    <div className="text text1">
                        <h1>Movie Tracker idea</h1>
                        <span></span>
                        <p>Our webiste idea revolves around the development of an innovative Movie
                            Tracker website that aims to redefine how users interact with the world
                            of cinema. The platform will boast a user-friendly interface, offering
                            advanced features like personalized movie recommendations based on
                            individual viewing habits and preferences. In addition to traditional
                            tracking capabilities, the website will introduce a unique social component,
                            enabling users to connect with fellow movie enthusiasts. Users can share
                            reviews, create curated lists, and engage in discussions, fostering
                            a vibrant community.
                        </p>
                    </div>
                </div>

                <div className="vision">
                    <img className="aboutus-img" src="https://e1.pxfuel.com/desktop-wallpaper/487/93/desktop-wallpaper-the-hangover-part-iii-movie-hangover.jpg" alt="movies collections" />
                    <div className="text text2">
                        <h1>Our Vision</h1>
                        <span></span>
                        <p>Our vision for the Movie Tracker website is to create a comprehensive
                            and user-centric platform that revolutionizes the way people engage with
                            and explore the world of cinema. We envision a seamless and intuitive
                            interface that empowers users to effortlessly discover, track, and enjoy
                            their favorite movies. By integrating advanced algorithms and personalized
                            recommendations, we aim to provide a tailored movie-watching experience
                            based on individual preferences and viewing history.
                        </p>
                    </div>
                </div>

                <div className="apart">
                    <img className="aboutus-img" src="https://i.ytimg.com/vi/YntnT3OOKAE/maxresdefault.jpg" alt="movies collections" />
                    <div className="text text3">
                        <h1>What set us apart?</h1>
                        <span></span>
                        <p>What sets our Movie Tracker website apart is its commitment to providing
                            a uniquely personalized and enriching movie-watching experience. Unlike
                            other platforms, we leverage cutting-edge algorithms and artificial
                            intelligence to understand the individual preferences and viewing habits
                            of our users. Our platform goes beyond mere information storage by
                            creating a dynamic and interactive community. our Movie Tracker website
                            transforms movie tracking into a social and enjoyable experience,
                            establishing itself as a leader in the realm of personalized entertainment
                            discovery.
                        </p>
                    </div>
                </div>

                <div className="team">
                    <img className="aboutus-img" src="https://ntvb.tmsimg.com/assets/p10086642_v_h10_ad.jpg?w=1280&h=720" alt="movies collections" />
                    <div className="text text4">
                        <h1>Our Team Work</h1>
                        <span></span>
                        <p>Our team is driven by a shared passion for film and a commitment to
                            delivering an exceptional Movie Tracker website. Each member brings
                            a unique set of skills, from web development and design to data analytics
                            and artificial intelligence. Collaboration is at the core of our teamwork,
                            as we brainstorm creative ideas to enhance user experience and engagement.
                            Our developers work seamlessly to create an intuitive interface that ensures
                            easy navigation and functionality. Our collective goal is to not only build
                            a Movie Tracker website but to craft a digital space that becomes synonymous
                            with the joy of discovering and sharing great films.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;