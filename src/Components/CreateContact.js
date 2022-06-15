
import React from 'react'
import ImageInput from './ImageInput'
import { Link  } from 'react-router-dom'
import serializeForm from 'form-serialize'

const CreateContact = ({ onCreateContact }) => {

  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });

    if (onCreateContact) {
      onCreateContact(values);
    }
  };

  return (
          <div>
            <Link
              className='close-create-contact'
              to='/'>
                Close
            </Link>
            <form onSubmit={handleSubmit} className='create-contact-form'>
              <ImageInput
                className='create-contact-avatar-input'
                name='avatarURL'
                maxHeight={64}
              />
              <div className='create-contact-details'>
                <input type='text' name='name' placeholder='Name' />
                <input type='text' name='handle' placeholder='Handle' />
                <button>Add Contact</button>
              </div>
            </form>
          </div>
        )

};

export default CreateContact


// import React, { Component } from 'react'
// import { Link  } from 'react-router-dom'
// import ImageInput from './ImageInput'
// import serializeForm from 'form-serialize'
// import * as ContactsAPI from "../utils/ContactsAPI";

// class CreateContact extends Component {

//   handleSubmit = (e) => {
//     e.preventDefault()
//     const values = serializeForm(e.target, { hash: true })
//     this.createContact(values);
//     // if (this.props.onCreateContact) {
//     //   this.props.onCreateContact(values)
//     // }
//   }

//   createContact = (contact) => {
//     ContactsAPI.create(contact)
//       .then((contact) => {
//       })
//   }

//   render() {
//     return (
//       <div>
//         <Link
//           className='close-create-contact'
//           to='/'>
//             Close
//         </Link>
//         <form onSubmit={this.handleSubmit}  className='create-contact-form'>
//           <ImageInput
//             className='create-contact-avatar-input'
//             name='avatarURL'
//             maxHeight={64}
//           />
//           <div className='create-contact-details'>
//             <input type='text' name='name' placeholder='Name' />
//             <input type='text' name='handle' placeholder='Handle' />
//             <button>Add Contact</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// export default CreateContact
