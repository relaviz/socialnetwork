import { sendNewsCreator, updateNewNewsBodyCreator } from '../../redux/news-reducer';
import News from './News';
import { connect } from 'react-redux';

// const NewsContainer = () => {

//   return <StoreContext.Consumer> 
//     {(store) => {
//       let state = store.getState().newsPage;

//       let oneSendNewsClick = () => {
//         store.dispatch(sendNewsCreator())
//       };

//       let onNewNewsChange = (news) => {
//         store.dispatch(updateNewNewsBodyCreator(news))
//       };
//       return <News updateNewNewsBody={onNewNewsChange}
//         sendNews={oneSendNewsClick} newsPage={state} />
//     }
//   }
//   </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
  return {
    newsPage: state.newsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewNewsBody: (news) => {
      dispatch(updateNewNewsBodyCreator(news));
    },
    sendNews: () => {
      dispatch(sendNewsCreator());
    }
  }
}

const NewsContainer = connect (mapStateToProps, mapDispatchToProps) (News)

export default NewsContainer;