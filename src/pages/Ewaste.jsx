import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 mb-6">
    <h2 className="text-xl font-medium text-gray-800 mb-4 border-b pb-2">
      {title}
    </h2>
    <div className="text-gray-700 space-y-2 leading-relaxed">{children}</div>
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="ml-4 mt-3">
    <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
    <div className="ml-4 space-y-1">{children}</div>
  </div>
);

const StatutoryCompliance = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
           E-Waste Management Policy
          </h1>

          <p className="text-gray-800 font-medium">
            <span className="font-medium">Company:</span> Specular Graphics Private Limited
          </p>

          <div className="mt-2  text-gray-700">
            <p><span className="font-medium">EPR Registration No:</span> Applied For</p>
            <p><span className="font-medium">LMPC Registration No:</span> Applied For</p>
          </div>
          <p className="mt-2"><span className="font-medium">Specular Graphics Private Limited </span> is committed to the environmentally sound management of electrical and electronic equipment at its end-of-life, in full compliance with the <span className="font-medium">E-Waste (Management) Rules, 2022. </span></p>

        </div>
        <Section title="Our Commitment">

          <p>We recognize our Extended Producer Responsibility (EPR) for the products we import and sell, specifically under <span className="font-medium"> Category ITEW1</span> (Dedicated Data Processing Units). We ensure that these products are channelized to authorized recyclers for safe disposal and material recovery.</p>

        </Section>
        <Section title="Our Authorized Recycling Partner">

          <p>We have partnered with <span className="font-medium"> M/s Trivendent Technologies Private Limited (Zolopik)</span>, a KSPCB-authorized recycler, to manage our e-waste collection and recycling process.</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><span className="font-medium">Recycler Name:</span> Trivendent Technologies Pvt Ltd (Zolopik)</li>
            <li><span className="font-medium">KSPCB Authorization No:</span> PCB/WMC/157/E-Waste/2022/675</li>
            <li><span className="font-medium">Facility Address:</span> #7A1, Kadugodi Industrial Area, Off Whitefield Road, Bengaluru - 560067</li>
          </ul>

        </Section>



        <Section title="PRODUCT INFORMATION & COMPLIANCE" className="max-w-5xl mx-auto bg-gray-200 p-6 shadow-md rounded-lg">

          <div className="flex lg:flex-row gap-8 lg:gap-1 flex-col  justify-between">

            {/* Left Content */}
            <div className="space-y-1">

          

              <p>
                <span className="font-medium">Product Name:</span> Dedicated Data Processing Unit
              </p>

              <p>
                <span className="font-medium">Model Number:</span> Bitaxe Gamma 601
              </p>

              <p>
                <span className="font-medium">HSN Code:</span> 8543.70.99
              </p>

              <p>
                <span className="font-medium">MRP:</span> ₹ 30,000.00 (Inclusive of all taxes)
              </p>

              <p>
                <span className="font-medium">Unit Sale Price:</span> ₹ 30,000.00 per 1 N
              </p>

              <p>
                <span className="font-medium">Quantity:</span> 1 Unit
              </p>

              <p>
                <span className="font-medium">Weight:</span> 0.1 Kg, Dimensions: 14 × 12 × 10 cm
              </p>

              <p>
                <span className="font-medium">Country of Origin:</span> China
              </p>

              <div className="mt-4">
                <p className="font-medium">Imported & Marketed By:</p>

                <p className="ml-2">
                  SPECULAR GRAPHICS PRIVATE LIMITED,
                </p>

                <p className="ml-2">
                  4th Floor, 3rd Main Weavers Colony, Ganganagar Layout,
                </p>

                <p className="ml-2">
                  Bangalore-560032, Karnataka, India.
                </p>

                <p className="ml-2">
                  Month & Year of Import: February 2026
                </p>
              </div>

              <div className="mt-4">
                <p className="font-medium">Customer Care Cell:</p>

                <p className="ml-2">
                  Contact Person: Manager – Consumer Grievances
                </p>

                <p className=" font-medium">
                  Address:
                </p>

                <p className="ml-4">
                  SPECULAR GRAPHICS PRIVATE LIMITED
                </p>

                <p className="ml-4">
                  4th Floor, 3rd Main Weavers Colony, Ganganagar Layout,
                </p>

                <p className="ml-4">
                  Bangalore-560032, Karnataka, India.
                </p>

                <p className=" ">
                   <span className="font-medium">Telephone No:</span> +91-7760659382
                </p>

                <p className=" ">
                  <span className="font-medium">Email:</span> <span className="underline">sgplbngl@gmail.com</span>
                </p>
              </div>

            </div>

            {/* Right Side */}
            <div className="flex flex-col mr-20 w-full lg:w-fit justify-around items-center gap-6">

              {/* QR Code Placeholder */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32   border-black  ">
                  <img src="qr.jpeg" className=" w-full " alt="qr image" />

                </div>
                <p className="text-sm mt-2 text-center">
                  Scan for E-waste Disposal Guide
                </p>
              </div>

              {/* E-Waste Bin Icon recreated */}
              <div className="flex flex-col items-center">
                <img src="image.png" className="w-44" alt="ewaste image" />
              </div>

            </div>

          </div>

        </Section>
        {/* Legal Entity */}
        <Section title="Legal Entity Information">
          <p><span className="font-medium">Legal Entity Name:</span> Specular Graphics Private Limited.</p>

          <p><span className="font-medium">Registered Office Address:</span></p>
          <p className="ml-4">
            4th Floor, 3rd Main Weavers Colony,<br />
            Ganganagar Layout, Bangalore-560032,<br />
            Karnataka, India.
          </p>

          <p><span className="font-medium">GST Registration Number:</span> 29ABBCS6534J1ZZ.</p>

          <p>  Specular Graphics Private Limited.</p>

          <p> </p>
          <p className="ml-4">
            4th Floor, 3rd Main, Weavers Colony,<br />
            Ganganagar Layout, Bangalore-560032,<br />
            Karnataka, India.
          </p>
        </Section>

        {/* Customer Support */}
        <Section title="Customer Support & Redressal">

          <p><span className="font-medium">Customer Care Manager:</span> Manager – Consumer Grievances.</p>
          <p><span className="font-medium">Support Telephone:</span> +91-7760659382.</p>
          <p><span className="font-medium">Support Email:</span> <span className="underline">sgplbngl@gmail.com</span>.</p>

          <p><span className="font-medium">Grievance Officer:</span></p>
          <p className="ml-4">
            Mr. Anand Kumar MS, Director,<br />
            4th Floor, 3rd Main Weavers Colony,<br />
            Ganganagar Layout, Bangalore-560032,<br />
            Karnataka, India.
          </p>

          <p>
            <span className="font-medium">Acknowledgment Timeframe:</span>
          </p>

          <p className="ml-4 italic text-gray-600">
            All complaints will be acknowledged within 48 hours and resolved within one month.
          </p>

        </Section>

        {/* E-Waste Guide */}
        <Section title="E-Waste Disposal and Management Guide">

          <p><span className="font-medium">EPR Registration No:</span> Applied For</p>

          <SubSection title="A. Disposal Instruction">
            <ul className="list-disc ml-6 space-y-1">

            <li className="text-gray-600">
              When your product (e.g., Bitaxe Gamma 601) reaches its end-of-life, please do not dispose of it in municipal bins or with general household waste.</li>
            <li className="text-gray-600">  <span className="font-medium">Request a Pickup:</span> Contact our E-Waste Helpline at +91-7760659382 or email us at <span className="underline">sgplbngl@gmail.com</span>.</li>
            <li className="text-gray-600"> <span className="font-medium">Drop-off:</span> You may drop off the equipment at our office in Ganganagar Layout or directly at our partner's facility in Kadugodi.

            </li>
            </ul>

            <p className="italic py-2 text-gray-600">
              "This product must not be disposed of with regular household waste.
              It contains electronic components that require specialized recycling
              to prevent environmental damage.""
            </p>
          </SubSection>

          <SubSection title="B. Do’s">
            <ul className="list-disc ml-6 space-y-1">
              <li>Always drop your used electronic products and accessories at the nearest Authorized E-Waste Collection Point.</li>
              <li>Disconnect the product from power before disposal.</li>
              <li>Protect fragile parts during transport.</li>
              <li>Consult the user manual for proper handling.</li>
            </ul>
          </SubSection>

          <SubSection title="C. Don’ts">
            <ul className="list-disc ml-6 space-y-1">
              <li>Do not dismantle the product on your own.</li>
              <li>Do not dispose in municipal waste bins (marked with a 'Do Not Dispose' sign).</li>
              <li>Do not sell to informal scrap dealers (Kabadiwalas).</li>
              <li>Do not dispose in landfill garbage bins that reach landfills, as it contains hazardous components like lead and mercury that can damage the environment. </li>
            </ul>
          </SubSection>

        </Section>
        <Section title="Hazards of Improper Handling">

          <p>
            Improper disposal can lead to the leaching of toxic chemicals into the soil
            and groundwater, causing long-term health risks to the community. By using our authorized channel, you ensure that
            <span className="font-medium"> 90%+ of materials </span>
            (plastics, metals, and PCBs) are recovered and reused in a circular economy.
          </p>

        </Section>
        {/* Collection & Buyback */}
        <Section title="E-Waste Collection & Buyback">

          <p><span className="font-medium">Collection Center:</span></p>

          <p className="ml-4">
            SPECULAR GRAPHICS PRIVATE LIMITED,<br />
            4th Floor, 3rd Main Weavers Colony,<br />
            Ganganagar Layout, Bangalore-560032,<br />
            Karnataka, India.
          </p>

          <p><span className="font-medium">Support Number:</span> +91-7760659382</p>

          <p><span className="font-medium">Incentive Scheme:</span></p>

          <p className="ml-4">
            Contact us for a discount coupon on your next purchase when returning end-of-life units.
          </p>

        </Section>

        {/* RoHS Declaration */}
        <Section title="Restriction of Hazardous Substances (RoHS) Declaration">

          <p>
            We, SPECULAR GRAPHICS PRIVATE LIMITED, hereby declare that our product,
            Dedicated Data Processing Unit (Model: Bitaxe Gamma 601),
            complies with E-Waste (Management) Rules, 2022 and RoHS provisions.
          </p>

          <p className="font-medium mt-3">Hazardous Substance Limits:</p>

          <ul className="list-disc ml-6">
            <li>Lead (Pb): &lt; 0.1%</li>
            <li>Mercury (Hg): &lt; 0.1%</li>
            <li>Cadmium (Cd): &lt; 0.01%</li>
            <li>Hexavalent Chromium: &lt; 0.1%</li>
            <li>PBB: &lt; 0.1%</li>
            <li>PBDE: &lt; 0.1%</li>
            <li>Phthalates: &lt; 0.1%</li>
          </ul>

          <p className="mt-3 text-gray-600 italic">
            Based on manufacturer technical documentation and regulatory records.
          </p>

        </Section>

        {/* Product Identification */}
        <Section title="Product Identification">

          <p><span className="font-medium">Product Name:</span> Dedicated Data Processing Unit.</p>
          <p><span className="font-medium">Model:</span> Bitaxe Gamma 601.</p>
          <p><span className="font-medium">HSN Code:</span> 8543.70.99.</p>
          <p><span className="font-medium">Importer:</span> SPECULAR GRAPHICS PRIVATE LIMITED, Bangalore.</p>

        </Section>
        <button  className="flex m-auto mt-11 ">

          <a href="/axeon.pdf" download="axeon.pdf" className="flex flex-col justify-center items-center gap-2 font-bold">
            <img src="pdf.png" className="w-32 " alt="download pdf" />
            Download E-Waste Policy
          </a>
        </button>
      </div>

    </div >
  );
};

export default StatutoryCompliance;