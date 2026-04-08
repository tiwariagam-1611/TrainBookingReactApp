export const popularRoutes = [
  "Delhi ⇄ Mumbai", "Delhi ⇄ Kolkata", 
  "Bangalore ⇄ Chennai", "Mumbai ⇄ Pune"
];

export const trains = [
  {
    id: "12951",
    name: "Mumbai Rajdhani",
    from: "New Delhi",
    to: "Mumbai Central",
    dep: "16:55",
    arr: "08:10",
    duration: "15h 15m",
    rating: "4.5",
    classes: [
      { name: "1A", price: 2265, available: true },
      { name: "2A", price: 1665, available: true },
      { name: "3A", price: 1265, available: true },
      { name: "SL", price: 565, available: true }
    ]
  },
  {
    id: "22121",
    name: "LTT Superfast",
    from: "New Delhi",
    to: "Mumbai LTT",
    dep: "20:10",
    arr: "11:30",
    duration: "15h 20m",
    rating: "4.2",
    classes: [
      { name: "2S", price: 1450, available: true },
      { name: "3A", price: 1060, available: true },
      { name: "SL", price: 515, available: true }
    ]
  },
  {
    id: "12259",
    name: "Duronto Express",
    from: "New Delhi",
    to: "Mumbai Central",
    dep: "22:45",
    arr: "10:05",
    duration: "11h 20m",
    rating: "4.7",
    classes: [
      { name: "1A", price: 3550, available: true },
      { name: "2A", price: 2060, available: true },
      { name: "3A", price: 1400, available: true }
    ]
  }
];