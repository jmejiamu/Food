import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultsList from '../components/ResultList'

const SearchScreen = () => {
    const [ term, setTerm ] = useState(''); 
    const [searchApi, results, errorMessage] = useResult();

    const filterResultsByPrice = (price) => {
      return results.filter(result => {
        return result.price === price;
      })
    }
  return (
      <View>
          <SearchBar 
            term = {term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
        {errorMessage ? <Text>{errorMessage} </Text> : null}
        <Text>We have found {result.length} result</Text>
        <ResultsList result={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList result={filterResultsByPrice('$$')} title="Bit Pricer" />
        <ResultsList result={filterResultsByPrice('$$$')} title="Big Speder" />
      </View>
  );  
}

const styles = StyleSheet.create({});

export default SearchScreen;