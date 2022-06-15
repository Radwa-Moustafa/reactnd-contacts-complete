import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CreateContact from "./CreateContact"

const ListContacts = ({ contacts, onDeleteContact }) => {

  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  const clearQuery = () => {
    updateQuery("");
  };

  const contactsSearchResult =  query === ""
    ? contacts
    : contacts.filter((c) => (
      c.name.toLowerCase().includes(query.toLowerCase())
    ));

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search Contacts"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
        />
        <Link to="/create" element={<CreateContact />} className="add-contact">
          Add Contact
        </Link>
      </div>
      {contactsSearchResult.length !== contacts.length && (
        <div className="showing-contacts">
          <span>
            Now showing {contactsSearchResult.length} of {contacts.length}
          </span>
          <button onClick={clearQuery}>Show all</button>
        </div>
      )}
      <ol className="contact-list">
        {contactsSearchResult.map((contact) => (
          <li className="contact-list-item" key={contact.id}>
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            ></div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
              <button
                className="contact-remove"
                onClick={() => onDeleteContact(contact)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

//Shared between the two sytaxes
export default ListContacts;

//============== Stateless Functional Components syntax ==============
//const ListContacts = () => { //Another syntax
// function ListContacts(props){
//   return (
//     <ol className="contact-list">
//     {props.contacts.map((contact) => (
//       <li className="contact-list-item" key={contact.id}>
//         <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatarURL})`}}>
//           </div>
//           <div className="contact-details">
//             <p>{contact.name}</p>
//             <p>{contact.handle}</p>
//             <button className="contact-remove" onClick={() => props.onDeleteContact(contact)}>Remove</button>
//           </div>
//         </li>
//     ))}
//   </ol>
//   )
// }

// ListContacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// }

//============= Old Class Components syntax =============
// class ListContacts extends React.Component {

//   static propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
//   };

//   state = {
//     query: '',
//   };

//   updateQuery = (query) => {
//     this.setState(() => ({
//       query: query.trim()
//     }))
//   }

//   render() {

//     const { query } = this.state
//     const { contacts, onDeleteContact } = this.props
//     const filteredContacts = query === ''
//     ? contacts
//     : contacts.filter((c) => (
//       c.name.toLowerCase().includes(query.toLowerCase())
//     ));

//     return (
//       <div className="list-contacts">
//         <div className="list-contacts-top">
//             <input
//             className="search-contacts"
//             type="text"
//             placeholder="Search Contacts"
//             value={query}
//             onChange={(event) => this.updateQuery(event.target.value)}
//              />
//                 <Link
//             to='/create'
//             className='add-contact'
//           >Add Contact</Link>
//         </div>
//         {filteredContacts.length !== contacts.length && (
//           <div className='showing-contacts'>
//             <span>Now showing {filteredContacts.length} of {contacts.length}</span>
//             <button onClick={this.clearQuery}>Show all</button>
//           </div>
//         )}
//         <ol className="contact-list">
//           {filteredContacts.map((contact) => (
//             <li className="contact-list-item" key={contact.id}>
//               <div
//                 className="contact-avatar"
//                 style={{ backgroundImage: `url(${contact.avatarURL})` }}
//               ></div>
//               <div className="contact-details">
//                 <p>{contact.name}</p>
//                 <p>{contact.handle}</p>
//                 <button
//                   className="contact-remove"
//                   onClick={() => onDeleteContact(contact)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     );
//   }
// }
