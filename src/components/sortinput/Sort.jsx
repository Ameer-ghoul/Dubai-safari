import "./sort.css";

const Sort = ({ toursLength, setSortTour, sortTour }) => {
    return (
        <div className="sort-input-container">
            <div className="avalibale-tours">
                {toursLength} Tours found <i className="bi bi-info-circle"></i>
            </div>
            <select onChange={(e) => setSortTour(e.target.value)} value={sortTour}>
                <option value="recomended">Recomended</option>
                <option value="low">Price - Low To Heigh</option>
                <option value="heigh">Price - Heigh To Low</option>
            </select>
        </div>
    );
};

export default Sort;
