//import { computeHeadingLevel } from '@testing-library/react';
//import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
//import { Component } from 'react/cjs/react.production.min';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import Test from './Test.js'


/*class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date : new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
       1000
       );
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  
tick(){
  this.setState({
    date: new Date()
  });
}

  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}*/

/*class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  render(){
    return(
      <button onClick={(e) => this.deletRow(id, e)}>Supprimer la ligne</button>
    )
  }
}*/
/*
function UserGreeting(props){
  return <h1>Bienvenue !</h1>;
}
function GuestGreeting(props){
  return <h1>Veulliez vous inscrire.</h1>;
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn; 
  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>connexion</button>
  );
}
function LogoutButton(props){
  return (
    <button onClick={props.onClick}>Déconnexion</button>
  )
}
class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleclickLoginClick = 
this.handleclickLoginClick.bind(this);
    this.handleclickLogoutClick = 
    this.handleclickLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleclickLoginClick(){
    this.setState({isLoggedIn: true});
  }
  handleclickLogoutClick(){
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn  = this.state.isLoggedIn;
    let button;
   if(isLoggedIn){
      button = <LogoutButton onClick=
      {this.handleclickLogoutClick} />;
    }else{
      button = <LoginButton onClick={this.handleclickLoginClick} 
      />;
    }
  
return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  )
}
}
*/
/*
function Mailbox(props){
  const unreadMessages = props.unreadMessages;
  return(
    <div>
      <h1>Bonjour !</h1>
      {unreadMessages.length > 0 &&
      <h2>
        Vous avez {unreadMessages.length} message(s) non lu(s)  
      </h2>
      }
    </div>
  );
}
*/
//const messages = ['React', 'Re: React', 'Re:Re React', 'salut'];

/*
function WarningBanner(props){
  if (!props.warn){
    return null;
  }
  return(
    <div className='warning'>
      Attention !
    </div>
  );
}

class Page extends React.Component{
  constructor(props){
    super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = 
      this.handleToggleClick.bind(this);
  }
  handleToggleClick(){
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  render(){
    return(
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning? 'Masquer' : 'Afficher'}
        </button>
      </div>
    )
  }
}
*/
/*
function ListItem(props){
  return(
    <li>
      {props.value}
    </li>
  );
}

function NumberList(props){
  const number = props.numbers;
  const ListItems = number.map((number) => 
  <ListItem key={number.toString()} value={number} />
  );
  return(
    <ul>
      {ListItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
*/
/*
function Blog(props){
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
      <li key={post.id}>
        {post.title}
      </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) => 
  <div key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
  </div>
  );
  return(
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  )
}
const posts = [
  {id :1,
  title: 'Bonjour, monde',
  content : 'Bienvenue sur la doc de react '}, 
  {id:2,
  title:'Installation',
  content: 'Vous pouvez installer React depuis npm.'},
  ];
*/

/*
class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: 'Ecrivez un essai à propos de votre élément du DOM préféré'
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
      this.setState({value: event.target.value});
    }
    handleSubmit(event){
      alert('le nom a été soumis : ' + this.state.value);
      event.preventDefault()
    }
    render(){
      return (
        <form>
          <label>
            Nom : 
            <input type="text" 
            value={this.state.value}
            onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Envoyer" onClick={this.handleSubmit} />
        </form>
      )
    }
  };
*/
/*
class Reservation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = 
    this.handleInputChange.bind(this);
  }
  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render(){
    return(
      <form>
        <label>
          participe : 
          <input
          name='isGoing'
          type='checkbox'
          checked={this.state.isGoing}
          onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Nombre d'invités : 
          <input 
          name = "numberOfGuests"
          type="number"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange}
          />
        </label>
      </form>
    )
  }
}
*/
/*
function Boilingverdict(props){
  if (props.celsius >= 100){
    return <p>L'eau bout.</p>;
  }
  return <p>L'eau ne bout pas.</p>
}

const scaleNames = {
  c:'Celsius',
  f:'Fahrenheit'
};
class TemperatureInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }
  handleChange(e){
    this.setState({temperature: e.target.value});
  }
  render(){
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return(
      <fieldset>
        <legend>Saisissez la température en {scaleNames[scale]}</legend>
        <input value={temperature} 
        onChange={this.handleChange}
        />
      </fieldset>
    )
  }
}
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e){
    this.setState({temperature : e.target.value});
  }
  render(){
    const temperature = this.state.temperature;
    return(
      <fieldset>
        <TemperatureInput
        value={temperature}
        onChange={this.handleChange}
         />
        <legend>
          Saisissez la température en Celsius :
        </legend>
        <input
        value={temperature}
        onChange={this.handleChange}
        />
        <Boilingverdict 
        celsius={parseFloat(temperature)}
        />
      </fieldset>
    );
  }
}
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
