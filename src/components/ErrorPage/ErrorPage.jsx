import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='text-center my-28'>
                <h2 className="text-6xl py-3">Oppos!!!</h2>
                <p>Sorry, I can't find this page.Error type: 404 error</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;