import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

function ErrorPage() {
  return (
    <>
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
        <NavLink to="/" className='active' end>Back
        </NavLink>
      </main>
      <Footer/>
    </>
  );
}

export default ErrorPage;
