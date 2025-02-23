import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const emails = [
  { id: 1, sender: "John Doe", subject: "Meeting Reminder", time: "10:30 AM" },
  { id: 2, sender: "Google", subject: "Security Alert", time: "12:00 PM" },
  { id: 3, sender: "React Team", subject: "React v18 Released!", time: "2:15 PM" },
];

const EmailList = () => {
  return (
    <div className="card p-3">
      <h5 className="mb-3">📥 Inbox</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sender</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id}>
              <td>{email.sender}</td>
              <td><Link to={`/email/${email.id}`} className="text-decoration-none">{email.subject}</Link></td>
              <td>{email.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmailList;
