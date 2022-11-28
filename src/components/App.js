
import '../styles/App.scss';

function App() {
  return (
    <div>
      <table cellspacing='0'>

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

          <tr>
            <td>Create pretty table design</td>
            <td>100%</td>
            <td>Yes</td>
          </tr>

          <tr class="even">
            <td>Take the dog for a walk</td>
            <td>100%</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Waste half the day on Twitter</td>
            <td>20%</td>
            <td>No</td>
          </tr>

        </tbody>
      </table>
      {/* new contact */}
      <form className="new-contact__form">
        <h2 className="new-contact__title">Añade un nuevo contacto</h2>
        <input
          className="new-contact__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"

        />
        <input
          className="new-contact__input"
          type="text"
          name="tutora"
          id="tutora"
          placeholder="Tutora"

        />
        <input
          className="new-contact__input"
          type="text"
          name="especialidad"
          id="especialidad"
          placeholder="Especialidad"

        />
        <input
          className="new-contact__btn"
          type="submit"
          value="Añadir nueva Adalaber"

        />
      </form>
    </div>
  );
}

export default App;
