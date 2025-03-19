'use client';
import './style.css';

function Community() {
	return (
		<div className='container'>
			<div className='infos'>
				<p>Bienvenue sur l'onglet "Communauté"</p>
				<p>
					Ici, tu retrouveras les principales informations liées à la communauté
					comme les nouveautés Twitch ou Discord, mais aussi une bibliothèque
					pour les photocards. Tu pourras aussi consulter ta propre collection
					de photocards !
				</p>
			</div>

			<div className='box'>
				<div className='box_box'>
					<h1>Les photocards</h1>
					<p>
						Pour voir toutes les photocards sorties à ce jour & comment les
						obtenir
					</p>
				</div>

				<div className='box_box'>
					<h1>Membres du discord</h1>
					<p>
						Tu es membre du discord et tu souhaites voir les photocards que tu
						possèdes ? Munis-toi du code secret pour consulter cette page !
					</p>
					<input />
				</div>
			</div>
		</div>
	);
}

export default Community;
