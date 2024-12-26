"use client";

import { X } from "lucide-react";
import Link from "next/link";

//use client directive is used here to turn this part of ui into client side rendered component as in button while we were using onclick in parent component(server side rendered component) we were not allowed to do so as it was ssr

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if (form) form.reset();
    }
    return (
        <button
            type='reset'
            onClick={reset}
        >
            <Link href='/' className="search-btn text-white">
                <X className="size-5"/>
            </Link>
        </button>
    )
}

export default SearchFormReset