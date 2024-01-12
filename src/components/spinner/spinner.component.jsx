
const Spinner = ({text}) => {

    return (
        <div class="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                { text ? (
                    <span className="visually-hidden">Loading...</span>

                ) : (
                    <span>{text}</span>
                )}
            </div>
        </div>
    );
}

export default Spinner;