import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import { animated, useTransition } from 'react-spring';
import { DateTime } from 'luxon';
import styles from './CardList.module.css';

import { ReducerState } from '../../actions/types';
import { fetchData } from '../../actions/ApiActions';

interface StateProps {
  feed: any;
}

interface DispatchProps {
  fetchData(): void;
}

type CardListProps = StateProps & DispatchProps;

const isDueSoon = (date: object) => {
  const now = DateTime.local();
  if (now.plus({days: 5}) > date) return true;
  return false;
};


const CardList = ({ fetchData, feed }: CardListProps) => {
  const transitions = useTransition(feed, card => card.uid, {
    from: { transform: 'translate3d(0,0px,0)' , opacity: 0, },
    enter: { transform: 'translate3d(0,-20px,0)', opacity: 1, },
    leave: { transform: 'translate3d(0,0,0)', opacity: 0, },
    trail: 300,
    unique: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {transitions.map(({item, props, key}) => <Card style={props} key={key} clientName={item.clientName} projectName={item.projectName} campaignID={item.campaignID} assignedDev={item.assignedDev} currentTask={item.currentTask} dueDate={item.dueDate.toFormat('dd LLLL')} dueSoon={isDueSoon(item.dueDate)} />)}
    </div>
  );
};

const mapDispatchToProps = {
  fetchData,
};

const mapStateToProps = (state: any) => {
  return {
    // TODO: sorting will be done here
    feed: state.tasks.map((card: any, i: number) => (
      {...card, dueDate: DateTime.fromFormat(card.dueDate, "yyyy-MM-dd'T'TT:SSSZZZ"), uid: i }
    ))
    .sort((a: any, b: any) => (
      (a.dueDate > b.dueDate) ? 1 : -1
    )),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
