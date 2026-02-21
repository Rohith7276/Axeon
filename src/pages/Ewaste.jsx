import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 mb-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
      {title}
    </h2>
    <div className="text-gray-700 space-y-2 leading-relaxed">{children}</div>
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="ml-4 mt-3">
    <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
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
            Statutory Compliance & E-Waste Management Portal
          </h1>

          <p className="text-gray-800 font-medium">
            Specular Graphics Private Limited
          </p>

          <div className="mt-2 ml-4 text-gray-700">
            <p><span className="font-medium">EPR Registration No:</span> Applied For</p>
            <p><span className="font-medium">LMPC Registration No:</span> Applied For</p>
          </div>
        </div>
        <Section className="max-w-5xl mx-auto bg-gray-200 p-6 shadow-md rounded-lg">

          <div className="flex lg:flex-row gap-8 lg:gap-1 flex-col  justify-between">

            {/* Left Content */}
            <div className="space-y-1 text-sm">

              <h2 className="font-bold text-lg mb-2">
                PRODUCT INFORMATION & COMPLIANCE
              </h2>

              <p><span className="font-semibold">Product Name:</span> Dedicated Data Processing Unit</p>
              <p><span className="font-semibold">Model Number:</span> Bitaxe Gamma 601</p>
              <p><span className="font-semibold">HSN Code:</span> 8543.70.99</p>
              <p><span className="font-semibold">MRP:</span> ₹ 30,000.00 (Inclusive of all taxes)</p>
              <p><span className="font-semibold">Unit Sale Price:</span> ₹ 30,000.00 per 1 N</p>
              <p><span className="font-semibold">Quantity:</span> 1 Unit</p>
              <p><span className="font-semibold">Weight:</span> 0.1 Kg, Dimensions: 14 × 12 × 10 cm</p>
              <p><span className="font-semibold">Country of Origin:</span> China</p>

              <div className="mt-4">
                <p className="font-semibold">Imported & Marketed By:</p>
                <p>SPECULAR GRAPHICS PRIVATE LIMITED,</p>
                <p>4th Floor, 3rd Main Weavers Colony, Ganganagar Layout,</p>
                <p>Bangalore-560032, Karnataka, India.</p>
                <p>Month & Year of Import: February 2026</p>
              </div>

              <div className="mt-4">
                <p className="font-semibold">Customer Care Cell:</p>
                <p>Contact Person: Manager – Consumer Grievances</p>
                <p>Address: SPECULAR GRAPHICS PRIVATE LIMITED</p>
                <p>Bangalore-560032, Karnataka, India.</p>
                <p>Telephone No: +91-7760659382</p>
                <p>Email: sgplbngl@gmail.com</p>
              </div>

            </div>

            {/* Right Side */}
            <div className="flex flex-col mr-20 justify-around items-center gap-6">

              {/* QR Code Placeholder */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32   border-black  ">
                                  <img src="qr.png" className=" w-full " alt="qr image" />

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

          <p><span className="font-medium">Importer Details:</span> Specular Graphics Private Limited.</p>

          <p><span className="font-medium">Importer Registered Office:</span></p>
          <p className="ml-4">
            4th Floor, 3rd Main Weavers Colony,<br />
            Ganganagar Layout, Bangalore-560032,<br />
            Karnataka, India.
          </p>
        </Section>

        {/* Customer Support */}
        <Section title="Customer Support & Redressal">

          <p><span className="font-medium">Customer Care Manager:</span> Manager – Consumer Grievances.</p>
          <p><span className="font-medium">Support Telephone:</span> +91-7760659382.</p>
          <p><span className="font-medium">Support Email:</span> sgplbngl@gmail.com.</p>

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
            <p className="italic text-gray-600">
              This product must not be disposed of with regular household waste.
              It contains electronic components that require specialized recycling
              to prevent environmental damage.
            </p>
          </SubSection>

          <SubSection title="B. Do’s">
            <ul className="list-disc ml-6 space-y-1">
              <li>Drop used electronic products at authorized e-waste collection points.</li>
              <li>Disconnect the product from power before disposal.</li>
              <li>Protect fragile parts during transport.</li>
              <li>Consult the user manual for proper handling.</li>
            </ul>
          </SubSection>

          <SubSection title="C. Don’ts">
            <ul className="list-disc ml-6 space-y-1">
              <li>Do not dismantle the product yourself.</li>
              <li>Do not dispose in municipal waste bins.</li>
              <li>Do not sell to informal scrap dealers.</li>
              <li>Do not dispose in landfill garbage bins.</li>
            </ul>
          </SubSection>

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

      </div>

    </div>
  );
};

export default StatutoryCompliance;