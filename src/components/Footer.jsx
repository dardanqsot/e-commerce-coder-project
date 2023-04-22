import {Link} from 'react-router-dom';
import '../css/Footer.css';
import Logo from '../imgs/Algoritmia.png';

function Footer() {
	return (
		<footer id='footer' className=' bg-success bg-gradient'>
			<div className='container-fluid col-12'>
				<div className='row'>
					<div className='col-sm-auto col-md-6 col-lg-4 logo d-flex align-items-start justify-content-center my-auto'>
						<img src={Logo} alt='logo' />
					</div>
					<div className='col-sm-auto col-md-6 col-lg-4 d-flex menu-footer justify-content-center align-items-center mx-0 px-1 my-auto'>
						<ul>
							<li>
								<Link  to='./home'>INICIO</Link>
							</li>
							<li>
								<Link to='/home'>COMUNIDAD</Link>
							</li>
							<li>
								<Link to='/home'>UNETE</Link>
							</li>
							<li>
								<Link to='/home'>EVENTOS</Link>
							</li>
							<li>
								<Link to='/home'>CONTACTO</Link>
							</li>
							<li>
								<Link to='./home'>TIENDA</Link>
							</li>
							<li>
								<Link to='/home'>MI CUENTA</Link>
							</li>
						</ul>
					</div>
					<div className='d-flex col-sm-auto col-md-6 col-lg-4 justify-content-between my-auto mx-auto m-0 redes-logo my-auto py-auto'>
						<Link to='./home'  className='p-1'>
							<i className='fab fa-instagram redes-logo' />
						</Link>
						<Link to='./home'  className='p-1'>
							<i className='fab fa-youtube redes-logo' />
						</Link>
						<Link to='./home'  className='p-1'>
							<i className='fab fa-reddit redes-logo' />
						</Link>
						<Link to='./home'  className='p-1'>
							<i className='fab fa-twitter redes-logo' />
						</Link>
						<Link to='./home'  className='p-1'>
							<i className='fab fa-tiktok redes-logo' />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
