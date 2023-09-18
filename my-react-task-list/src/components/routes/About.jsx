import React from 'react';
import Menu from './Menu';
import './About.css'

export default function About() {
  return (
    <div>
      <Menu/>
      <h1>About Us</h1>
      <p>Our Task List application helps you efficiently keep your tasks under control. Some of its features include:</p>

      <div>
        <ul>
          <li>Simple task management.</li>
          <li>Progress tracking with checkboxes.</li>
          <li>Easy task deletion.</li>
          <li>Persistent data storage in your browser.</li>
        </ul>
        <p>We are committed to continuously improving our application and providing you with the best possible experience.</p>
        <p>This application was developed using modern technologies such as React and React Router to ensure optimal performance and usability.</p>
        <div>
          <p>By Ómar Saldarriaga</p>
        </div>
      </div>
    </div>
  );
}
