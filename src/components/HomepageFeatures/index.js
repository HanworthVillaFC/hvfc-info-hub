import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "For Players and Coaches",
    image: require("@site/static/img/for-players.png").default,
    description: (
      <>
        Everything you need to enjoy your football and help the team succeed, from matchday information to training tips and club policies.
      </>
    ),
  },
  {
    title: "For Staff and Volunteers",
    image: require("@site/static/img/for-staff.png").default,
    description: (
      <>
        Helping the club run smoothly starts with clear information and simple tools. This section gives you what you need to support
        visitors, manage matchdays, and keep the club thriving.
      </>
    ),
  },
  {
    title: "For Youth and Parents",
    image: require("@site/static/img/for-youth.png").default,
    description: (
      <>
        Here you'll find important details about youth football, safeguarding, matchday routines, and how we work together to make football
        fun and safe for everyone.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
