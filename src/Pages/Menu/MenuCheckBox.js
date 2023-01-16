export const MenuCheckBox = ({ menu, food }) => {
    return (
        <div key={food.id} className="form-check">
            <input className="form-check-input" type="radio" name={`menu-${menu.id}-${food.category}`} id={`menu-${menu.id}-${food.id}`} />
            <label className="form-check-label" htmlFor={`menu-${menu.id}-${food.id}`}>
                {food.title}
            </label>
        </div>

    );
};
