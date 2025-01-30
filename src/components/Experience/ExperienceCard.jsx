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
      {/* Backdrop blur overlay */}
      {isDialogOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40"
          aria-hidden="true"
        />
      )}

      {/* Experience Card */}
      <div
        className="flex flex-col md:flex-row items-center md:items-start shadow-xl p-4 m-2 rounded-lg transition-transform duration-500 hover:scale-105 hover:shadow-3xl cursor-pointer relative experience-card"
        onClick={openDialog}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-20 h-20 object-cover rounded-md md:mr-4 mb-2 md:mb-0" 
        />
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="exp-title">{title}</p>
          <p className="exp-location">{location}</p>
          <p className="exp-oneLiner">{oneLiner}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Modal */}
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