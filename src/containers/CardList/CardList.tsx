import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import CardListWrapper from './styled';

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
    <CardListWrapper>
      <Card clientName="foo" />
      <Card clientName="bar" />
      <Card clientName="baz" />
      <Card clientName="boo" />
    </CardListWrapper>
  );
};

const mapDispatchToProps = {
  fetchData,
};

export default connect(null, mapDispatchToProps)(CardList);
