const questionHeaders = document.querySelectorAll('.question-box-header');




questionHeaders.forEach((header, index) => {
	const answer = header.nextElementSibling;

	// Function to toggle answer visibility
	const toggleAnswer = () => {
		if (answer.style.display === 'block') {
			answer.style.display = 'none';
			header.querySelector('.plus').classList.remove('hidden');
			header.querySelector('.minus').classList.add('hidden');
		} else {
			answer.style.display = 'block';
			header.querySelector('.plus').classList.add('hidden');

			
		}
	};

	// Click event listener for mouse interaction
	header.addEventListener('click', toggleAnswer);

	// Keyboard event listener for navigating and toggling answers
	header.addEventListener('keydown', event => {
		if (event.key === 'Enter' || event.key === ' ') {
			// Toggle answer visibility
			toggleAnswer();
		} else if (event.key === 'ArrowUp') {
			// Move to previous question
			const prevIndex = index === 0 ? questionHeaders.length - 1 : index - 1;
			questionHeaders[prevIndex].focus();
		} else if (event.key === 'ArrowDown') {
			// Move to next question
			const nextIndex = index === questionHeaders.length - 1 ? 0 : index + 1;
			questionHeaders[nextIndex].focus();
		}
	});

	// Add tabindex attribute to make question headers focusable
	header.setAttribute('tabindex', '0');

});
