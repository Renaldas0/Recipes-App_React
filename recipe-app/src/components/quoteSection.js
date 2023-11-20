import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function QuoteSection() {
    return (
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft} /> Good food is very often, even most often, simple food. <FontAwesomeIcon icon={faQuoteRight} /></p>
            <p className="quote-author">- Anthony Bourdain</p>
        </div>
    )
}

export default QuoteSection;