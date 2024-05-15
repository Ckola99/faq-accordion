const questionHeaders = document.querySelectorAll('.question-box-header');




questionHeaders.forEach(header => {
	// Check if the answer is initially displayed and show the minus button accordingly

	header.addEventListener('click', () => {
		const answer = header.nextElementSibling;

		// Toggle the display property of the answer
		if (answer.style.display === 'block') {
			answer.style.display = 'none';

			// Change plus and minus button visibility
			header.querySelector('.plus').classList.remove('hidden');
			header.querySelector('.minus').style.display = 'none'

		} else {
			answer.style.display = 'block';

			// Change plus and minus button visibility
			header.querySelector('.plus').classList.add('hidden');
			header.querySelector('.minus').style.display = 'block'
		}
	});

});
