import classes from "./AboutMe.module.css"
import profile from "../assets/profile.jpg"

const AboutMe = () => {
    return (
        <div>
            <section>
                <div className={classes['animation-wrapper']}>
                    <div className={classes.animation}>
                        Web Developer and Tennis Enthusiast
                    </div>
                </div>
                <div>
                    <img className={classes.profile} src={profile} alt="Profile" />
                </div>
            </section>

            <section className={classes['aboutme-wrapper']}>
                <div className={classes.aboutme}>
                    <h1>Hi, I'm David. Nice to meet you.</h1>
                    <p>
                        Whilst I have always enjoyed technology, I never found the right path to turn it into a career until a pivotal moment during the Covid-19 lockdowns. I made an impulsive decision to start a Diploma of Software Development at Yoobee Colleges. This journey has been incredibly rewarding, filled with challenges and continuous learning.
                    </p>
                    <p>
                        My mission is clear: I aspire to work in an environment that values inclusivity and teamwork while making meaningful contributions to great projects. I believe in the power of technology to bring positive change.
                    </p>
                    <p>
                        Outside of work, I love sports. You'll often find me on the tennis court or watching the New Zealand Warriors, sharing my passion for sports and teamwork.
                    </p>
                    <p>
                        My studies at Yoobee and my experience as a Digital Technology teacher at Papakura High School have equipped me with valuable skills,  I'm excited to showcase these skills below.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutMe