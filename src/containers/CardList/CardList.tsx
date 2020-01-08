import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import { animated, useTransition } from 'react-spring';
import { DateTime } from 'luxon';
import styles from './CardList.module.css';

import { fetchData } from '../../actions/ApiActions';

interface StateProps {
  feed: any;
}

interface DispatchProps {
  fetchData(): void;
}

type CardListProps = StateProps & DispatchProps;


const CardList = ({ fetchData, feed }: CardListProps) => {

  const transitions = useTransition(feed, card => card.campaignID, {
    from: { transform: 'translate3d(0,0px,0)', opacity: 0, },
    enter: { transform: 'translate3d(0,-20px,0)', opacity: 1, },
    leave: { transform: 'translate3d(0,0,0)', opacity: 0, },
    trail: 150,
    unique: true,
  })

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {transitions.map(({item, props, key}) =><Card style={props} key={key} clientName={item.clientName} projectName={item.projectName} campaignID={item.campaignID} dueDate={item.dueDate.toISODate()} />)}
    </div>
  );
};

const mapDispatchToProps = {
  fetchData,
};

const mapStateToProps = (state: any) => {
  return {
    // TODO: sorting will be done here
    feed: state.map((card: any) => (
      {...card, dueDate: DateTime.fromFormat(card.dueDate, "yyyy-MM-dd'T'TT:SSSZZZ"),}
    ))
    .sort((a: any, b: any) => (
      (a.dueDate > b.dueDate) ? 1 : -1
    )),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
