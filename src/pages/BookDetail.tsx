import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useBook} from "../hooks/useBook";

const BookDetail = () => {
    const {bookId} = useParams();
    const {book} = useBook(bookId);

    if(!book)
        return null;

    return (
        <BookDetailStyle>
            {book.title}
        </BookDetailStyle>
    );
};

const BookDetailStyle = styled.div`

`

export default BookDetail;