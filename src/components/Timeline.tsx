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
    I interned at Realtor.com where I built automated features to help property builders manage their listings more easily. I worked on modernizing their billing system using data pipelines and validation tools to make sure everything was accurate. I created automated workflows using AWS services to reduce manual work and prevent errors. I helped migrate their data from one system to another, making their reporting faster and more reliable. I built reusable React components and set up documentation tools to help the team work more efficiently. Throughout my internship, I used modern technologies like NestJS, Next.js, and TypeScript to build features that made the platform better for everyone.
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
    I worked as Student Administrative Support at the University of Texas at Arlington where I managed Linux computer systems, making sure they were secure and running smoothly. I helped organize all the university's computers by setting them up with proper management tools, making it easier to keep them updated and secure. I also set up security features like encryption to protect university data and prevent unauthorized access.
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
    I worked as a Student Researcher at Cornell University where I built AI systems to help people with disabilities. I worked on computer vision technology that could better understand and describe what it sees, making it much more accurate and reliable. I improved how these AI models run by making them faster and more efficient. I also created a system that combines both visual and audio information to help visually impaired people navigate better and avoid obstacles more effectively.
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
    I worked as a Software Engineering Fellow at Headstarter where I led the development of <strong>AccessWay</strong>, a travel planning platform that uses AI and voice technology to create personalized travel plans for people with disabilities. I built smart systems that could match people's accessibility needs with real-time information about transportation, hotels, and places to visit. I focused on making the platform user-friendly and worked closely with users to get feedback, making sure it worked well for travelers with different mobility, sensory, and cognitive needs.
  </p>


</VerticalTimelineElement>

</VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;
