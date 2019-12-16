import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';
import { CardListWrapper } from './styled';

import { fetchData } from '../../actions/ApiActions';

const CardList = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CardListWrapper>
      <Card />
    </CardListWrapper>
  );
}

const mapDispatchToProps = {
  fetchData
}

export default connect(null, mapDispatchToProps)(CardList);