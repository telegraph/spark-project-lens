import React from 'react';
import {
  CardWrapper,
  CardHeader,
  CardCurrentTask,
  CardDetails,
  CardDueDate,
} from './styled';


interface CardProps {
  clientName: string;
  projectName: string;
  campaignID: string;
  dueDate: string;
  style: object;
  key: string;
};

const Card = ({ clientName, projectName, campaignID, dueDate, style, key }: CardProps) => (
  <CardWrapper style={style} key={key}>
    <CardHeader>
      <h2>{ clientName }</h2>
      <h3>{ projectName }</h3>
    </CardHeader>

    <CardCurrentTask>
      Development Build
    </CardCurrentTask>

    <CardDetails>
      <img />
      <h4>Richard Young</h4>
      <ul>
        <li>Campaign ID: { campaignID }</li>
        <li>Test link: https://www.google.com</li>
      </ul>
    </CardDetails>

    <CardDueDate>
      <h4>Task Due date:</h4>
      <h3>{ dueDate }</h3>
    </CardDueDate>
  </CardWrapper>
);

export default Card;
