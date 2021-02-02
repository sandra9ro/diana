import React from 'react';
import { Route, Switch } from 'react-router-dom';
import foto from '../images/foto.JPG';
import '../styles/App.scss';
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/form" component={Form} />
      </Switch>
      {/* <Main /> */}
      <Footer />
      {/* <Form /> */}
      </>
    );
  }
}

export default App;
