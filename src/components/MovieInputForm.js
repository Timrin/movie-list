import React, { useRef } from 'react';

function MovieInputForm(props) {
    const titleRef = useRef();
    const ratingRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
    
        if (validateForm()) {
            //Add movie
            props.onAddMovie(titleRef.current.value, ratingRef.current.value);
    
            //Clear form
            titleRef.current.value = "";
            ratingRef.current.value = 0;
        }
    };

    const validateForm = () => {
        let isFormValid = true;
    
        //Validate form input
        if (titleRef.current.value == "") {
            window.alert("Please provide the title of the movie")
            isFormValid = false;
        } else if (ratingRef.current.value < 1 || ratingRef.current.value > 5) {
            window.alert("Please provide your rating for the movie")
            isFormValid = false;
        }
    
        return isFormValid;
    }

    return (
        <form id="add-movie-form" onSubmit={e => { handleSubmit(e) }}>
            <fieldset>
                <legend>Lägg till en film</legend>

                <label htmlFor="title-field">Titel:</label>
                <input ref={titleRef} type="text" id="title-field" className="form-control" />

                <label htmlFor="rating-field">Betyg:</label>

                <select ref={ratingRef} type="text" id="rating-field" className="form-control">
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" className="btn btn-success mt-3" value="Spara film" />

            </fieldset>
        </form>
    );
}

export default MovieInputForm;