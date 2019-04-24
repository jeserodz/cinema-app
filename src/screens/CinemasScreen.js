import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Screen from '../components/Screen';
import CinemasCard from '../components/CinemasCard';
import { getData } from '../api';

const CinemasScreen = ({ navigation }) => {
  const [data, setData] = useState({ cities: [] });
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await getData();
    setLoading(false);
    setData(response.data);
  }

  // fetch initial data
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Screen title="Cines" loading={loading}>
      <CinemasContainer>
        {data.cities.map(city => (
          <CinemasCard
            key={city.id}
            cityName={city.name}
            cinemas={city.cinemas}
            onCinemaPress={cinema => navigation.navigate({
              routeName: 'Cinema',
              key: 'cinema-screen',
              params: { cinemaId: cinema.id },
            })}
          />
        ))}
      </CinemasContainer>
    </Screen>
  );
};

CinemasScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const CinemasContainer = styled.ScrollView`
  flex: 1;
`;

export default CinemasScreen;
