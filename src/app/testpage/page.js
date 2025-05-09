import React from "react";


export default function Title( {HomeData }) {

    return (
        <>
        <div>
            {HomeData.length === 0 ? (
                <p>No data found.</p>
            ) : (
                HomeData.map((item, index) => (
                    <div key={item.id} className="relative">
                        <img src={item.img} className="object-cover h-full w-full" alt={`Slide ${index + 1}`} />
                    </div>
                ))
            )}
            </div>
        </>
    )
}