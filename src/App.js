import logo from './logo.svg';
import './App.css';
import {Amplify} from "aws-amplify"
import{withAuthenticator} from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import awsexports from "./aws-exports"

Amplify.configure(awsexports)

function App({signOut, user}) {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hallo React Amplify</h2>
        {user ?(<><h3>権限あり:{user.username}</h3><button onClick={signOut}>Sign Out</button></>): (<h3>権限なし</h3>)}
      </header>
    </div>
    </>

  );
}

export default withAuthenticator(App);
