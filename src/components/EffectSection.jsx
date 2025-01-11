import { useState, useEffect, useCallback } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

const EffectSection = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      "https://677f8b500476123f76a6f16c.mockapi.io/photos"
    );
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effects</h3>

      <Button
        style={{ marginBottom: "1rem" }}
        onClick={() => {
          setModal(true);
        }}
      >
        Открыть информацию
      </Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          ducimus exercitationem illo, eaque tenetur, odit illum vel dolores,
          sunt quaerat molestiae facere. Excepturi facilis et sint laudantium
          quam earum sit!
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type={text} className="control"/>
          <ul>
            {users.map((user) => (
              <li key={user.name}>{user.name}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default EffectSection;
