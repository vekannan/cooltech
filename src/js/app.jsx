import React from 'react';

export default class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header className="header">Cool Tech Enginners</header>
                <section className="body">                    
                    <h1 className="title">Welcome</h1>
                </section>
                <footer className="header">App Footer</footer>
            </React.Fragment>
        )
    }
}