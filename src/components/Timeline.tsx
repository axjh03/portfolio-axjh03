import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="May 2025 – Aug 2025"
  iconStyle={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  icon={
    <img
      src="https://www.freelogovectors.net/wp-content/uploads/2022/06/realtor-com-logo_freelogovectors.net_.png"
      alt="Realtor"
      style={{ width: '100%', height: '100%',  borderRadius:'50%' }}
    />
  }
>
  <h3 className="vertical-timeline-element-title">Full Stack SWE Intern</h3>
  <h4 className="vertical-timeline-element-subtitle">Austin, TX</h4>
  <p>
    [will add after end of internship]
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="August 2023 – Present"
  iconStyle={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  icon={
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/University_of_Texas_at_Arlington_seal.svg/1200px-University_of_Texas_at_Arlington_seal.svg.png"
      alt="UTA"
      style={{ width: '100%', height: '100%' }}
    />
  }
>
  <h3 className="vertical-timeline-element-title">Student Administrative Support</h3>
  <h4 className="vertical-timeline-element-subtitle">Arlington, TX</h4>
  <p>
    Managed Debian-based Linux systems (Red Hat and Ubuntu) on-site, conducting security compliance checks and hardware maintenance while authoring technical documentation, resulting in a 25% reduction in system downtime.
    <br /><br />
    Centralized IT asset management by enrolling devices into Active Directory and Microsoft Intune, streamlining device control, patch management, and software updates across university-owned systems.
    <br /><br />
    Deployed and managed endpoint security solutions such as BitLocker and device encryption, ensuring university devices remained secure against unauthorized access and data breaches.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="June 2024 – June 2024"
  iconStyle={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  icon={
    <img
      src="http://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png"
      alt="Cornell"
      style={{ width: '100%', height: '100%' }}
    />
  }
>
  <h3 className="vertical-timeline-element-title">Student Researcher</h3>
  <h4 className="vertical-timeline-element-subtitle">Ithaca, NY</h4>
  <p>
    Engineered computer vision solutions for assistive technology with Cornell Bowers CIS faculty, leveraging LLAVA, YOLO, and CogLVM frameworks to achieve 90% reduction in hallucinations and 80% increase in model accuracy.
    <br /><br />
    Refined AI model deployments in Docker, boosting performance by 90% and cutting object recognition time by 40%.
    <br /><br />
    Developed novel multi-modal AI system integrating visual and auditory inputs, enhancing navigation assistance for visually impaired users with 70% improvement in obstacle avoidance accuracy.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="Jan 2024 – Feb 2024"
  iconStyle={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  icon={
    <img
      src="https://framerusercontent.com/images/6jnx5trcHFCfs4d4HfmtJBHM.png"
      alt="Headstarter"
      style={{ width: '100%', height: '100%', borderRadius:'50%' }}
    />
  }
>
  <h3 className="vertical-timeline-element-title">Software Engineering Fellow</h3>
  <h4 className="vertical-timeline-element-subtitle">Remote</h4>
  <p>
  Spearheaded the development of <strong>AccessWay</strong>, a travel planning platform that uses AI and text-to-speech (TTS) technologies to create inclusive and personalized itineraries for travelers with disabilities.
  <br /><br />
  Engineered intelligent systems that match user preferences and accessibility needs with real-time data on transit, accommodations, and points of interest.
  <br /><br />
  Championed user-first design principles and coordinated weekly feedback cycles, ensuring the platform effectively supports solo and group travelers with diverse mobility, sensory, and cognitive needs.
</p>


</VerticalTimelineElement>

</VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;
