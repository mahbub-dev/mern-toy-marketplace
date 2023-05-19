

const AboutUs = () => {
  return (
    <section className=" py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src='https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg?w=2000'
              alt="About Us"
              className="w-full rounded-lg mb-4"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-xl font-semibold mb-2">Our Story</h3>
            <p className="text-gray-200 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla
              mi at tellus fermentum, at vestibulum est finibus. Morbi pretium mi ac
              dolor sollicitudin, nec ullamcorper nisi finibus. Nullam id nulla eu ex
              viverra condimentum.
            </p>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-200">
              Quisque congue bibendum dignissim. Integer tincidunt dignissim ligula, nec
              viverra ex tristique ut. Proin feugiat nisi ac lobortis interdum. Sed
              consectetur est id nunc viverra, id efficitur odio efficitur. Morbi
              ullamcorper velit eu fermentum feugiat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
