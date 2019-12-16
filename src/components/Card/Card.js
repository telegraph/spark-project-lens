import React from 'react';
import { 
  CardWrapper,
  CardHeader,
  CardCurrentTask, 
  CardDetails,
  CardDueDate 
  } from './styled';


export const Card = ({ props }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <h2>Tourism Australia</h2>
        <h3>Plan your perfect getaway longform</h3>
      </CardHeader>
      <CardCurrentTask>
        Development Build
      </CardCurrentTask>
      <CardDetails>
        <img />
        <h4>Richard Young</h4>
        <ul>
          <li>Campaign ID: asdasd</li>
          <li>Test link: https://www.google.com</li>
        </ul>
      </CardDetails>
      <CardDueDate>
        <h4>Task Due date:</h4>
        <h3>12th January</h3>
      </CardDueDate>
    </CardWrapper>
  );
}