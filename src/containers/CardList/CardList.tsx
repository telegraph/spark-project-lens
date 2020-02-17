import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Card from '../../components/Card/Card';
import {useTransition} from 'react-spring';
import {DateTime} from 'luxon';
import styles from './CardList.module.css';
import {Task} from '../../actions/types';
import ToggleButton from '../../components/ToggleButton/ToggleButton';

import {ReducerState} from '../../actions/types';
import {fetchData} from '../../actions/ApiActions';

interface StateTask extends Task {
  uid: string;
  dueDate: DateTime;
}

interface StateProps {
  feed: StateTask[];
}

interface DispatchProps {
  fetchData(): void;
}

type CardListProps = StateProps & DispatchProps;

const isDueSoon = (date: object): boolean => {
  const now = DateTime.local();
  if (now.plus({days: 5}) > date) return true;
  return false;
};

const convertStringToDate = (dateString: string): DateTime =>
  DateTime.fromFormat(dateString, "yyyy-MM-dd'T'TT:SSSZZZ");


const CardList: React.FunctionComponent<CardListProps> = ({fetchData, feed}: CardListProps) => {
  const [compact, setCompact] = useState(false);

  const transitions = useTransition(feed, card => card.uid, {
    from: {transform: 'translate3d(0,0px,0)' , opacity: 0,},
    enter: {transform: 'translate3d(0,-20px,0)', opacity: 1,},
    leave: {transform: 'translate3d(0,0,0)', opacity: 0,},
    trail: 300,
    unique: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {transitions.map(({item, props, key}) => (
        <Card
          style={props}
          key={key}
          clientName={item.clientName}
          projectName={item.projectName}
          campaignID={item.campaignID}
          assignedDev={item.assignedDev}
          currentTask={item.currentTask}
          dueDate={item.dueDate.toFormat('dd LLLL')}
          dueSoon={isDueSoon(item.dueDate)}
          isCompact={compact}
        />
      ))}

      <ToggleButton onClick={(): void => {setCompact(!compact);}} currentState={compact} label="Compact" />
    </div>
  );
};

const mapDispatchToProps: DispatchProps = {
  fetchData,
};

const mapStateToProps = (state: ReducerState): StateProps => {
  return {
    feed: state.tasks.map((card: any, i: number) => ({
      ...card,
      dueDate: convertStringToDate(card.dueDate),
      uid: i
    }))
      .sort((a: StateTask, b: StateTask) => (
        (a.dueDate > b.dueDate) ? 1 : -1
      )),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
