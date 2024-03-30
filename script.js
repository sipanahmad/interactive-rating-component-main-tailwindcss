console.log('Hello, World')


function handleSubmit (e) {
		  e.preventDefault();
		  const { target: form } = e;
		  const cardRatingElement = form.closest('article');
		  const cardThanksElement = cardRatingElement.nextElementSibling;
		  if (!form['start-selected'].value) return;
		  cardRatingElement.classList.add('hidden');
		  cardThanksElement.classList.remove('hidden');

		}

		function handleStars (e) {
		
		  const activeElement = document.querySelector('.active');
		  if (activeElement) activeElement.classList.remove('active');
		  if (e.target.nodeName === 'INPUT') {
		    const inputButton = e.target;
		    document.querySelector('[name="start-selected"]').value = inputButton.value;
		    document.querySelector('em').innerHTML = inputButton.value
		   
		    if(document.querySelector('[name="start-selected"]').value == inputButton.value) inputButton.classList.add('active');
		  }
		}


		document.querySelector('.btn-group').addEventListener('click', handleStars);

		document.querySelector('#rating-form').addEventListener('submit', handleSubmit);
	
