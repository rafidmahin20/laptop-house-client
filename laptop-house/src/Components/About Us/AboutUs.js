import React from 'react';

const AboutUs = () => {
    return (
        <section class='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
        <div class='grid grid-cols-1 gap-24 md:grid-cols-2'>
          <div>
            <h1 class='mb-6 text-2xl font-light text-gray-900 md:text-3xl'>
              Basic Questions
            </h1>
            <p class='mt-10 mb-3 font-semibold text-gray-900'>
              What does your business do?
            </p>
            <p class='text-gray-600'>
              We store different kinds or brands of laptops. You can find any laptop here. 
            </p>
            <p class='mt-10 mb-3 font-semibold text-gray-900'>
              Track your package
            </p>
            <p class='text-gray-600'>
              You can find tracking information in your order details. If an order icludes multiple items, each may have seperate delivery dates and tracking information.
            </p>
            <p class='mt-10 mb-3 font-semibold text-gray-900'>
              Find a missing package that shows as delivered
            </p>
            <p class='text-gray-600'>
              Most packages arrive on time, but sometimes, the tracking may show as delivered and you don't have your package.
            </p>
          </div>
          <div>
            <h1 class='mb-6 text-2xl font-light md:text-3xl'>
              Advanced Questions
            </h1>
            <p class='mt-10 mb-3 font-semibold text-gray-900'>
              Delivery Gurantees
            </p>
            <p class='text-gray-600'>
             We offer guaranteed delivery on certain speeds and select products. When guaranteed delivery is available on an order, we'll state this on the checkout page, with the associated delivery date and cost. 
            </p>
            <p class='mt-10 mb-3 font-semibold text-gray-900'>
              Redeem a gift card
            </p>
            <p class='text-gray-600'>
             When you redeem an laptophouse.com gift card or gift voucher to your account, the funds are stored in your account and will automatically apply to your next eligible order.
            </p>
          </div>
        </div>
      </section>
    );
};

export default AboutUs;