import React, { useContext } from "react";
import "./ticket.css";
import Priority from "../../basicComponents/Priority";
import { AppContext } from "../../Context";
interface TicketProps {
  ticket: any;
  index: number;
  type: string;
  projectIndex: number;
}
function Ticket({ ticket, index, type, projectIndex }: TicketProps) {
  const { deleteTicket } = useContext(AppContext);

  function handleDeleteTicket() {
    deleteTicket(projectIndex,type, index );
  }
  return (
    <div className="ticket-container">
      <h2>{ticket.name}</h2>
      <button onClick={handleDeleteTicket} className="ticket-delete-button">X</button>
      <Priority priority={ticket.priority} />
    </div>
  );
}

export default Ticket;
