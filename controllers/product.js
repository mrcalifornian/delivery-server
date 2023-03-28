let prods = [
    {
        "title": "Margherita Pizza",
        "description": "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
        "price": 9.99,
        "imageUrl": "https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg",
        "category": "Pizza"
    },
    {
        "title": "Pepperoni Pizza",
        "description": "Pizza with tomato sauce, mozzarella cheese, and pepperoni slices.",
        "price": 11.99,
        "imageUrl": "https://www.dogtownpizza.com/wp-content/uploads/2020/01/picking-slice-of-pepperoni-pizza-picture-id1133727757.jpg",
        "category": "Pizza"
    },
    {
        "title": "BBQ Chicken Pizza",
        "description": "Pizza with BBQ sauce, grilled chicken, red onion, and mozzarella cheese.",
        "price": 13.99,
        "imageUrl": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/28/1/FNM_040112-Copy-That-002_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541346030.jpeg",
        "category": "Pizza"
    },
    {
        "title": "Steak",
        "description": "Classic buff steak with mashed potatoes and green beans.",
        "price": 12.99,
        "imageUrl": "https://cdn.shopify.com/s/files/1/0880/9148/products/buffalo_ribeye.jpg?v=1568687343",
        "category": "Comfort Food"
    },
    {
        "title": "Chicken Alfredo",
        "description": "Creamy pasta dish with grilled chicken, parmesan cheese, and garlic.",
        "price": 12.99,
        "imageUrl": "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg",
        "category": "Pasta"
    },
    {
        "title": "Greek Salad",
        "description": "Mixed greens with cucumber, tomato, feta cheese, and Kalamata olives.",
        "price": 9.99,
        "imageUrl": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/23/0/BX0204_greek-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1529943050536.jpeg",
        "category": "Salads"
    },
    {
        "title": "Grilled Salmon",
        "description": "Fresh grilled salmon served with roasted vegetables and lemon butter sauce.",
        "price": 16.99,
        "imageUrl": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/grilled-miso-salmon-with-rice-noodles-58a2bbb.jpg?quality=90&resize=500,454",
        "category": "Seafood"
    },
    {
        "title": "Fish and Chips",
        "description": "Crispy beer-battered fish served with french fries and tartar sauce.",
        "price": 12.99,
        "imageUrl": "https://forkandtwist.com/wp-content/uploads/2021/04/IMG_0102-500x500.jpg",
        "category": "Seafood"
    }, {
        "title": "Vegetarian Lasagna",
        "description": "Layered pasta with spinach, mushrooms, ricotta cheese, and tomato sauce.",
        "price": 11.99,
        "imageUrl": "https://realfood.tesco.com/media/images/303-vegetarian-vegetarian-lasagna-LH-11d5f8ab-b7ac-4036-ba5a-9add6b882d51-0-1400x919.jpg",
        "category": "Pasta"
    },
    {
        "title": "Beef Stir Fry",
        "description": "Beef and vegetable stir fry served with steamed rice.",
        "price": 14.99,
        "imageUrl": "https://realfood.tesco.com/media/images/Beef-stir-fry-mini-mini-db138180-c70b-45ff-9f70-644e4fb3ac48-0-1400x919.jpg",
        "category": "Asian"
    },
    {
        "title": "Chicken Curry",
        "description": "Spicy chicken curry with potatoes and rice.",
        "price": 12.99,
        "imageUrl": "https://recipesofhome.com/wp-content/uploads/2020/03/chicken-curry-recipe.jpg",
        "category": "Asian"
    },
    {
        "title": "Steak Fajitas",
        "description": "Sizzling steak with onions and bell peppers served with tortillas.",
        "price": 15.99,
        "imageUrl": "https://images-gmi-pmc.edge-generalmills.com/66785bb0-5226-4d45-9e3e-7b55af83cf3c.jpg",
        "category": "Mexican"
    },
    {
        "title": "Beef Tacos",
        "description": "Tacos with seasoned ground beef, lettuce, tomato, and cheese.",
        "price": 10.99,
        "imageUrl": "https://images-gmi-pmc.edge-generalmills.com/e4c2b240-a47f-4ad2-9382-8ef1484d7ceb.jpg",
        "category": "Mexican"
    },
    {
        "title": "Caesar Salad",
        "description": "Romaine lettuce with croutons, parmesan cheese, and Caesar dressing.",
        "price": 8.99,
        "imageUrl": "https://foodhub.scene7.com/is/image/woolworthsltdprod/tuna-caesar-salad:Mobile-1300x1150",
        "category": "Salads"
    },
    {
        "title": "Chicken Enchiladas",
        "description": "Enchiladas with shredded chicken, cheese, and red sauce.",
        "price": 12.99,
        "imageUrl": "https://assets.kraftfoods.com/recipe_images/opendeploy/121713_640x428.jpg",
        "category": "Mexican"
    },
    {
        "title": "Roasted Chicken",
        "description": "Herb-roasted chicken served with mashed potatoes and gravy.",
        "price": 14.99,
        "imageUrl": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/12/3/0/FN_Lemon-Herb-Roasted-Chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384541143648.jpeg",
        "category": "Comfort Food"
    },
]

exports.products = () => {
    return prods;
}

exports.getProducts = (req, res, next) => {
    res.status(200).json(prods);
}

exports.cats = () => {
    let list = []
    for (let p of prods) {
        if (!list.includes(p.category)) {
            list.push(p.category);
        }
    }
    return list;
}

exports.someProducts = (category) => {
    let list = []
    for (let p of prods) {
        if (p.category == category) {
            list.push(p);
        }
    }
    return list;
}

exports.postProducts = (req, res, next) => {

}