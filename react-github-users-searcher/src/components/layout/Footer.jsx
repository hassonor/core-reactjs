import {ReactComponent as Logo} from '../../assets/logo.svg';

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='footer p-3 bg-gray-700 text-primary-content footer-center'>
            <div>
                <Logo/>
                <p> &copy; {currentYear} Or Hasson, Inc.</p>
            </div>
        </footer>
    )
}


export default Footer;