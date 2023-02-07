import './about-store.scss';
import '../../../App.scss'
import Grains from '../../grains-devider/grains-devider';

const AboutStore = () => {
	return (
		<div className="about-store">
			<div className="picture">
				<img src="img/store/girl-about.jpg" alt="Girl with a cap of coffee" />
			</div>
			<div className="text">
				<h3 className="title">About our beans</h3>
				<Grains></Grains>
				<article>
					<p>
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					</p>
					<br />
					<p>Afraid at highly months do things on at. Situation recommend objection do intention
						so questions.
					</p>
					<p>
						As greatly removed calling pleased improve an. 
					</p>
					<p>
						Last ask him cold feel <br />
						met spot shy want. Children me laughing we prospect answered followed. At it went
						is song that held help face.
					</p>
				</article>
			</div>
		</div>
	)
};

export default AboutStore;