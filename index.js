// import React from 'react';
// import ReactDOM from 'react-dom';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src="./react-logo.png" alt="React Logo" className="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>&copy; 2022 Pele Development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Reasons I Need to Learn React</h1>
      <ol>
        <li>So I can build shit</li>
        <li>So I can get that bag</li>
        <li>So I can buy a house and a catio</li>
      </ol>
    </main>
  );
}

function Page() {
  return (
    <div className="page">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}


ReactDOM.render(<Page />, document.getElementById('root'));
