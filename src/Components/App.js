import React from "react";
import { useState, useEffect } from "react"; //Manage state
import ListContacts from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateContact from "./CreateContact";

const App = () => {
  let navigate = useNavigate();
  //[state var name, fn to set that var] = useState(initial value)
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };

    getContacts();
  }, []);

  const removeContact = (contact) => {
    setContacts(
      contacts.filter((c) => {
        return c.id !== contact.id;
      })
    );
    ContactsAPI.remove(contact);
  };

  const createContact = (contact) => {
    const create = async () => {
      const res = await ContactsAPI.create(contact);
      setContacts(contacts.concat(res));
    };

    create();
    navigate("/");
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        }
      />
   <Route
        path="/create"
        element={
          <CreateContact onCreateContact={(contact) => {
              createContact(contact);
            }}
          />
        }
      />
    </Routes>
  );
};

export default App;



// import Example1 from "./Examples/PassingData/Example1";
// import Example2 from "./Examples/PassingData/Example2/Example2";
// import Example1 from "./Examples/ManageingState/Example1";
// import Example1 from "./Examples/ControlledComponents/Example1";
// import Example1 from "./Examples/AllTogether/Example1/Example1";
// import Example2 from "./Examples/AllTogether/Example2/Example2";
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory({forceRefresh:true})

// class App extends Component {
//     Constructor(props){
//     super.Constructor(props);
//   }

//   state = {
//     contacts: [],
//     screen: 'list'
//   };

//   componentDidMount() {
//     ContactsAPI.getAll().then((contacts) => {
//       this.setState(() => ({
//         contacts
//       }))
//     })
//   }

//   removeContact = (contact) => {
//     this.setState((currentState) => ({
//       contacts: currentState.contacts.filter((c) => {
//         return c.id !== contact.id
//       })
//     }))
//     ContactsAPI.remove(contact);
//   }

//   // createContact = (contact) => {
//   //   ContactsAPI.create(contact)
//   //     .then((contact) => {
//   //       this.setState((currentState) => ({
//   //         contacts: currentState.contacts.concat([contact])
//   //       }))
//   //     })
//   // }

//   render() {
//     return (
//       <div>
//           <ListContacts
//             contacts={this.state.contacts}
//             onDeleteContact={this.removeContact}
//           />

//         {/* Passing data */}
//         {/* <Example1 /> */}
//         {/* <Example2 /> */}

//         {/* Manageing State */}
//         {/* <Example1 /> */}

//         {/* controlled components */}
//         {/* <Example1 /> */}

//         {/* All together */}
//         {/* <Example1 /> */}
//         {/* <Example2 /> */}

//       </div>
//     );
//   }
// }
