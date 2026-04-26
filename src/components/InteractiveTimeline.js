import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const InteractiveTimeline = () => {
  const [items] = useState([
    {
      date: '2023',
      title: 'Project A',
      description: 'Description of Project A',
      icon: '🛠️'
    },
    {
      date: '2022',
      title: 'Software Engineer at XYZ',
      description: 'Worked on various projects involving React and Node.js',
      icon: '💼'
    },
    {
      date: '2021',
      title: 'Master of Science in Computer Science',
      description: 'Completed MS from ABC University',
      icon: '🎓'
    },
    {
      date: '2020',
      title: 'Bachelor of Technology in Information Technology',
      description: 'Graduated from DEF College',
      icon: '🎓'
    }
  ]);

  return (
    <div>
      <noscript>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <strong>{item.date}</strong>: {item.title} - {item.description}
            </li>
          ))}
        </ul>
      </noscript>
      <VerticalTimeline>
        {items.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={item.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<span>{item.icon}</span>}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default InteractiveTimeline;