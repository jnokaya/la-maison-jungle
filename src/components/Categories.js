import "../styles/Categories.css"

function Categories({ categories, selectedCategories, updateSelectedCategories }) {
    return (
        <div className="lmj-categories">
            <ul  className="lmj-categories-ul-selected">
                {selectedCategories.map((category, index)=> (
                    <li key={`${category}-${index}`} className="lmj-categories-selected">{category}</li>
                ))}
            </ul>
            <select
                name="categories"
                className="lmj-categories-select"
                value={selectedCategories.join(',')}
                onChange={(e) => {
                    e.stopPropagation()
                    const selectedCategory = e.target.value
                    if(selectedCategory === ''){
                        return
                    }
                    if (selectedCategories.length <= 0 || selectedCategories.indexOf(selectedCategory) < 0) {
                        updateSelectedCategories([...selectedCategories, selectedCategory])
                    } else {
                        updateSelectedCategories(selectedCategories.filter((category) => category !== selectedCategory))
                    }
                }}
            >
                <option value=''>---</option>
                {categories.map((sCategory) => {
                    return (
                        <option key={sCategory} value={sCategory}>{sCategory}</option>
                    )
                })}
            </select>
            <button onClick={() => { updateSelectedCategories([]) }}>Réinitialiser</button>
        </div>
    )
}

export default Categories