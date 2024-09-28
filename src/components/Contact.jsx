const Contact = () => {
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="font-bold">Contact</h1>
      <div>
        <input
          className="border border-black rounded-lg m-3 p-2 "
          placeholder="name"
        ></input>
        <input
          className="border border-black rounded-lg m-3 p-2"
          placeholder="contact"
        ></input>
        <button className="border border-black rounded-lg m-3 p-2 bg-gray-500">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
