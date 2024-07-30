import { useState } from "react";

function Card({ title, description, imageUrl, badges, className }) {
    return (
      <div className={`card bg-base-100 shadow-xl w-full overflow-hidden group ${className}`}>
        <figure className="relative h-full">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-0" />
        </figure>
        <div className="card-body absolute inset-0 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
          <h2 className="card-title text-white">
            {title}
          </h2>
          <p className="text-white">{description}</p>
          <div className="card-actions justify-end">
            {badges.map((badge, index) => (
              <div key={index} className="badge badge-outline text-white">{badge}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
export default Card;
