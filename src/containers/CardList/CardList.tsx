import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import styles from './CardList.module.css';

import { fetchData } from '../../actions/ApiActions';

interface StateProps {}

interface DispatchProps {
  fetchData(): void;
}

type CardListProps = StateProps & DispatchProps;


const CardList = ({ fetchData }: CardListProps) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Card clientName="foo" />
      <Card clientName="bar" />
      <Card clientName="baz" />
      <Card clientName="boo" />
    </div>
  );
};

const mapDispatchToProps = {
  fetchData,
};

export default connect(null, mapDispatchToProps)(CardList);
