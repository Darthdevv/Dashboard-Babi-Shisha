export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Name",
    width: 230,
    renderCell: (Params) => {
      return (
        <div className="celWithImg">
          <img className="cellImg" src={Params.row.img} alt="avatar" />
          {Params.row.username}
        </div>
      );
    },
  },

  {
    field: "email",
    headerName: "Percentage",
    width: 230,
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    status: "active",
    email: "isnow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "jamie",
    img: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    status: "active",
    email: "jame@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "lannister",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    status: "pending",
    email: "omar@gmail.com",
    age: 25,
  },
  {
    id: 4,
    username: "Feroo",
    img: "https://images.unsplash.com/photo-1584361853901-dd1904bb7987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    status: "active",
    email: "feroo@gmail.com",
    age: 29,
  },
  {
    id: 5,
    username: "Nony",
    img: "https://images.unsplash.com/photo-1584734514846-0e78a2a3f8ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxNZnJpRjdJZFRxSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
    status: "passive",
    email: "nony@gmail.com",
    age: 79,
  },
  {
    id: 6,
    username: "Rema",
    img: "https://images.unsplash.com/photo-1601696221767-a85d5374f15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xNZnJpRjdJZFRxSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
    status: "active",
    email: "Rema@gmail.com",
    age: 44,
  },
  {
    id: 7,
    username: "beer",
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    status: "pending",
    email: "beerw@gmail.com",
    age: 30,
  },
  {
    id: 8,
    username: "Khaled",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    status: "passive",
    email: "khaled@gmail.com",
    age: 59,
  },
  {
    id: 9,
    username: "Afroto",
    img: "https://images.unsplash.com/photo-1549738712-da3cb334e1d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    status: "active",
    email: "afroto@gmail.com",
    age: 79,
  },
  {
    id: 10,
    username: "Maro",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    status: "active",
    email: "maro@gmail.com",
    age: 49,
  },
];
