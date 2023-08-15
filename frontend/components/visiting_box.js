const VisitingBox = ({boxObject}) => {
    return (
        <div class="box_content">
         <>
           <div class = "box_message">{boxObject.message}</div>
           <div class = "box_sender">{boxObject.sender.split(".")[0]}</div>
           {/* {isOwner && (
             <div className = "nweet__actions">
			   <span onClick={onDeleteClick}>
                 <FontAwesomeIcon icon={faTrash} />
               </span>
               <span onClick={toggleEditing}>
                 <FontAwesomeIcon icon={faPencilAlt} />
               </span>
             </div>
           )} */}
         </>
     </div>
    )
}

export default VisitingBox;