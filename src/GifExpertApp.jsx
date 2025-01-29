import { React, useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Batman']);
    console.log(categories);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // setCategories(cat => ['Batman', ...cat]);
    }

    return (
        <>


            <h1>GifExpertApp</h1>


            <AddCategory

                onNewCategory={value => onAddCategory(value)}
            />



            {categories.map(category =>
            (
                <GifGrid
                    key={category}
                    category={category} />
            ))
            }



        </>
    )
}
