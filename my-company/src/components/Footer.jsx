// src/Footer.jsx
function Footer() {
    return (
      <footer style={{ padding: '10px', backgroundColor: '#333', color: '#fff', textAlign: 'center', justifyContent: 'center' }}>
        <p>&copy; {new Date().getFullYear()} My Company</p>
      </footer>
    );
  }
  
  export default Footer;