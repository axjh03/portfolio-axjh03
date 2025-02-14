import React, { useRef, useState } from "react";
import DialogBox from "./DialogBox";
import "./ExperienceCard.scss";

function ExperienceCard({ image, title, oneLiner, name, url, date, location, details }) {
  const dialogRef = useRef(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    if (dialogRef.current) {
      setIsDialogOpen(true);
      dialogRef.current.showModal();
    }
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {isDialogOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          aria-hidden="true"
        />
      )}

      <div
        className="experience-card flex flex-col md:flex-row items-center md:items-start p-6 m-4 rounded-xl transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg cursor-pointer relative"
        onClick={openDialog}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-24 h-24 object-cover rounded-full md:mr-6 mb-4 md:mb-0 border-4 border-opacity-50" 
        />
        <div className="text-center md:text-left flex-1">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="exp-title text-lg mb-1">{title}</p>
          <p className="exp-location mb-2">{location}</p>
          <p className="exp-oneLiner mb-3">{oneLiner}</p>
          <p className="text-sm opacity-75">{date}</p>
        </div>
      </div>

      <DialogBox 
        ref={dialogRef} 
        title={title} 
        name={name} 
        details={details} 
        onClose={handleClose}
      />
    </>
  );
}

export default ExperienceCard;
