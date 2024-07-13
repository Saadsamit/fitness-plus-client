const Contact = () => {
  return (
    <div className="pt-24">
      <h3 className="text-3xl font-bold text-textColor mb-10 text-center">
        Customer Testimonials
      </h3>
      <div className="border border-textColor rounded-xl p-4 grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        <div className="md:border-r md:border-b-0 border-b border-textColor md:pb-0 pb-5">
          <h3 className="mb-2 sm:text-xl text-center font-bold tracking-tight text-textColor dark:text-white">
            Phone Number
          </h3>
          <p className="mb-2 sm:text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            +1 (800) 123-4567
          </p>
        </div>
        <div>
          <h3 className="mb-2 sm:text-xl text-center font-bold tracking-tight text-textColor dark:text-white">
            Email
          </h3>
          <p className="mb-2 sm:text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            contact@fitnessequipment.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
