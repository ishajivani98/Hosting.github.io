import { useEffect, useState } from "react";

interface DataType {
  id: number;
  name: string;
  age: number;
}

function App() {
  const edata: DataType[] = [
    {
      id: 1,
      name: "diya",
      age: 30,
    },
  ];

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [data, setData] = useState<DataType[]>([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  useEffect(() => {
    setData(edata);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();


    if (data.find((item) => item.id === id)) {
      alert("ID already exists!");
      return;
    }

    const newData: DataType = {
      id,
      name,
      age,
    };

    setData([...data, newData]);

    setId(0);
    setName("");
    setAge(0);
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
      alert("Item not found!");
      return;
    }

    const updatedData = [...data];
    updatedData[index] = { id, name, age };
    setData(updatedData);
    setIsUpdate(false);
    setId(0);
    setName("");
    setAge(0);
  };

  const handleEdit = (id: number) => {
    const item = data.find((d) => d.id === id);
    if (!item) return
    setId(item.id);
    setName(item.name);
    setAge(item.age);
    setIsUpdate(true);
  };

  const handleDelete = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <>
      <form>
        <label>ID</label>
        <input
          type="number"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
        />

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Age</label>
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />

        {!isUpdate ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleUpdate}>Update</button>
        )}
      </form>

      <table border={1}>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
}

export default App;
