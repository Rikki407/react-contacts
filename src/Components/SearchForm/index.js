import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
    return (
        <form class="search-form" action="" method="">
            <span class="magnifier">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M228 68.7c-68.5 0-124 55.5-124 124 0 68.5 55.5 124 124 124 68.5 0 124-55.5 124-124C352 124.2 296.5 68.7 228 68.7zM228 283.3c-50 0-90.6-40.6-90.6-90.6 0-50 40.6-90.6 90.6-90.6s90.6 40.6 90.6 90.6C318.6 242.7 278 283.3 228 283.3z"
                        class="a"
                    />
                    <path
                        d="M392.8 414.3c6.1 9.2 4.1 21.3-4.4 26.9 -8.5 5.7-20.5 2.8-26.6-6.4l-88.6-133.2c-6.1-9.2-4.1-21.3 4.4-26.9 8.5-5.7 20.5-2.8 26.6 6.4L392.8 414.3z"
                        class="a"
                    />
                </svg>
            </span>

            <label for="search">Search</label>
            <input id="search" name="search" type="text" placeholder="Search" />
        </form>
    );
};

export default SearchForm;
