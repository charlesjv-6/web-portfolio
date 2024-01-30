import React from "react";

export default function Filter({ filters }){
    return (
        <section className="filter">
            <form action="">
                <input type="text" placeholder="Enter Keyword"/>
                <input type="submit" value="" />
            </form>
        </section>
    );
}