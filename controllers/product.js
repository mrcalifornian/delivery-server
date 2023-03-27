let prods = [
    {
        "title": "Chicken Alfredo",
        "description": "Creamy pasta dish with grilled chicken, parmesan cheese, and garlic.",
        "price": 12.99,
        "imageUrl": "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg",
        "category": "Pasta"
    },
    {
        "title": "Vegetarian Lasagna",
        "description": "Layered pasta with spinach, mushrooms, ricotta cheese, and tomato sauce.",
        "price": 11.99,
        "imageUrl": "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg",
        "category": "Pasta"
    },
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
        "imageUrl": "https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg",
        "category": "Pizza"
    },
    {
        "title": "BBQ Chicken Pizza",
        "description": "Pizza with BBQ sauce, grilled chicken, red onion, and mozzarella cheese.",
        "price": 13.99,
        "imageUrl": "https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg",
        "category": "Pizza"
    },
    {
        "title": "Grilled Salmon",
        "description": "Fresh grilled salmon served with roasted vegetables and lemon butter sauce.",
        "price": 16.99,
        "imageUrl": "https://cdn.hswstatic.com/gif/fish-chip-2.jpg",
        "category": "Seafood"
    },
    {
        "title": "Fish and Chips",
        "description": "Crispy beer-battered fish served with french fries and tartar sauce.",
        "price": 12.99,
        "imageUrl": "https://cdn.hswstatic.com/gif/fish-chip-2.jpg",
        "category": "Seafood"
    },
    {
        "title": "Beef Stir Fry",
        "description": "Beef and vegetable stir fry served with steamed rice.",
        "price": 14.99,
        "imageUrl": "https://cdn.hswstatic.com/gif/fish-chip-2.jpg",
        "category": "Asian"
    },
    {
        "title": "Shrimp Pad Thai",
        "description": "Thai rice noodles stir-fried with shrimp, bean sprouts, and peanuts.",
        "price": 13.99,
        "imageUrl": "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
        "category": "Asian"
    },
    {
        "title": "Chicken Curry",
        "description": "Spicy chicken curry with potatoes and rice.",
        "price": 12.99,
        "imageUrl": "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
        "category": "Asian"
    },
    {
        "title": "Caesar Salad",
        "description": "Romaine lettuce with croutons, parmesan cheese, and Caesar dressing.",
        "price": 8.99,
        "imageUrl": "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
        "category": "Salads"
    },

    {
        "title": "Greek Salad",
        "description": "Mixed greens with cucumber, tomato, feta cheese, and Kalamata olives.",
        "price": 9.99,
        "imageUrl": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/23/0/BX0204_greek-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1529943050536.jpeg",
        "category": "Salads"
    },
    {
        "title": "Steak Fajitas",
        "description": "Sizzling steak with onions and bell peppers served with tortillas.",
        "price": 15.99,
        "imageUrl": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/23/0/BX0204_greek-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1529943050536.jpeg",
        "category": "Mexican"
    },
    {
        "title": "Beef Tacos",
        "description": "Tacos with seasoned ground beef, lettuce, tomato, and cheese.",
        "price": 10.99,
        "imageUrl": "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Mexican-Steak-Fajitas_EXPS_THJJ21_14546_B02_10_6b.jpg",
        "category": "Mexican"
    },
    {
        "title": "Chicken Enchiladas",
        "description": "Enchiladas with shredded chicken, cheese, and red sauce.",
        "price": 12.99,
        "imageUrl": "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Mexican-Steak-Fajitas_EXPS_THJJ21_14546_B02_10_6b.jpg",
        "category": "Mexican"
    },
    {
        "title": "Roasted Chicken",
        "description": "Herb-roasted chicken served with mashed potatoes and gravy.",
        "price": 14.99,
        "imageUrl": "https://www.budgetbytes.com/wp-content/uploads/2021/09/Classic-Meatloaf-side.jpg",
        "category": "Comfort Food"
    },
    {
        "title": "Meatloaf",
        "description": "Classic meatloaf with mashed potatoes and green beans.",
        "price": 12.99,
        "imageUrl": "https://www.budgetbytes.com/wp-content/uploads/2021/09/Classic-Meatloaf-side.jpg",
        "category": "Comfort Food"
    }
]

exports.getProducts = (req, res, next) => {
    res.status(200).json(prods);
}