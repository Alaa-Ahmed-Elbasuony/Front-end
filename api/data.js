module.exports = () => {
  const data = {
    users: [],
    transactions: [],
    check: [],
    statistics: {
      totalusers: 11,
      totaldoctors: 6,
      totalpayment: 2700,
      totalbooking: 33,
      bookingsuccess: 22,
      bookingcanceled: 10,
    },
    pages: {
      "/": { name: "Overview", index: 1 },
      "/booking": { name: "Booking Activity", index: 2 },
      "/checkups": { name: "Checkups", index: 3 },
      "/transaction": { name: "Transaction", index: 4 },
      "/settings": { name: "Settings", index: 5 },
    },
    doctors: [],
    patients: [],
  };

  for (let i = 1; i <= 20; i++) {
    data.users.push({
      id: i,
      name: "Dr.Nick Jonas",
      specialty: "Neurology",
      isAdmin: i == 1 ? true : false,
      img: "https://img.freepik.com/premium-vector/doctor-icon-avatar-white_136162-58.jpg?w=2000",
      phone: "(61) 435 755 567",
    });
    data.transactions.push({
      id: i,
      type: "Cridit",
      amount: 99,
      date: "June 25, 2023",
      description: "From Bank",
    });
    data.check.push({
      patient: "xio bolo",
      medicinename: "Gilenya",
      strength: 150,
      amount: 1,
      time: "4 Times-a-Day(1 week)",
    });
    data.doctors.push({
      name: "Dr.Nick Jonas",
      specialty: "Neurology",
      img: "https://img.freepik.com/premium-vector/doctor-icon-avatar-white_136162-58.jpg?w=2000",
      phone: "(61) 435 755 567",
      age: "24",
      identityCard:
        "http://nnewsn.com/wp-content/uploads/2014/03/%D8%A8%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B3%D9%8A%D8%B3%D9%8A.jpg",
    });
    data.patients.push({
      name: "Nick Jonas",
      phone: "(61) 435 755 567",
      age: "24",
      bloodType: "O+",
    });
  }
  return data;
};
