import React from 'react';
import { sendNewsCreator, updateNewNewsBodyCreator } from '../../redux/news-reducer';
import News from './News';


const NewsContainer = (props) => {
  
  let state = props.store.getState().newsPage;
  
  let oneSendNewsClick = () => {
    props.store.dispatch(sendNewsCreator ())
  };

  let onNewNewsChange = (news) => {
    props.store.dispatch(updateNewNewsBodyCreator(news))
  };

  return <News updateNewNewsBody={onNewNewsChange} sendNews={oneSendNewsClick} newsPage={state} />
}

export default NewsContainer;