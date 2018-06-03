import React, { Component } from 'react';

/// Mostrar una lista en base a un arreglo

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ['Javascript', 'CSS', 'HTLM', 'React']
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Las tecnologias del Front</h1>
        <ul style={styles.list}>
          {this.state.list.map((elemento_de_la_lista) =>
            <li>{elemento_de_la_lista}</li>
            )}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: '100px'
  },
  list: {
    fontSize: '20px',
    flexGrow: 6
  }
}

export default App;
