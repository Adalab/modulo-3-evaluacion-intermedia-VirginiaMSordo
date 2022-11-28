import contacts from '../data/contacts.json';
import '../styles/App.scss';
import { useState } from 'react';

function App() {

  // ESTADO

  const [data, setData] = useState(contacts);
  const [newAdalaber, setNewAdalaber] = useState({
    "name": "",
    "counselor": "",
    "speciality": "",

  });
  const [search, setSearch] = useState('');



  //constantes

  const htmlData = data
    .filter(
      (contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.counselor.toLowerCase().includes(search.toLowerCase()) ||
        contact.speciality.toLowerCase().includes(search.toLowerCase()))

    .map((contact, index) => {
      return (
        <tr key={index}>
          <td>{contact.name}</td>
          <td>{contact.counselor}</td>
          <td>{contact.speciality}</td>
        </tr>
      );

    });

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  // listeners

  const handleInputs = (ev) => {
    setNewAdalaber({ ...newAdalaber, [ev.target.name]: ev.target.value })

  }

  const handleAddNewAdalaber = (ev) => {
    ev.preventDefault();
    setData([...data, newAdalaber]);
    setNewAdalaber({
      "name": "",
      "counselor": "",
      "speciality": "",
    });
  }







  return (
    <div>
      <header className="header">
        <h1 className="header__title">Listado de Adalabers</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onInput={handleSearch}
            value={search}
          />
        </form>
      </header>


      <table cellSpacing='0'>
        {/* header */}
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>


        {/* body */}
        <tbody>
          {htmlData}
        </tbody>
      </table>


      {/* new contact */}
      <form className="new-contact__form">
        <h2 className="new-contact__title">Añade un nuevo contacto</h2>
        <input
          className="new-contact__input"
          type="text"
          name="name"
          placeholder="Nombre"
          onInput={handleInputs}
          value={newAdalaber.name}


        />
        <input
          className="new-contact__input"
          type="text"
          name="counselor"
          placeholder="Tutora"
          onInput={handleInputs}
          value={newAdalaber.counselor}

        />
        <input
          className="new-contact__input"
          type="text"
          name="speciality"
          placeholder="Especialidad"
          onInput={handleInputs}
          value={newAdalaber.speciality}

        />
        <input
          className="new-contact__btn"
          type="submit"
          value="Añadir nueva Adalaber"
          onClick={handleAddNewAdalaber}

        />
      </form>
    </div>
  );
}

export default App;
