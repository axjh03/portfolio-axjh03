import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline({ parentToChild }: any) {
  const { mode } = parentToChild;
  const isDark = mode === 'dark';

  const timelineCardStyle = {
    backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : '#fff',
    color: isDark ? '#f1f5f9' : '#1e293b',
    boxShadow: isDark 
      ? '0 8px 32px rgba(0, 0, 0, 0.4)' 
      : '0 3px 0 #ddd',
    border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
    backdropFilter: isDark ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: isDark ? 'blur(20px)' : 'none',
  };

  const timelineArrowStyle = {
    borderRightColor: isDark ? 'rgba(15, 23, 42, 0.8)' : '#fff',
  };

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
  contentStyle={timelineCardStyle}
  contentArrowStyle={timelineArrowStyle}
>
  <h3 className="vertical-timeline-element-title">Full Stack SWE Intern</h3>
  <h4 className="vertical-timeline-element-subtitle">Realtor.com • Austin, TX</h4>
  <p>
  My internship at Realtor.com was focused on driving efficiency and reliability across core property management systems. I engineered automated listing management features and significantly modernized the billing system by designing data pipelines and validation tools to ensure billing accuracy. My flagship project was building a custom MCP Server (Monitoring and Control Platform) which solved a massive team bottleneck: it automated the diagnosis and resolution of persistent "data pipeline" failures, saving developers countless hours of manual debugging. To ensure feature safety and flexibility, I also implemented a robust feature-flag system in the front end, enabling controlled rollouts and A/B testing based on user subscription tiers, all while developing using a modern stack including NestJS, Next.js, and TypeScript.
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
  contentStyle={timelineCardStyle}
  contentArrowStyle={timelineArrowStyle}
>
  <h3 className="vertical-timeline-element-title">Student Administrative Support</h3>
  <h4 className="vertical-timeline-element-subtitle">University of Texas at Arlington • Arlington, TX</h4>
  <p>
My role involves ensuring the security and stability of mission-critical IT infrastructure for the University of Texas at Arlington. I manage and secure Linux computer systems, ensuring smooth operation and compliance with university policies. A key contribution was streamlining IT management by organizing and centralizing the computer inventory, which significantly improved the process for applying updates and security patches campus-wide. Furthermore, I implemented robust data protection features, including disk encryption, to safeguard sensitive university data and prevent unauthorized access.
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
  contentStyle={timelineCardStyle}
  contentArrowStyle={timelineArrowStyle}
>
  <h3 className="vertical-timeline-element-title">Student Researcher</h3>
  <h4 className="vertical-timeline-element-subtitle">Cornell University • Ithaca, NY</h4>
  <p>
  As a Student Researcher, I contributed to the development of cutting-edge assistive AI systems designed to aid people with disabilities. My work focused on the performance and accuracy of computer vision technology; I conducted rigorous benchmarking and stress-testing to identify optimization opportunities. I also created a sophisticated multi-modal system that fuses both visual and audio information. This integration provided a more comprehensive environmental understanding, enhancing navigation and obstacle avoidance capabilities for visually impaired users and demonstrating my expertise in complex machine learning pipelines.
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
  contentStyle={timelineCardStyle}
  contentArrowStyle={timelineArrowStyle}
>
  <h3 className="vertical-timeline-element-title">Software Engineering Fellow</h3>
  <h4 className="vertical-timeline-element-subtitle">Headstarter • Remote</h4>
  <p>
In this fellowship, I took the lead in developing AccessWay, a travel planning platform that leverages AI and voice technology to create personalized itineraries. The core challenge was designing smart matching algorithms that could successfully align a user's specific accessibility needs—whether mobility, sensory, or cognitive—with real-time data on transportation, hotels, and venues. I drove the product from concept to execution, focusing heavily on user-centric design principles and incorporating feedback to ensure the platform delivered genuinely functional and user-friendly solutions for travelers with diverse needs.
  </p>


</VerticalTimelineElement>

</VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;
