import React, {useState, useRef} from 'react';

function handleSubmit(e, rating, title, setTitle, setRating) {
    e.preventDefault()
    
    if (validateForm(rating, title)) {
        //Add movie
        console.log(`Added Movie: title: ${title}, rating: ${rating}`);

        //Clear form
        setTitle('');
        setRating(0);
    }
};

function validateForm(rating, title) {
        let isFormValid = true;

        //Validate form input
        if (title == "") {
            window.alert("Please provide the title of the movie")
            isFormValid = false;
        } else if (rating < 1 || rating > 5) {
            window.alert("Please provide your rating for the movie")

            isFormValid = false;
        }

        return isFormValid;
}

function MovieInputForm() {
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');

    return (
        <form id="add-movie-form" onSubmit={e => {handleSubmit(e, rating, title, setTitle, setRating)}}>
        <fieldset>
            <legend>Lägg till en film</legend>

            <label htmlFor="title-field">Titel:</label>
            <input value={title} type="text" id="title-field" className="form-control" onChange={e => {setTitle(e.target.value)}}/>

            <label htmlFor="rating-field">Betyg:</label>

            <select value={rating} type="text" id="rating-field" className="form-control" onChange={e => {setRating(e.target.value)}}>
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <input type="submit" className="btn btn-success mt-3" value="Spara film"/>

        </fieldset>
    </form>
    );
  }
  
  export default MovieInputForm;