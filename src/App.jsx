import ImageSlider from "./ImageSlider";

export default function App() {
  const slides = [
    {
      url: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Beach",
    },
    {
      url: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Island",
    },
    {
      url: "https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Island",
    },
    {
      url: "https://images.pexels.com/photos/228095/pexels-photo-228095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Island",
    },
    {
      url: "https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Island",
    },
    {
      url: "https://images.pexels.com/photos/602794/pexels-photo-602794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Island",
    },
    // Add other slides similarly...
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "70px auto 30px 400px", // Added a 50px margin from the left side
  };

  return (
    <div className="App">
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
