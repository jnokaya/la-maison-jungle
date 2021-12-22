import "../styles/Categories.css"

function Categories({ categories, selectedCategory, updateSelectedCategory }) {
    return (
        <div className="lmj-categories">
            <select
                name="categories" 
                className="lmj-categories-select" 
                value={selectedCategory}
                onChange={(e)=>{
                    e.stopPropagation()
                    updateSelectedCategory(e.target.value)
                }}
            >
                <option value=''>---</option>
                {categories.map((sCategory) => {
                    return (
                        <option key={sCategory} value={sCategory}>{sCategory}</option>
                    )
                })}
            </select>
            <button onClick={() => { updateSelectedCategory('') }}>Réinitialiser</button>
        </div>
    )
}

export default Categories