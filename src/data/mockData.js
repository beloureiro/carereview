const mockData = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    specialty: "Cardiologist",
    location: "New York, NY",
    profilePicture: "https://via.placeholder.com/40?text=JS",
    availability: "Mon 9AM, Tue 2PM, Wed 11AM",
    overallRating: 4.5,
    ratingCount: 120,
    detailedRatings: {
      waitingTime: 3,
      communicationClarity: 5,
      communicationResponse: 4,
      valuePerception: 4,
      overallExperience: 5,
      environment: 4,
      supportStaff: 5
    },
    styleOfCare: {
      compassionate: 60,
      professional: 30,
      analytical: 10
    }
  },
  {
    id: 2,
    name: "Dr. John Doe",
    specialty: "Pediatrician",
    location: "Los Angeles, CA",
    profilePicture: "https://via.placeholder.com/40?text=JD",
    availability: "Tue 8AM, Thu 1PM, Fri 3PM",
    overallRating: 2.1,
    ratingCount: 95,
    detailedRatings: {
      waitingTime: 1,
      communicationClarity: 2,
      communicationResponse: 2,
      valuePerception: 3,
      overallExperience: 2,
      environment: 3,
      supportStaff: 2
    },
    styleOfCare: {
      compassionate: 30,
      professional: 80,
      analytical: 20
    }
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    specialty: "Dermatologist",
    location: "Chicago, IL",
    profilePicture: "https://via.placeholder.com/40?text=EJ",
    availability: "Mon 10AM, Wed 2PM, Fri 11AM",
    overallRating: 5.0,
    ratingCount: 150,
    detailedRatings: {
      waitingTime: 5,
      communicationClarity: 5,
      communicationResponse: 5,
      valuePerception: 5,
      overallExperience: 5,
      environment: 5,
      supportStaff: 5
    },
    styleOfCare: {
      compassionate: 10,
      professional: 10,
      analytical: 80
    }
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    specialty: "Orthopedic Surgeon",
    location: "Houston, TX",
    profilePicture: "https://via.placeholder.com/40?text=MB",
    availability: "Tue 9AM, Thu 3PM, Fri 1PM",
    overallRating: 4.2,
    ratingCount: 110,
    detailedRatings: {
      waitingTime: 3,
      communicationClarity: 4,
      communicationResponse: 4,
      valuePerception: 5,
      overallExperience: 4,
      environment: 5,
      supportStaff: 4
    },
    styleOfCare: {
      compassionate: 20,
      professional: 70,
      analytical: 10
    }
  },
  {
    id: 5,
    name: "Dr. Sarah Lee",
    specialty: "Psychiatrist",
    location: "Boston, MA",
    profilePicture: "https://via.placeholder.com/40?text=SL",
    availability: "Mon 1PM, Wed 10AM, Thu 4PM",
    overallRating: 3.8,
    ratingCount: 180,
    detailedRatings: {
      waitingTime: 3,
      communicationClarity: 4,
      communicationResponse: 4,
      valuePerception: 3,
      overallExperience: 4,
      environment: 4,
      supportStaff: 4
    },
    styleOfCare: {
      compassionate: 75,
      professional: 15,
      analytical: 10
    }
  }
];

export default mockData;
